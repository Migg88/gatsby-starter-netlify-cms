import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import videoWayak from '../img/wayak.mp4'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  divider,
  mostVisitedBack,
  tour,
  secondTour,
  thirdTour,
  tourTypes,
}) => (
  <div >
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <form className="searcher" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
          <input className="input is-large" type="text" placeholder="¿A dónde viajas?" />
          <div className="control">
            <div className="select is-large">
              <select className="is-hovered">
                <option>Tipo de tour</option>
                <option>With options</option>
              </select>
            </div>
          </div>
          <input className="input is-large" type="date" placeholder="Fecha" />
          <input className="button is-warning is-large" type="submit" value="Buscar" />
        </form>
      </div>
    </div>
    <section className="section"
      style={{
        backgroundImage: `url(${
          !!mostVisitedBack.childImageSharp ? mostVisitedBack.childImageSharp.fluid.src : mostVisitedBack
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <Img className="divider-top" fluid={divider.childImageSharp.fluid} />
      <div className="container">
        <h2 className="title t-yellow is-1 has-text-centered space-1">Los Más Visitados</h2>
        <div className="most-visited-tours" style={{marginTop: '40px', marginBottom: '50px'}}>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item tour-card active"
                style={{
                  backgroundImage: `url(${
                    !!tour.childImageSharp ? tour.childImageSharp.fluid.src : tour
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="carousel-caption tour-caption d-none d-md-block">
                  <h3 className="title is-2 t-yellow">Chichen Itza</h3>
                  <div className="indicators">
                    <span>
                      <i className="fas fa-clock"></i>
                      <p>6 horas</p>
                    </span>
                    <span>
                      <i className="fas fa-utensils"></i>
                    </span>
                    <span>
                      <i className="fas fa-shuttle-van"></i>
                    </span>
                    <span>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <button className="button">Ver Más</button>
                </div>     
              </div>
              <div className="carousel-item tour-card"
                style={{
                  backgroundImage: `url(${
                    !!secondTour.childImageSharp ? secondTour.childImageSharp.fluid.src : secondTour
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="carousel-caption tour-caption d-none d-md-block">
                  <h3 className="title is-2 t-yellow">Tour Title</h3>
                  <div className="indicators">
                    <span>
                      <i className="fas fa-clock"></i>
                      <p>6 horas</p>
                    </span>
                    <span>
                      <i className="fas fa-utensils"></i>
                    </span>
                    <span>
                      <i className="fas fa-shuttle-van"></i>
                    </span>
                    <span>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <button className="button">Ver Más</button>
                </div>
              </div>
              <div className="carousel-item tour-card"
                style={{
                  backgroundImage: `url(${
                    !!thirdTour.childImageSharp ? thirdTour.childImageSharp.fluid.src : thirdTour
                  })`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="carousel-caption tour-caption d-none d-md-block is-rounded">
                  <h3 className="title is-2 t-yellow">Tour Title</h3>
                  <div className="indicators">
                    <span>
                      <i className="fas fa-clock"></i>
                      <p>6 horas</p>
                    </span>
                    <span>
                      <i className="fas fa-utensils"></i>
                    </span>
                    <span>
                      <i className="fas fa-shuttle-van"></i>
                    </span>
                    <span>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <button className="button">Ver Más</button>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <Img className="divider-bottom" fluid={divider.childImageSharp.fluid} />
    </section>
    <section>

      <div className="container" style={{padding: '150px 0 100px 0', backgroundColor: '#f1f1f1', boxShadow: '0 10px 21px rgba(0, 0, 0, 0.16)'}}>
        <h2 className="title t-yellow is-1 has-text-centered space-1" style={{paddingBottom: '50px'}}>Nuestros Tours</h2>
        <Img style={{maxWidth: '60%', margin: '0 auto'}} fluid={tourTypes.childImageSharp.fluid} />
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const divider = data.divider
  const mvBackground = data.mvBackground
  const tour = data.tour
  const tourTypes = data.tourTypes
  const secondTour = data.secondTour
  const thirdTour = data.third

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        divider={divider}
        mostVisitedBack={mvBackground}
        tour={tour}
        secondTour={secondTour}
        thirdTour={thirdTour}
        tourTypes={tourTypes}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    tourTypes: file(relativePath: { eq: "tour-types.png" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tour: file(relativePath: { eq: "tour.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondTour: file(relativePath: { eq: "cenote.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    third: file(relativePath: { eq: "buceo.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mvBackground: file(relativePath: { eq: "most-visited-back.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    divider: file(relativePath: { eq: "separador.png" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
