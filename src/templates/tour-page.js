import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const tourComponent = ({
	content,
	contentComponent,
	helmet,
}) => {

	const tourContent = contentComponent || Content

	return(

		<p>works</p>

	)

}

export const tourQuery = graphql`
	query TourPage($id: String!){
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
			}
		}
	}
`