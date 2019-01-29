import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';

import Header from './header'
import HeaderBig from './headerBig'
import Footer from './footer'
import './layout.css'

const MainWrapper = styled.div`
  margin: 0px auto;
  /*max-width: 375px;*/
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
      }
    `}
    render={data => (
      <>
        <MainWrapper>
          <MediaQuery minWidth={800}>
            {(matches) => {
              if (matches) {
                return <HeaderBig />;
              } else {
                return <Header />;
              }
            }}
          </MediaQuery>
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
