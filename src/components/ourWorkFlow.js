import React from 'react'
import Title from './title'
import GreenButton from './greenButton'
import styled from 'styled-components'

const OurWorkFlowWrapper = styled.div`
  margin: 80px 21px 0 21px;
`

const SmallTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  font-size: 14px;
  letter-spacing: 3.2px;
  text-transform: uppercase;
`

const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  margin-bottom: 40px;
`

const Text = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #535353;
`

const StyledGreenButton = styled(GreenButton)`
  margin-top: 40px;
  color: #262626;
  background: none;
  border: 1.5px solid #DADADA;

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
  	<Title titleText="Our Work Flow"/>
  	<StyledImg src={require('../images/phones.png')} alt="" />
  	<Text>
  		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ex ea commodo consequat.   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit. 
  	</Text>
  	<StyledGreenButton buttonText="LEARN MORE"/>
  </OurWorkFlowWrapper>
)

export default OurWorkFlow