import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DummySite from '../components/dummySite'



const WorkPage = ({ data }) => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <DummySite data={data} />
  </Layout>
)

export default WorkPage

export const query = graphql`
	query WorkPageQuery {
		contentfulDummy: contentfulWork{
		    dummyTitle: workTitle
	        dummyText: workText {
	          dummyText: workText
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