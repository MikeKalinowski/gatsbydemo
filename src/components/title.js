// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
	font-style: normal;
	font-weight: 600;
	line-height: 46px;
	font-size: 30px;
	color: #333333;
`

const Title = ({ className, titleText }) => (
  <StyledTitle className={className}>
    {titleText}
  </StyledTitle>
)

export default Title