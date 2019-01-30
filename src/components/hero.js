// import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';

import './hero.css'
import BackgroundImage from './heroBackgroundImage.js'
import { device } from './device'

const HeroWrapper = styled.div`
  height: 526px;

  @media ${device.tablet} {
      height: 100vh;
  }
`

const HeroInsideWrapper = styled.div`
  text-align: center;
  position: relative;
  height: 100%;
`

const PlayButtonIcon = styled.div`
  position: absolute;
  top: 170px;
  @media ${device.laptop} {
      top: calc(50% - 50px);
  }
`

const Svg = styled.svg`
  cursor: pointer;
`

const WatchVideoText = styled.div`
  position: absolute;
  top: 245px;
  font-style: normal;
  font-weight: 500;
  line-height: 9px;
  font-size: 13px;
  text-align: center;
  letter-spacing: 6px;
  text-transform: uppercase;
  text-shadow: 0px 4.94792px 9.89583px rgba(0, 0, 0, 0.2);
  color: #FFFFFF;
  @media ${device.laptop} {
      top: calc(50% + 80px);
      line-height: 19px;
      font-size: 16px;
      text-align: center;
      letter-spacing: 16px;
      text-transform: uppercase;
  }
  @media ${device.laptopL} {
      top: calc(50% + 120px);
  }
`

const HeroText = styled.div`
  position: absolute;
  top: 309px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  font-size: 26px;
  text-align: center;
  width: 280px;
  color: #FFFFFF;
  @media screen and ${device.tablet} {
      width: 70%;
      max-width: 800px;
  }
  @media screen and ${device.laptop} {
      top: calc(50% + 124px);
      font-style: normal;
      font-weight: normal;
      line-height: 40px;
      font-size: 32px;
      text-align: center;
      width: 70%;
      max-width: 800px;
  }
  @media screen and ${device.laptopL} {
      top: calc(50% + 164px);
  } 
`

const ArrowIcon = styled.div`
  position: absolute;
  bottom: 20px;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Hero = () => (
  <HeroWrapper>
  	<HeroInsideWrapper>
  		<PlayButtonIcon className="centerAbsolute">
        <MediaQuery minWidth={1024}>
          {(matches) => {
            if (matches) {
              return <Svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M44 36L64 50L44 64V36Z" fill="#333333"/>
                </Svg>;
            } else {
              return <Svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.3997 21.6L38.3997 30L26.3997 38.4V21.6Z" fill="#333333"/>
                </Svg>;
            }
          }}
        </MediaQuery>
  		</PlayButtonIcon>
  		<WatchVideoText className="centerAbsolute">
  			Watch Video
  		</WatchVideoText> 
  		<HeroText className="centerAbsolute">
  			Differentiate Yourself And Attract More 
  			Attention Sales And Profits
  		</HeroText>
  		<ArrowIcon className="centerAbsolute">
  			<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    			<path fillRule="evenodd" clipRule="evenodd" d="M18.9289 10.7355L9.99543 20.7625C9.90001 20.916 9.72811 20.994 9.55027 20.9991C9.48343 21.0016 9.46717 21.0028 9.45059 20.9991C9.27264 20.994 9.10085 20.916 9.00531 20.7625L0.0714628 10.7355C-0.0758292 10.5015 0.0118468 10.2007 0.267515 10.0661C0.522355 9.9302 0.848288 10.0107 0.995925 10.2448L9.50004 19.7924L18.0055 10.2448C18.1525 10.0107 18.4784 9.9302 18.7333 10.0661C18.989 10.2007 19.0765 10.5015 18.9289 10.7355Z" fill="white"/>
    			<path fillRule="evenodd" clipRule="evenodd" d="M18.9289 0.735476L9.99543 10.7625C9.90001 10.916 9.72811 10.994 9.55027 10.9991C9.48343 11.0016 9.46717 11.0028 9.45059 10.9991C9.27264 10.994 9.10085 10.916 9.00531 10.7625L0.0714628 0.735476C-0.0758292 0.501452 0.0118468 0.200718 0.267515 0.0660937C0.522355 -0.0698043 0.848288 0.0107237 0.995925 0.244762L9.50004 9.7924L18.0055 0.244762C18.1525 0.0107237 18.4784 -0.0698043 18.7333 0.0660937C18.989 0.200718 19.0765 0.501452 18.9289 0.735476Z" fill="white" fillOpacity="0.5"/>
  			</svg>
  		</ArrowIcon>
      <StyledBackgroundImage />
  	</HeroInsideWrapper>
  </HeroWrapper>
)

export default Hero
