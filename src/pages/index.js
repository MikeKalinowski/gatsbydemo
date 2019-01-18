import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Image from '../components/image'
import SEO from '../components/seo'
import '../components/fonts.css';

// Below function shows all margins
(function(){var all=document.getElementsByTagName("*");for(var i=0,max=all.length;i<max;i++){all[i].style.outline="1px solid #"+((1<<24)*Math.random()|0).toString(16)};})();

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <div>Show Your Work1</div>
    <div>Accordions</div>
    <div>Our Work Flow</div>
    <div>Show your work - cards</div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
