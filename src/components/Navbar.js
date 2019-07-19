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
      <div>
        <nav
          className="navbar"
          style={{height: '120px'}}
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Capptour" style={{ width: '188px' }} />
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
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end flex-vertical-align has-text-centered">
                <Link className="navbar-item secondary-links column-direction has-text-white" to="/about">
                  <span className="icon is-small has-text-white">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  Carrito
                </Link>
                <Link className="navbar-item secondary-links column-direction has-text-white" to="/products">
                  <span className="icon is-small has-text-white">
                    <i className="far fa-comments"></i>
                  </span>
                  Contacto
                </Link>
                <Link className="navbar-item secondary-links column-direction has-text-white" to="/blog">
                  <span className="icon is-small has-text-white">
                    <i className="fas fa-users"></i>
                  </span>
                  Nosotros
                </Link>
                <Link className="navbar-item secondary-links column-direction has-text-white" to="/contact">
                  <span className="icon is-small has-text-white">
                    <i className="fab fa-facebook"></i>
                  </span>
                  Facebook
                </Link>
                <Link className="navbar-item secondary-links column-direction has-text-white" to="/contact/examples">
                  <span className="icon is-small has-text-white">
                    <i className="fab fa-instagram"></i>
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
        <nav
          className="navbar"
          role="navigation"
          aria-label="main-navigation"
          style={{backgroundColor: 'white' }}
        >
          <div className="container">
            <div
              id="navMenu"
              className="navbar-menu navbar-centered"
            >
              <div className="is-flex flex-vertical-align has-text-centered">
                <Link className="navbar-item is-purple" to="/about">
                  Inicio
                </Link>
                <Link className="navbar-item is-purple" to="/products">
                  Hoteles
                </Link>
                <Link className="navbar-item is-purple" to="/blog">
                  Restaurantes
                </Link>
                <Link className="navbar-item is-purple" to="/contact">
                  Rentas vacacionales
                </Link>
                <Link className="navbar-item is-purple" to="/contact/examples">
                  Paquetes vacacionales
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-item is-purple" to="/contact/examples">
                    Tours
                  </Link>

                  <div className="navbar-dropdown">
                    <Link className="navbar-item is-purple" to="/contact/examples">
                      Acuaticos
                    </Link>
                    <Link className="navbar-item is-purple" to="/contact/examples">
                      Al aire libre
                    </Link>
                    <Link className="navbar-item is-purple" to="/contact/examples">
                      Culturales
                    </Link>
                    <Link className="navbar-item is-purple" to="/contact/examples">
                      Deportes Acuaticos
                    </Link>
                    <Link className="navbar-item is-purple" to="/contact/examples">
                      Tematicos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
