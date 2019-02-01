import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
    padding-top: 180px;
    text-align: center;
    width: 100%
`


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
