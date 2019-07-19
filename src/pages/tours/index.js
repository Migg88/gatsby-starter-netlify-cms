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