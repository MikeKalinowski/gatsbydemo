import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DummySite from '../components/dummySite'



const PagesPage = ({ data }) => (
  <Layout>
    <SEO title="Pages" keywords={[`gatsby`, `application`, `react`]} />
    <DummySite data={data} />
  </Layout>
)

export default PagesPage

export const query = graphql`
	query PagesPageQuery {
		contentfulDummy: contentfulPages{
		    dummyTitle: pagesTitle
	        dummyText: pagesText {
	          dummyText: pagesText
	        }
		}
	  	allContentfulDummyGroup(sort: {fields: [createdAt], order: ASC}) {
		    edges {
		      	node {
					groupTitle
					groupText {
						groupText
			        }
			        groupIcon {
						groupIcon
			        }
					createdAt
		    	}
		  	}
		}
	}
`