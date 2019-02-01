import React from 'react'
import styled from 'styled-components'
import { device } from '../device'

const Background = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0px;
	background-color: rgba(0,0,0,0.8);
	z-index: 10000;
`

const Iframe = styled.iframe`
	position: relative;
	left: 50%;
	top: 50%;
	width:383px; 
	height:215px;
	transform: translate(-50%, -50%);
	@media screen and ${device.tablet} {
		width:560px; 
		height:315px;
	}

	@media screen and ${device.laptop} {
		width:840px; 
		height:472px;
	}
`

const VideoPlayer = ({ className, handleClick }) => (
  <Background onClick={handleClick}> 
  	<Iframe src="https://www.youtube.com/embed/UF8uR6Z6KLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
  </Background>
)

export default VideoPlayer