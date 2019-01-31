import React from 'react'
import styled from 'styled-components'
import { device } from '../device'

const StyledTitle = styled.div`
	font-style: normal;
	font-weight: 600;
	line-height: 46px;
	font-size: 30px;
	color: #333333;
	@media ${device.tablet} {
		font-size: 38px;
		font-weight: normal;
	}
`

const Title = ({ className, titleText }) => (
  <StyledTitle className={className}>
    {titleText}
  </StyledTitle>
)

export default Title