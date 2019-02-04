import React from 'react'
import styled from 'styled-components'

import { device } from './device'
import Title from './common/title'
import DummyImage from './common/dummyimg'
import DummyGroup from './common/dummyGroup'

const DummyWrapper = styled.div`
	padding: ${props => props.theme.layout.wrapperPaddingMobile};
	position: relative;
	max-width: ${props => props.theme.layout.contentWidthDesktop};
	left: 50%;
	transform: translate(-50%,0);
	display:inline-block;
	@media ${device.tablet} {
		padding: 120px 40px 0px 40px;
	}
`

const Titles = styled.div`
	text-align: center;
`

const StyledTitle = styled(Title)`
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	line-height: 46px;
	font-size: 30px;
	text-align: center;
	color: ${props => props.theme.color.darkGray};
	@media ${device.tablet} {
	    line-height: 61px;
	    font-size: 51px;
	}
`

const Text = styled.div`
	font-family: Montserrat;
	font-style: normal;
	font-weight: 300;
	line-height: 26px;
	font-size: 16px;
	color: ${props => props.theme.color.lightGray};
	max-width: 450px;
	margin: 0 auto;
	@media ${device.tablet} {
	    line-height: 29px;
	    font-size: 19px;
	    padding-top: 13px;
	    max-width: 600px;
	}
`

const BottomWrapper = styled.div`
	padding-top: 60px;
	margin: 0 auto;
	@media ${device.tablet} {
	    display: grid;
	    grid-template-columns: auto 1fr
	}
`

const ImageWrapper = styled.div`
	@media ${device.tablet} {
	    padding-right: 90px;
	}
	@media ${device.laptop} {
	    padding-right: 138px;
	}
`
const StyledDummyImage = styled(DummyImage)`
	width: 65vw;
	margin: 0 auto;
	@media ${device.tablet} {
	    width: 300px;
	}
	@media ${device.laptop} {
	    width: 498px;
	}

`

const DummyGroupsWrapper = styled.div`
	padding-top: 40px;
	@media ${device.tablet} {
		padding-top: 0px;
	}
	@media ${device.laptop} {
	}
`



const DummySite = ({ data }) => (
	<DummyWrapper>
	  	<Titles>
	  		<StyledTitle titleText={data.contentfulDummy.dummyTitle}></StyledTitle>
	  		<Text>{data.contentfulDummy.dummyText.dummyText}</Text>
	  	</Titles>
	  	<BottomWrapper>
			<ImageWrapper>
				<StyledDummyImage />
			</ImageWrapper>
			<DummyGroupsWrapper> 
				{data.allContentfulDummyGroup.edges.map((edge, index) => <DummyGroup title={edge.node.groupTitle} text={edge.node.groupText.groupText} icon={edge.node.groupIcon.groupIcon} key={index}/>)}
			</DummyGroupsWrapper>
		</BottomWrapper>
	</DummyWrapper>
)

export default DummySite