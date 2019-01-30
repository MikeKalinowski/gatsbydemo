import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { device } from '../device'

const HeaderWrapper = styled.div`
	background: white;
	height: 80px;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 999;
	margin: 0 auto;
	display: none;
	@media ${device.tablet} {
	    display: block;
	}
`

const HeaderInsideWrapper = styled.div`
	max-width: 1240px;
	padding: 0 40px;
	box-sizing: border-box;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const Logo = styled.div`
	display: inline-block;
`

const Links = styled.div`
	display: inline-block;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%)
`

const List = styled.ul`
	list-style-type: none;
  	margin: 0;
  	padding: 0;
  	overflow: hidden;
`

const ListItem = styled.li`
	float: left
`

const Icons = styled.div`
	display: inline-block;
	position: absolute;
	right: 0px;
	top: 50%;
	transform: translate(0%, -50%)
`

const StyledLink = styled(Link)`
	text-decoration: none;
	padding: 0px 19px;
	font-style: normal;
	font-weight: 500;
	line-height: 23px;
	font-size: 14px;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	color: inherit;
	:hover {
		color: #35CC62;
	};
	@media ${device.tablet} {
	    padding: 0px 10px;
	}
	@media ${device.laptop} {
	    padding: 0px 19px;
	}
`

const Svg = styled.svg`
	padding: 0px 15px;
	cursor: pointer;
`

const HeaderBig = () => (
  <HeaderWrapper>
  	<HeaderInsideWrapper>
	  	<Logo>
	  		<svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
	  		    <path fillRule="evenodd" clipRule="evenodd" d="M26.4762 24.6553C26.9615 24.0233 27.25 23.2323 27.25 22.3739C27.25 20.3029 25.5711 18.6241 23.5 18.6241C22.4013 18.6241 21.413 19.0966 20.7234 19.8463C19.3476 21.4689 17.2941 22.4989 15 22.4989C10.8581 22.4989 7.50034 19.1416 7.5 15C7.50035 22.248 13.1987 27.5708 19.4112 28.0688C19.9823 28.1146 21.032 28.1991 22.5027 27.9902C23.9146 27.2027 25.5412 25.8143 26.4762 24.6553Z" fill="url(#paint0_linear)"/>
	  		    <path fillRule="evenodd" clipRule="evenodd" d="M7.50018 15C7.50018 22.2487 13.3753 28.125 20.6226 28.125C21.2601 28.125 21.8869 28.0795 22.5 27.9917C20.2935 29.2689 17.7315 30 14.9987 30C8.08243 30 3.68615 25.5264 2.00955 22.5025C1.86848 21.5601 1.85592 20.6331 1.89253 19.9161C2.23581 13.1919 7.75139 7.50001 14.9987 7.5C10.8574 7.50001 7.50019 10.8579 7.50018 15Z" fill="url(#paint1_linear)"/>
	  		    <path fillRule="evenodd" clipRule="evenodd" d="M26.2098 5.03217C23.4623 1.94478 19.4583 0 15 0C6.71573 0 0 6.71492 0 14.9982C0 17.7311 0.731057 20.2934 2.00831 22.5C1.92046 21.8868 1.875 21.26 1.875 20.6225C1.875 13.3746 7.75126 7.49909 15 7.49909C17.3286 7.4991 19.4093 8.56015 20.7849 10.2251C21.4752 10.9304 22.4359 11.3736 23.5 11.3736C25.5711 11.3736 27.25 9.6949 27.25 7.62408C27.25 6.80019 26.9842 6.03836 26.5338 5.41962C26.5092 5.37893 26.2937 5.11985 26.2098 5.03217Z" fill="url(#paint2_linear)"/>
	  		    <defs>
	  		    <linearGradient id="paint0_linear" x1="27.25" y1="15" x2="7.5" y2="15" gradientUnits="userSpaceOnUse">
	  		    <stop stopOpacity="0.6"/>
	  		    <stop offset="1" stopOpacity="0.1"/>
	  		    </linearGradient>
	  		    <linearGradient id="paint1_linear" x1="26.1978" y1="21.7984" x2="9.77471" y2="5.85375" gradientUnits="userSpaceOnUse">
	  		    <stop stopOpacity="0.6"/>
	  		    <stop offset="1" stopOpacity="0.1"/>
	  		    </linearGradient>
	  		    <linearGradient id="paint2_linear" x1="7.39301" y1="27.9041" x2="32.0275" y2="11.7154" gradientUnits="userSpaceOnUse">
	  		    <stop stopOpacity="0.5"/>
	  		    <stop offset="1" stopOpacity="0.1"/>
	  		    </linearGradient>
	  		    </defs>	
	  		</svg>
	  	</Logo>
	  	<Links>
	  		<List>
	  		  <ListItem><StyledLink to="/">HOME</StyledLink></ListItem>
	  		  <ListItem><StyledLink to="/">PAGES</StyledLink></ListItem>
	  		  <ListItem><StyledLink to="/">WORK</StyledLink></ListItem>
	  		  <ListItem><StyledLink to="/">BLOG</StyledLink></ListItem>
	  		  <ListItem><StyledLink to="/">ABOUT</StyledLink></ListItem>
	  		</List>
	  	</Links>
	  	<Icons>
	  		<Svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
	  			<path fillRule="evenodd" clipRule="evenodd" d="M17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 8.42071 7.59254 9.70303 8.54397 10.6133C4.72422 12.0201 2 15.6919 2 20V20.5C2 20.7762 2.22386 21 2.5 21H3.50266C3.77776 21 4.00123 20.7778 4.00145 20.5027C4.00159 20.3317 4.00131 20.1465 4 20C4 15.5817 7.58172 12 12 12C16.4183 12 20 15.5817 20 20C19.9988 20.1352 19.9986 20.3246 19.9987 20.5023C19.999 20.7775 20.2225 21 20.4978 21H21.5C21.7761 21 22 20.7762 22 20.5V20C22 15.6919 19.2758 12.0201 15.456 10.6133C16.4075 9.70303 17 8.42071 17 7ZM12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4Z" fill="#333333"/>
	  		</Svg>
	  		<Svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
	  			<path fillRule="evenodd" clipRule="evenodd" d="M17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17C11.2092 17 12.7849 16.4282 14.0462 15.4655L20.2415 21.6516C20.4368 21.8465 20.7531 21.8465 20.9483 21.6514L21.6421 20.958C21.8373 20.763 21.8376 20.4468 21.6428 20.2514L15.4626 14.0501C16.4271 12.7882 17 11.211 17 9.5ZM15 9.5C15 12.5376 12.5376 15 9.5 15C6.46243 15 4 12.5376 4 9.5C4 6.46243 6.46243 4 9.5 4C12.5376 4 15 6.46243 15 9.5Z" fill="#333333"/>
	  		</Svg>
	  		<Svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
	  			<path fillRule="evenodd" clipRule="evenodd" d="M21.5 19C21.7761 19 22 18.7761 22 18.5V17.5C22 17.2239 21.7761 17 21.5 17H6.5C6.22386 17 6 17.2239 6 17.5V18.5C6 18.7761 6.22386 19 6.5 19H21.5ZM22 11.5C22 11.2239 21.7761 11 21.5 11H2V13H21.5C21.7761 13 22 12.7761 22 12.5V11.5ZM22 5.5C22 5.22386 21.7761 5 21.5 5H10.5C10.2239 5 10 5.22386 10 5.5V6.5C10 6.77614 10.2239 7 10.5 7H21.5C21.7761 7 22 6.77614 22 6.5V5.5Z" fill="#333333"/>
	  		</Svg>
	  	</Icons>
  	</HeaderInsideWrapper>
  </HeaderWrapper>
)

export default HeaderBig