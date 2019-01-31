import React from 'react'
import styled from 'styled-components'

import Title from './common/title'
import Card from './common/card'
import { device } from './device'

const OurOfferWrapper = styled.div`
	padding: 80px 21px 0 21px;
  position: relative;
  max-width: 1240px;
  left: 50%;
  transform: translate(-50%,0);
  box-sizing: border-box;
  @media ${device.tablet} {
      padding: 300px 0px 0px 0px;
  }
`

const StyledTitle = styled(Title)`
  text-align: center;
`

const Text = styled.div`
	margin-top: 16px;
	font-style: normal;
	font-weight: 300;
	line-height: 22px;
	font-size: 15px;
	color: #878787;
  @media ${device.tablet} {
      max-width: 600px;
      margin: 16px auto 0;
      text-align: center;
      font-size: 19px;
  }
`

const CardsWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    margin: 76px;

    >div:nth-child(2) { /*Makes the second card pretty :)*/
      box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.1);
      path {
        fill: #35CC62;
      }
    }
  }
`

const OurOffer = ({ data }) => (
  <OurOfferWrapper>
    <StyledTitle titleText="Our Offer"/>
    <Text>
      {data.contentfulHome.ourOfferText.ourOfferText}
    </Text>
    <CardsWrapper>
      {data.allContentfulCards.edges.map((edge, index) => <Card title={edge.node.cardTitle} text={edge.node.cardText.cardText} icon={edge.node.cardIcon.cardIcon} key={index}/>)}
    </CardsWrapper>
  </OurOfferWrapper>
)

export default OurOffer
