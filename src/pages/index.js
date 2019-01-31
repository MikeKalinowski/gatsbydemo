import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ShowYourWork from '../components/showYourWork'
import OurWorkFlow from '../components/ourWorkFlow'
import OurOffer from '../components/ourOffer'
import SEO from '../components/seo'
import '../components/fonts.css';

// Below function shows all margins
// (function(){var all=document.getElementsByTagName("*");for(var i=0,max=all.length;i<max;i++){all[i].style.outline="1px solid #"+((1<<24)*Math.random()|0).toString(16)};})();



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero data={data}/>
    <ShowYourWork data={data}/>
    <OurWorkFlow data={data}/>
    <OurOffer data={data}/>
  </Layout>
)

export default IndexPage


export const query = graphql`
	query HomePageQuery {
		contentfulHome {
		    heroText
		    showYourWorkText2 {
		      	showYourWorkText2
		    }
		    ourWorkFlowText {
		      	ourWorkFlowText
		    }
		    ourOfferText {
		      	ourOfferText
		    }
		}
		allContentfulCards(sort: {fields: [createdAt], order: ASC}) {
		    edges {
		      	node {
			        cardTitle
			        cardText {
			          cardText
			        }
			        cardIcon {
			          cardIcon
			        }
			        createdAt
		    	}
		    }
		}
		allContentfulAccordions(sort: {fields: [createdAt], order: ASC}) {
		    edges {
		      	node {
			        accordionTitle
			        accordionText {
			          	accordionText
			        }
			        accordionIcon {
			          	accordionIcon
			        }
			        createdAt
			    }
		    }
		}
	}
`