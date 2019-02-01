import React from 'react'
import styled from 'styled-components'

import Title from './common/title'
import GreenButton from './common/greenButton'
import Accordion from './common/accordion'
import { device } from './device'

const ShowYourWorkWrapper = styled.div`
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
`

const RightWrapper = styled.div`
  @media ${device.tablet} {
      width: 57%;
  }
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

const ShowYourWork = ({ data }) => (
  <ShowYourWorkWrapper>
    <LeftWrapper>
      <Title titleText="Show Your Work"/>
      <Text>
        {data.contentfulHome.showYourWorkText2.showYourWorkText2}
      </Text>
      <StyledGreenButton buttonText="READ MORE"/>
    </LeftWrapper>
    <RightWrapper>
      <AccordionsWrapper>
        {data.allContentfulAccordions.edges.map((edge, index) => <Accordion accordionTitle={edge.node.accordionTitle} accordionText={edge.node.accordionText.accordionText} accordionIcon={edge.node.accordionIcon.accordionIcon} key={index}/>)}
      </AccordionsWrapper>
    </RightWrapper>
  </ShowYourWorkWrapper>
)

export default ShowYourWork