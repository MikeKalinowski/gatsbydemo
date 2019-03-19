import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { InView } from 'react-intersection-observer'
import 'intersection-observer'

import Title from './common/title'
import GreenButton from './common/greenButton'
import Accordion from './common/accordion'
import { device } from './device'

const ShowYourWorkWrapper = styled.section`
  position: relative;
  padding: ${props => props.theme.layout.wrapperPaddingMobile};
  max-width: ${props => props.theme.layout.contentWidthDesktop};
  left: 50%;
  transform: translate(-50%,0);
  @media ${device.tablet} {
      padding: 120px 40px 0 40px;
      display: flex;
      flex-wrap: wrap;
  }
`

const LeftWrapper = styled.div`
  @media ${device.tablet} {
      width: 43%;
      padding-right: 56px;
  }
  // Animation
  opacity: 0;
  ${props => props.scrolledIntoView && AnimationMixin(slideAnimation)};
`

const RightWrapper = styled.div`
  @media ${device.tablet} {
      width: 57%;
  }
  // Animation
  opacity: 0;
  ${props => props.scrolledIntoView && AnimationMixin(slideAnimation)};
  animation-delay: 0.3s; // Overwriting animation mixin
`

const Text = styled.div`
  margin-top: 20px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: ${props => props.theme.color.gray};
`

const AccordionsWrapper = styled.div`
  padding-top: 80px;
  @media ${device.tablet} {
    padding-top: 0px;

    >div:first-child>div:first-child {
      padding-top: 0px;
    }
  }
`

const StyledGreenButton = styled(GreenButton)`
  @media ${device.tablet} {
    width: 165px;
    margin-top: 67px;
  }
`


// ANIMATIONS

const AnimationMixin = animation =>
  css`
    animation: ${animation};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  `

const slideAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`


//REACT

class ShowYourWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolledIntoView: false
    }
  }

  runAnimations = (inView) => {
    (inView === true) && (this.setState({scrolledIntoView: true}));
  }

  render() {
    return(
      <ShowYourWorkWrapper>
        <LeftWrapper scrolledIntoView={this.state.scrolledIntoView}>
          <InView as="span" triggerOnce="true" onChange={this.runAnimations} />
          <Title titleText="Show Your Work"/>
          <Text>
            {this.props.data.contentfulHome.showYourWorkText2.showYourWorkText2}
          </Text>
          <StyledGreenButton buttonText="READ MORE" link="/blog/"/>
        </LeftWrapper>
        <RightWrapper scrolledIntoView={this.state.scrolledIntoView}>
          <AccordionsWrapper>
            {this.props.data.allContentfulAccordions.edges.map((edge, index) => <Accordion accordionTitle={edge.node.accordionTitle} accordionText={edge.node.accordionText.accordionText} accordionIcon={edge.node.accordionIcon.accordionIcon} key={index}/>)}
          </AccordionsWrapper>
        </RightWrapper>
      </ShowYourWorkWrapper>
    )
  }

}

export default ShowYourWork