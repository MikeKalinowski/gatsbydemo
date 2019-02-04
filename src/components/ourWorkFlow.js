import React from 'react'
import styled from 'styled-components'

import Title from './common/title'
import GreenButton from './common/greenButton'
import OurWorkFlowImage from './common/ourWorkFlowImage.js'
import { device } from './device'

const OurWorkFlowWrapper = styled.div`
  padding: ${props => props.theme.layout.wrapperPaddingMobile};
  position: relative;
  max-width: ${props => props.theme.layout.contentWidthDesktop};
  left: 50%;
  transform: translate(-50%,0);
  display: grid;
  grid-column-gap: 50px;
  justify-content: space-between;
  @media ${device.tablet} {
      padding: 300px 40px 0 40px;
      grid-template-columns: 6fr 4fr;
      grid-template-rows: 30% 80px auto 1fr;
      grid-column: 1;
      align-items: start;
  }
`

const SmallTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  font-size: 14px;
  letter-spacing: 3.2px;
  text-transform: uppercase;
  @media ${device.tablet} {
      grid-column: 2;
      align-self: end
  }
`

const StyledTitle = styled(Title)`
  @media ${device.tablet} {
    grid-column: 2;
}
`

const StyledOurWorkFlowImage = styled(OurWorkFlowImage)`
  display: block;
  margin: 16px auto 40px;
  width: 65%;
  max-width: 600px;
  @media ${device.tablet} {
      grid-column: 1;
      grid-row: 1 / 5;
      margin-top: 0px;
      margin-bottom: 0px;
  }
`

const Text = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: ${props => props.theme.color.gray};
  @media ${device.tablet} {
      grid-column: 2;
  }
`

const StyledGreenButton = styled(GreenButton)`
  margin-top: 40px;
  color: ${props => props.theme.color.gray};
  background: none;
  border: 1.5px solid #DADADA;
  @media ${device.tablet} {
      grid-column: 2;
  }
  :hover {
    background: #FFFFFF;
    border: 1.5px solid ${props => props.theme.color.accent};
    transform: translateY(-3px);
    color: ${props => props.theme.color.accent};;
  }
`

const OurWorkFlow = ({ data }) => (
  <OurWorkFlowWrapper>
  	<SmallTitle>
  		BEST SERVICE
  	</SmallTitle>
  	<StyledTitle titleText="Our Work Flow"/>
  	<StyledOurWorkFlowImage />
  	<Text>
  		{data.contentfulHome.ourWorkFlowText.ourWorkFlowText} 
  	</Text>
  	<StyledGreenButton buttonText="LEARN MORE" link="/blog/"/>
  </OurWorkFlowWrapper>
)

export default OurWorkFlow