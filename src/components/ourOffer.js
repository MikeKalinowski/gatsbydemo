import React from 'react'
import Title from './title'
import Card from './card'
import styled from 'styled-components'
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
  }
`

const CardsWrapper = styled.div`
  @media ${device.tablet} {
      display: flex;
      margin: 76px;
  }
`

const StyledCard = styled(Card)`
  @media ${device.tablet} {
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.1);
    path {
      fill: #35CC62;
    }
  }
`

const OurOffer = () => (
  <OurOfferWrapper>
    <StyledTitle titleText="Our Offer"/>
    <Text>
      Duis aute irure dolor in reprehenderit in voluptate velit esse  cillum dolore eu fugiat nulla pariatur.
    </Text>
    <CardsWrapper>
    <Card title="Prototyping" text="Nemo enim ipsam voluptatem voluptas aspernatur aut odit aut fugit. 1" icon="M20.108 14.894L30.002 30.988L28.302 31.99L23.814 24.69C21.882 25.518 19.768 26 17.53 26C14.976 26 12.582 25.368 10.442 24.308L5.72 31.99L4.02 30.988L8.734 23.318C5.466 21.162 3.006 17.888 2 14H4.07C5.018 17.166 7.08 19.832 9.776 21.624L13.912 14.894C12.766 13.978 12.016 12.584 12.016 11C12.016 8.582 13.73 6.564 16.01 6.1V2H18.01V6.1C20.29 6.562 22.004 8.58 22.004 11C22.004 12.584 21.256 13.978 20.108 14.894ZM11.492 22.602C13.326 23.478 15.362 24 17.532 24C19.384 24 21.142 23.624 22.76 22.974L18.348 15.798C17.92 15.918 17.478 16.002 17.012 16.002C16.546 16.002 16.104 15.918 15.678 15.798L11.492 22.602ZM14.014 11C14.014 9.342 15.356 8 17.01 8C18.666 8 20.008 9.342 20.006 11C20.006 12.656 18.666 14 17.01 14C15.354 14 14.014 12.656 14.014 11Z"/>
    <StyledCard title="Branding" text="Nemo enim ipsam voluptatem voluptas aspernatur aut odit aut fugit. 2" icon="M31.144 11.331H30.844L30.266 12.783L26.238 14.127L29.146 15.583L28.788 16.475L29.024 16.539C28.9316 16.6828 28.8229 16.8122 28.7141 16.9417L28.7141 16.9417C28.6368 17.0337 28.5595 17.1257 28.488 17.223L28.33 17.621L28.234 17.549C28.1591 17.6422 28.0888 17.7397 28.0185 17.8373L28.0185 17.8373C27.8974 18.0054 27.7763 18.1734 27.632 18.319C22.372 23.587 15.026 25.945 10.688 22.703L1.396 32.007L0 30.609L9.294 21.307C6.06 16.963 8.418 9.61096 13.674 4.34696C19.258 -1.24104 31.816 0.154963 31.816 0.154963C31.816 0.154963 32.448 5.88496 31.144 11.331ZM15.074 5.74097C14.602 6.21297 14.172 6.71097 13.754 7.21297L16.468 9.93297L15.074 11.331L12.554 8.80897C12.162 9.38097 11.818 9.96297 11.5 10.549L13.678 12.727L12.284 14.125L10.622 12.461C9.53602 15.249 9.41402 17.957 10.702 19.895L28.744 1.83697C26.01 1.57697 19.356 1.45497 15.074 5.74097ZM12.0979 21.293L30.142 3.22897C30.3 4.88897 30.392 8.01897 29.482 11.177L22.75 13.425L26.684 16.379C26.6534 16.418 26.6234 16.4571 26.5935 16.4961C26.4823 16.6411 26.3719 16.785 26.2379 16.919C21.75 21.413 15.6379 23.661 12.0979 21.293Z"/>
    <Card title="Development" text="Nemo enim ipsam voluptatem voluptas aspernatur aut odit aut fugit. 3" icon="M30 22.002V26.446C31.218 25.346 32 23.77 32 22V6C32 2.688 29.314 0 26 0H10C8.23004 0 6.65604 0.782 5.55804 2H26V2.002C28.208 2.002 30 3.792 30 6V22V22.002ZM28 10C28 6.688 25.314 4 22 4H6C2.686 4 0 6.688 0 10V12V14V26C0 29.314 2.686 32 6 32H22C25.314 32 28 29.314 28 26V14V12V10ZM1.99999 26C1.99999 28.208 3.79199 30 5.99999 30H22C24.208 30 26 28.208 26 26V14H1.99999V26ZM1.99999 12V10C1.99999 7.792 3.79199 6 5.99999 6H22C24.208 6 26 7.792 26 10V12H1.99999ZM18 10H4V8H18V10ZM20 10H22V8H20V10Z"/>
    </CardsWrapper>
  </OurOfferWrapper>
)

export default OurOffer
