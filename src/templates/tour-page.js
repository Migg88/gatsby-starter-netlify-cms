import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const TourComponent = () => {

	return(
		<Layout>
			<p>works</p>
		</Layout>

	)

}

export default TourComponent

export const tourQuery = graphql`
	query TourPage($id: String!){
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
		}
	}
`