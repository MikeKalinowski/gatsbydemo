import React from 'react'
import Title from './title'
import GreenButton from './greenButton'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    margin: 80px 21px 0 21px;
`

const DotTitle = styled.div`
    display: flex;
`

const SmallTitle = styled.div`
margin-top: 40px;
font-style: normal;
font-weight: 500;
line-height: 23px;
font-size: 14px;
letter-spacing: 1.4px;
text-transform: uppercase;
`

const Text = styled.div`
margin-top: 10px;
font-family: Open Sans;
font-style: normal;
font-weight: normal;
line-height: 26px;
font-size: 16px;
letter-spacing: 0.1px;
color: #878787
`

const StyledTitle = styled(Title)`
    color: #29CE5D;
`

const StyledGreenButton = styled(GreenButton)`
    margin: 40px 0px 40px 0px;
`

const Footer = () => (
  <FooterWrapper>
    <DotTitle>
	    <Title titleText="Creation"/>
	    <span className="dot">
	    	<StyledTitle titleText="."/>
	    </span>
    </DotTitle>
    <SmallTitle>
    Address
    </SmallTitle>
    <Text>
    5th Floor, AH Building, 756 New Designst Melbourne, Australia
    </Text>
    <SmallTitle>
    Help
    </SmallTitle>
    <Text>
    Duis aute irure dolor in repre henderit in  iste natus esse.
    </Text>
    <StyledGreenButton buttonText="CONTACT US"/>
  </FooterWrapper>
)

export default Footer
