import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './layout/header'
import HeaderBig from './layout/headerBig'
import Footer from './layout/footer'
import './layout.css'

const MainWrapper = styled.div`
  margin: 0px auto;
  padding-top: 0px;
  color: #333333;
  font-family: Montserrat;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulHeader(sort: {fields: [createdAt], order: ASC}) {
          edges {
            node {
              linkTitle
              linkUrl
              createdAt
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <MainWrapper>
          <Header data={data}/>
          <HeaderBig data={data}/>
          {children}
          <Footer />
        </MainWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
