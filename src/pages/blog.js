import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DummySite from '../components/dummySite'



const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <DummySite data={data} />
  </Layout>
)

export default BlogPage

export const query = graphql`
	query BlogPageQuery {
		contentfulBlog{
		    blogTitle
	        blogText {
	          blogText
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