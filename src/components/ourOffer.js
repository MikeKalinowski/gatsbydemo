import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { InView } from 'react-intersection-observer'

import Title from './common/title'
import Card from './common/card'
import { device } from './device'

const OurOfferWrapper = styled.section`
	padding: ${props => props.theme.layout.wrapperPaddingMobile};
  position: relative;
  max-width: ${props => props.theme.layout.contentWidthDesktop};
  left: 50%;
  transform: translate(-50%,0);
  @media ${device.tablet} {
      padding: 300px 0px 0px 0px;
  }
`

const TextAnimationWrapper = styled.div`
  opacity: 0;
  ${props => props.scrolledIntoView && AnimationMixin(appearAnimation)};
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
	color: ${props => props.theme.color.lightGray};
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
    padding: 76px;

    >div:nth-child(2) { /*Makes the second card pretty :)*/
      box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.1);
      path {
        fill: ${props => props.theme.color.accent};
      }
    }
  }
  //Animations
  >div:nth-child(1) {
    opacity: 0;
    ${props => props.scrolledIntoView && AnimationMixin(slideLeftAnimation)};
    animation-delay: 0.4s;
  }
  >div:nth-child(2) {
    opacity: 0;
    ${props => props.scrolledIntoView && AnimationMixin(slideBottomAnimation)};
    animation-delay: 0.4s;
  }
  >div:nth-child(3) {
    opacity: 0;
    ${props => props.scrolledIntoView && AnimationMixin(slideRightAnimation)};
    animation-delay: 0.4s;
  }
`


// ANIMATIONS

const AnimationMixin = animation =>
  css`
    animation: ${animation};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  `

const appearAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const slideLeftAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`

const slideBottomAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`

const slideRightAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`


//REACT

class OurOffer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolledIntoView: false
    }
  }

  runSlideAnimation = (inView) => {
    (inView === true) && (this.setState({scrolledIntoView: true}));
  }

  render() {
    return(
      <OurOfferWrapper>
        <TextAnimationWrapper scrolledIntoView={this.state.scrolledIntoView}>
          <StyledTitle titleText="Our Offer"/>
          <Text>
            {this.props.data.contentfulHome.ourOfferText.ourOfferText}
          </Text>
        </TextAnimationWrapper>
        <InView as="span" triggerOnce="true" onChange={this.runSlideAnimation} />
        <CardsWrapper scrolledIntoView={this.state.scrolledIntoView}>
          {this.props.data.allContentfulCards.edges.map((edge, index) => <Card title={edge.node.cardTitle} text={edge.node.cardText.cardText} icon={edge.node.cardIcon.cardIcon} key={index}/>)}
        </CardsWrapper>
      </OurOfferWrapper>
    )
  }
}

export default OurOffer
