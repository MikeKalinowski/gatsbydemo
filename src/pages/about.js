import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DummySite from '../components/dummySite'



const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <DummySite data={data} />
  </Layout>
)

export default AboutPage

export const query = graphql`
	query AboutPageQuery {
		contentfulDummy: contentfulAbout{
		    dummyTitle: aboutTitle
	        dummyText: aboutText {
	          dummyText: aboutText
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