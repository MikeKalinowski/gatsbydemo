import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { device } from '../device'

// IconSvg is before AccordionWrapper not to overwrite the "path" attribute later
const IconSvg = styled.svg`
	margin-right: 10px;
	path {
		fill: ${props => props.theme.color.darkGray}
	}
`

const AccordionWrapper = styled.div`
	padding-top: 32px;
	cursor: pointer;
	position: relative;
	
	:hover .accordionTitle {
		color: ${props => props.theme.color.accent};
	}
	:hover path {
		fill: ${props => props.theme.color.accent};
	}

	${props => props.clicked && accordionColorMixin}

	@media ${device.tablet} {
		padding-top: 40px
	}
`

const accordionColorMixin = props =>
	css`
		.accordionTitle {
	    	color: ${props => props.theme.color.accent}
	    }
	    path {
	    	fill: ${props => props.theme.color.accent}
	    }
	`

const ClosingArrowSvg = styled.svg`
	position: absolute;
	right: 10px;
`

const Title = styled.span`
	font-family: Montserrat;
	font-style: normal;
	font-weight: normal;
	line-height: 12px;
	font-size: 16px;
`
const slide = keyframes`
	0% {
	  opacity: 0;
	  max-height: 0px;
	}
	100% {
	  opacity: 1;
	  max-height: 400px;
	}
`

const Text = styled.div`
	display: none;
	overflow: hidden;
	max-height: 0px;
	padding-top: 12px;
	font-family: Open Sans;
	font-style: normal;
	font-weight: normal;
	line-height: 26px;
	font-size: 14px;
	letter-spacing: 0.1px;
	color: ${props => props.theme.color.gray};
	${props => props.clicked && animationMixin}

	@media ${device.tablet} {
		padding-top: 26px;
	}
`

const animationMixin = props =>
	css`
		display: block;
		animation: ${slide};
		animation-duration: 2s;
		animation-fill-mode: forwards;
		animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
	`

class Accordion extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			clicked: false
		}
	}

	arrowIconNotClicked = "M12.2297 7.63956C12.4343 7.83629 12.4343 8.16371 12.2297 8.36044L5.67612 14.6612C5.48022 14.8495 5.16975 14.8469 4.97704 14.6553L4.25398 13.9363C4.05396 13.7375 4.05796 13.4126 4.2628 13.2187L9.7758 8L4.25618 2.76261C4.05008 2.56705 4.04815 2.23926 4.25192 2.04128L4.97711 1.33673C5.17042 1.14893 5.47778 1.14813 5.67206 1.33491L12.2297 7.63956Z";
	arrowIconClicked = "M2.95765 5.33963C3.15166 5.15059 3.46092 5.15042 3.65513 5.33925L7.75622 9.32659L11.8573 5.33925C12.0515 5.15042 12.3608 5.15059 12.5548 5.33963L13.2057 5.97387C13.4071 6.17013 13.4071 6.49384 13.2057 6.69009L8.10516 11.66C7.911 11.8492 7.60145 11.8492 7.40729 11.66L2.30673 6.69009C2.10532 6.49384 2.10532 6.17013 2.30673 5.97387L2.95765 5.33963Z";

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	}


	render() {
		return(
			<div>
				<AccordionWrapper className={this.props.className} onClick={this.handleClick} clicked={this.state.clicked}>
					<IconSvg width="14" height="14"> 
							<path fillRule="evenodd" clipRule="evenodd" d={this.props.accordionIcon} />
					</IconSvg>
					<Title className="accordionTitle">
						{this.props.accordionTitle}
					</Title>
					<ClosingArrowSvg width="16" height="16">
						<path fillRule="evenodd" clipRule="evenodd" d={this.state.clicked ? this.arrowIconClicked : this.arrowIconNotClicked} fill="black" fillOpacity="0.2"/>
					</ClosingArrowSvg>
				</AccordionWrapper>
				<Text clicked={this.state.clicked}>
				{this.props.accordionText}
				</Text>
			</div>
		)
	}
}

export default Accordion