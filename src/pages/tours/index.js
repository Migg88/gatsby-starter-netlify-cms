import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

const Tours = ({
	toursBack,
	tulumImage
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
								<Link className="has-text-white order-links">Predeterminado</Link>
							</li>
							<li>
								<Link className="has-text-white order-links">Precio más bajo</Link>
							</li>
							<li>
								<Link className="has-text-white order-links">A-Z</Link>
							</li>
						</ul>
					</div>
					<div className="tours-container">
						<div className="tour has-text-white">
							<div className="relative tour-wrapper is-flex">
								<div className="tour-image"
									style={{
										backgroundImage: `url(${
								          !!tulumImage.childImageSharp ? tulumImage.childImageSharp.fluid.src : tulumImage
								        })`
									}}
								>
								</div>
								<div className="tour-info">
									<h3 className="title has-text-white is-size-4">
										Tour Tulum Con Cenotes Desde Cancún
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
									</p>
									<div className="indicators">
										<div>
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
					                    <div className="price ">
					                    	<p className="is-size-3 has-text-right">
					                    		<span>desde</span>
					                    		$3000
					                    	</p>
					                    	<button className="button is-rounded">
					                    		Detalles
					                    	</button>
					                    </div>
									</div>
								</div>
							</div>
						</div>
						<div className="tour has-text-white">
							<div className="relative tour-wrapper is-flex">
								<div className="tour-image"
									style={{
										backgroundImage: `url(${
								          !!tulumImage.childImageSharp ? tulumImage.childImageSharp.fluid.src : tulumImage
								        })`
									}}
								>
								</div>
								<div className="tour-info">
									<h3 className="title has-text-white is-size-4">
										Tour Tulum Con Cenotes Desde Cancún
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
									</p>
									<div className="indicators">
										<div>
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
					                    <div className="price">
					                    	<p className="is-size-3 has-text-right">
					                    		<span>desde</span>
					                    		$3000
					                    	</p>
					                    	<button className="button is-rounded">
					                    		Detalles
					                    	</button>
					                    </div>
									</div>
								</div>
							</div>
						</div>
						<div className="tour has-text-white">
							<div className="relative tour-wrapper is-flex">
								<div className="tour-image"
									style={{
										backgroundImage: `url(${
								          !!tulumImage.childImageSharp ? tulumImage.childImageSharp.fluid.src : tulumImage
								        })`
									}}
								>
								</div>
								<div className="tour-info">
									<h3 className="title has-text-white is-size-4">
										Tour Tulum Con Cenotes Desde Cancún
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
									</p>
									<div className="indicators">
										<div>
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
					                    <div className="price">
					                    	<p className="is-size-3 has-text-right">
					                    		<span>desde</span>
					                    		$3000
					                    	</p>
					                    	<button className="button is-rounded">
					                    		Detalles
					                    	</button>
					                    </div>
									</div>
								</div>
							</div>
						</div>
						<div className="tour has-text-white">
							<div className="relative tour-wrapper is-flex">
								<div className="tour-image"
									style={{
										backgroundImage: `url(${
								          !!tulumImage.childImageSharp ? tulumImage.childImageSharp.fluid.src : tulumImage
								        })`
									}}
								>
								</div>
								<div className="tour-info">
									<h3 className="title has-text-white is-size-4">
										Tour Tulum Con Cenotes Desde Cancún
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
										proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
									</p>
									<div className="indicators">
										<div>
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
					                    <div className="price">
					                    	<p className="is-size-3 has-text-right">
					                    		<span>desde</span>
					                    		$3000
					                    	</p>
					                    	<button className="button is-rounded">
					                    		Detalles
					                    	</button>
					                    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<nav class="pagination is-centered" role="navigation" aria-label="pagination">
					  <a class="pagination-previous">Previous</a>
					  <a class="pagination-next">Next page</a>
					  <ul class="pagination-list">
					    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
					    <li><span class="pagination-ellipsis">&hellip;</span></li>
					    <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
					    <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
					    <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
					    <li><span class="pagination-ellipsis">&hellip;</span></li>
					    <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
					  </ul>
					</nav>
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
				tulumImage={this.props.data.tulum}
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
    tulum: file(relativePath: { eq: "tulum.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`