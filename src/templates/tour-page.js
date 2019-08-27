import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const TourComponent = ({data}) => {

	const html = data.markdownRemark.html
	const { frontmatter } = data.markdownRemark
	const title = data.markdownRemark.frontmatter.title
	const img = data.markdownRemark.frontmatter.image
	const image = data.acuaticos
	const descuento = data.descuento
	const descripcion = data.descripcion
	const sugerencias = data.sugerencias

	console.log(img)

	return(
		<Layout>
			<section style={{margin: '50px 0'}}>
				<div className="container"
					style={{
						padding: '3rem',
						backgroundColor: '#f1f1f1',
						boxShadow: '0 10px 21px rgba(0, 0, 0, 0.16)'
					}}
				>
					<div className="columns">
						<div className="column is-two-thirds">
							<Img style={{borderRadius: '30px'}} fluid={image.childImageSharp.fluid} />
							<Img style={{width: '100%', marginTop: '30px'}} fluid={descripcion.childImageSharp.fluid} />
						</div>
						<div className="column is-one-third">
							<h1 className="title t-yellow is-1 has-text-centered" style={{borderBottom: '1px solid #eab92a'}}>
								Tour Bacalar
							</h1>
							<div className="columns">
								<div className="column is-half">
									<p className="t-yellow is-size-3 has-text-centered has-text-weight-bold">50%<span className="is-size-7">de descuento</span></p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">Adultos</p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">$ 2,O18.00 MXN</p>
								</div>
								<div className="column is-half">
								<p className="t-yellow is-size-3 has-text-centered has-text-weight-bold">30%<span className="is-size-7">de descuento</span></p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">Niños</p>
									<p className="has-text-centered is-purple is-size-5 has-text-weight-bold">$ 1,OOO.00 MXN</p>
								</div>
							</div>
							<form className="searcher">
								<div className="field">
								  <div className="control">
								    <div style={{width: '100%'}} className="select is-medium">
								      <select style={{width: '100%'}}>
								        <option>Transportación desde:</option>
								        <option>With options</option>
								      </select>
								    </div>
								  </div>
								</div>
								<div className="columns">
									<div className="column is-half">
										<div className="field">
										  <div className="control">
										    <div className="select is-medium">
										      <select>
										        <option>Adultos</option>
										        <option>With options</option>
										      </select>
										    </div>
										  </div>
										</div>
									</div>
									<div className="column is-half">
										<div className="field">
										  <div className="control">
										    <div className="select is-medium">
										      <select>
										        <option>Niños</option>
										        <option>With options</option>
										      </select>
										    </div>
										  </div>
										</div>
									</div>
								</div>
								<div className="field">
								  <div className="control">
								    <div className="is-medium">
								      <input className="input is-medium" type="date" placeholder="Fecha de visita" />
								    </div>
								  </div>
								</div>
								<p className="has-text-centered is-size-3 has-text-weight-bold is-purple">
									Total:
									<span style={{marginLeft: '2rem'}}>$2,018.00 MXN</span>
								</p>
								<input style={{width: '100%', backgroundColor: '#eab92a', color: '#000', marginTop: '30px'}} type="submit" className="button is-large has-text-white" value="COMPRAR" />
							</form>           
							<Img style={{width: '100%', marginTop: '30px'}} fluid={descuento.childImageSharp.fluid} />
						</div>
					</div>
					<h2 className="title t-yellow is-1 has-text-centered" style={{borderBottom: '3px solid #eab92a', margin: '2em 0', paddingBottom: '.5em'}}>Tours Relacionados</h2>
					<Img style={{width: '100%'}} fluid={sugerencias.childImageSharp.fluid} />
				</div>
			</section>
		</Layout>

	)

}

export default TourComponent

export const tourQuery = graphql`
	query TourPage($id: String!){
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
				image{
					childImageSharp{
						fluid(maxWidth: 1200) {
							...GatsbyImageSharpFluid
						}
					}
				}
				description
				price {
		            adults_discount
		            adults_price
		            children_discount
		            children_price
		            q_price
		        }
			}
		}
		acuaticos: file(relativePath: { eq: "acuaticos.jpg" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    descuento: file(relativePath: { eq: "descuento.png" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    descripcion: file(relativePath: { eq: "descripcion.png" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    sugerencias: file(relativePath: { eq: "sugerencias.png" }){
	      childImageSharp {
	        fluid(maxWidth: 1920) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	}
`