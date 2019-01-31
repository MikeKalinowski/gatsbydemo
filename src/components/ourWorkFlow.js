import React from 'react'
import styled from 'styled-components'

import Title from './common/title'
import GreenButton from './common/greenButton'
import OurWorkFlowImage from './common/ourWorkFlowImage.js'
import { device } from './device'

const OurWorkFlowWrapper = styled.div`
  padding: 80px 21px 0 21px;
  position: relative;
  max-width: 1240px;
  left: 50%;
  transform: translate(-50%,0);
  box-sizing: border-box;
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
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  margin-bottom: 40px;
  width: 65%;
  max-width: 600px;
  box-sizing: border-box;
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
  color: #535353;
  @media ${device.tablet} {
      grid-column: 2;
  }
`

const StyledGreenButton = styled(GreenButton)`
  margin-top: 40px;
  color: #262626;
  background: none;
  border: 1.5px solid #DADADA;

  @media ${device.tablet} {
      grid-column: 2;
      margin-top: 40px;
  }

  :hover
    {background: #FFFFFF;
      border: 1.5px solid #35CC62;
      transform: translateY(-3px);
    
      color: #35CC62;}
`

const OurWorkFlow = () => (
  <OurWorkFlowWrapper>
  	<SmallTitle>
  		BEST SERVICE
  	</SmallTitle>
  	<StyledTitle titleText="Our Work Flow"/>
  	<StyledOurWorkFlowImage />
  	<Text>
  		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ex ea commodo consequat.
      <br />
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit. 
  	</Text>
  	<StyledGreenButton buttonText="LEARN MORE"/>
  </OurWorkFlowWrapper>
)

export default OurWorkFlow