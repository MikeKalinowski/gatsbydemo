// import { Link } from 'gatsby'
import React from 'react'

import './accordion.css'

// const Accordion = ({accordionTitle, accordionText, accordionIcon}) => (
// 	<div className="accordion">
// 		<svg className="icon" width="14" height="14">
// 				<path fill-rule="evenodd" clip-rule="evenodd" d={accordionIcon} fill="#333333"/>
// 		</svg>
// 		<span className="accordionTitle">
// 			{accordionTitle}
// 		</span>
// 		<svg className="closingArrow" width="16" height="16" >
// 			<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2297 7.63956C12.4343 7.83629 12.4343 8.16371 12.2297 8.36044L5.67612 14.6612C5.48022 14.8495 5.16975 14.8469 4.97704 14.6553L4.25398 13.9363C4.05396 13.7375 4.05796 13.4126 4.2628 13.2187L9.7758 8L4.25618 2.76261C4.05008 2.56705 4.04815 2.23926 4.25192 2.04128L4.97711 1.33673C5.17042 1.14893 5.47778 1.14813 5.67206 1.33491L12.2297 7.63956Z" fill="black" fill-opacity="0.2"/>
// 		</svg>
// 	</div>
// )

class Accordion extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			clicked: false
		}
	}

	iconToShow = this.props.arrowIconClicked;
	arrowIconNotClicked = "M12.2297 7.63956C12.4343 7.83629 12.4343 8.16371 12.2297 8.36044L5.67612 14.6612C5.48022 14.8495 5.16975 14.8469 4.97704 14.6553L4.25398 13.9363C4.05396 13.7375 4.05796 13.4126 4.2628 13.2187L9.7758 8L4.25618 2.76261C4.05008 2.56705 4.04815 2.23926 4.25192 2.04128L4.97711 1.33673C5.17042 1.14893 5.47778 1.14813 5.67206 1.33491L12.2297 7.63956Z";
	arrowIconClicked = "M2.95765 5.33963C3.15166 5.15059 3.46092 5.15042 3.65513 5.33925L7.75622 9.32659L11.8573 5.33925C12.0515 5.15042 12.3608 5.15059 12.5548 5.33963L13.2057 5.97387C13.4071 6.17013 13.4071 6.49384 13.2057 6.69009L8.10516 11.66C7.911 11.8492 7.60145 11.8492 7.40729 11.66L2.30673 6.69009C2.10532 6.49384 2.10532 6.17013 2.30673 5.97387L2.95765 5.33963Z";

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	}


	render() {
		return(
			<div>
				<div className={this.state.clicked ? "accordion accordionClicked" : "accordion"} onClick={this.handleClick}>
					<svg className="icon" width="14" height="14"> 
							<path fillRule="evenodd" clipRule="evenodd" d={this.props.accordionIcon} fill="#333333"/>
					</svg>
					<span className="accordionTitle">
						{this.props.accordionTitle}
					</span>
					<svg className="closingArrow" width="16" height="16" onClick={this.handleClick}>
						<path fillRule="evenodd" clipRule="evenodd" d={this.state.clicked ? this.arrowIconClicked : this.arrowIconNotClicked} fill="black" fillOpacity="0.2"/>
					</svg>
				</div>
				<div className={this.state.clicked ? "accordionText accordionTextVisible" : "accordionText"}>
				{this.props.accordionText}
				</div>
			</div>
		)
	}
}

export default Accordion