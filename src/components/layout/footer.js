import React from 'react'
import styled from 'styled-components'

import Title from '../common/title'
import GreenButton from '../common/greenButton'
import { device } from '../device'

const FooterWrapper = styled.div`
    padding: 80px 21px 0 21px;
    position: relative;
    max-width: 1240px;
    left: 50%;
    transform: translate(-50%,0);
    box-sizing: border-box;
    @media ${device.tablet} {
        padding: 200px 0px 80px 0px;
        display: flex;
        justify-content: space-between;
    }
`

const DotTitle = styled.div`
    display: flex;
`

const TextWrapper = styled.div`
    margin-top: 40px;
    @media ${device.tablet} { 
        margin-top: 0px;
        max-width: 268px;
    }
`

const SmallTitle = styled.div`

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
    @media ${device.tablet} {
        width: 171px;
        margin-top: 0px;
    }
`

const Footer = ({ data }) => (
  <FooterWrapper>
    <DotTitle>
	    <Title titleText="Creation"/>
	    <span className="dot">
	    	<StyledTitle titleText="."/>
	    </span>
    </DotTitle>
    <TextWrapper>
        <SmallTitle>
        Address
        </SmallTitle>
        <Text>
        {data.contentfulHome.footerAddress}
        </Text>
    </TextWrapper>
    <TextWrapper>
        <SmallTitle>
        Help
        </SmallTitle>
        <Text>
        {data.contentfulHome.footerHelp}
        </Text>
    </TextWrapper>
    <StyledGreenButton buttonText="CONTACT US"/>
  </FooterWrapper>
)

export default Footer
