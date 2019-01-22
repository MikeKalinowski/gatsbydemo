import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ShowYourWork from '../components/showYourWork'
import OurWorkFlow from '../components/ourWorkFlow'
import OurOffer from '../components/ourOffer'
import SEO from '../components/seo'
import '../components/fonts.css';

// Below function shows all margins
// (function(){var all=document.getElementsByTagName("*");for(var i=0,max=all.length;i<max;i++){all[i].style.outline="1px solid #"+((1<<24)*Math.random()|0).toString(16)};})();

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <ShowYourWork />
    <OurWorkFlow />
    <OurOffer />
  </Layout>
)

export default IndexPage
