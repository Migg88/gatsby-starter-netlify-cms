import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const Tours = ({
	toursBack
}) => (
  <Layout>
    <div>
      <div
		  className="full-width-image margin-top-0"
		  style={{
		  	backgroundImage: `url(${
	          !!toursBack.childImageSharp ? toursBack.childImageSharp.fluid.src : toursBack
	        })`,
		    backgroundPosition: `center`,
		    backgroundSize: 'cover',
		    height: '400px'
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
		<div className="container"
			style={{
				padding: '50px 0',
				backgroundColor: '#f1f1f1',
				boxShadow: '0 10px 21px rgba(0, 0, 0, 0.16)'
			}}
		>
			<div className="columns">
				<div className="column"
					style={{
						paddingTop: '5rem',
						paddingBottom: '5rem',
						backgroundColor: '#443575',
						borderRadius: '20px'
					}}
				>
					<h3 className="title has-text-white">Tours</h3>
					<Link className="filter-links has-text-white has-text-left" to="/about">
	                  Tours culturales y temáticos (8)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Excursiones de un día (6)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Actividades al aire libre (9)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Tour y lugares de interés (5)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Deportes acuáticos (3)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Apto para todo público (5)
	                </Link>
	                <h3 className="title has-text-white">Precios</h3>
					<Link className="filter-links has-text-white has-text-left" to="/about">
	                  $ 0 - $500
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  $500 - $900
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  $950 - $2000
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  $2000 - $5000
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  $5000 - $10,000
	                </Link>
	                <h3 className="title has-text-white">Populares</h3>
					<Link className="filter-links has-text-white has-text-left" to="/about">
	                  Tours culturales y temáticos (8)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Excursiones de un día (6)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Actividades al aire libre (9)
	                </Link>
	                <h3 className="title has-text-white">Especiales</h3>
					<Link className="filter-links has-text-white has-text-left" to="/about">
	                  Oferta especial (0) 
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  De 4 horas a 1 día (15)
	                </Link>
	                <Link className="filter-links has-text-white has-text-left" to="/about">
	                  Más de 3 días (5)
	                </Link>
				</div>
				<div className="column is-four-fifths">
					<div className="order-filter is-flex has-text-white"
						style={{
							backgroundColor: '#443575',
							padding: '1rem',
							borderRadius: '20px',
						}}
					>
						<p>Ordenar por:</p>
						<ul className="is-flex">
							<li>
								<a className="has-text-white order-links" href="#">Predeterminado</a>
							</li>
							<li>
								<a className="has-text-white order-links" href="#">Precio más bajo</a>
							</li>
							<li>
								<a className="has-text-white order-links" href="#">A-Z</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    </div>
  </Layout>
)

export default class ToursPage extends React.Component {
	render() {
		return(
			<Tours 
				toursBack={this.props.data.toursBack}
			/>
		)
	}
}

export const pageQuery = graphql`
  query {
    toursBack: file(relativePath: { eq: "tours-background.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`