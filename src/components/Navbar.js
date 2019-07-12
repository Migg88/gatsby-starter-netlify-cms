import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/capptour.webp'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '188px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-end ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start flex-vertical-align has-text-centered first-nav-links">
              <Link className="navbar-item secondary-links column-direction has-text-white" to="/about">
                <span className="icon is-small has-text-white">
                  <i class="fas fa-shopping-cart"></i>
                </span>
                Carrito
              </Link>
              <Link className="navbar-item secondary-links column-direction has-text-white" to="/products">
                <span className="icon is-small has-text-white">
                  <i class="far fa-comments"></i>
                </span>
                Contacto
              </Link>
              <Link className="navbar-item secondary-links column-direction has-text-white" to="/blog">
                <span className="icon is-small has-text-white">
                  <i class="fas fa-users"></i>
                </span>
                Nosotros
              </Link>
              <Link className="navbar-item secondary-links column-direction has-text-white" to="/contact">
                <span className="icon is-small has-text-white">
                  <i class="fab fa-facebook"></i>
                </span>
                Facebook
              </Link>
              <Link className="navbar-item secondary-links column-direction has-text-white" to="/contact/examples">
                <span className="icon is-small has-text-white">
                  <i class="fab fa-instagram"></i>
                </span>
                Instagram
              </Link>
            </div>
            <div className="navbar-end flex-vertical-align">
              <input className="input is-rounded" type="text" placeholder="Buscar"/>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
