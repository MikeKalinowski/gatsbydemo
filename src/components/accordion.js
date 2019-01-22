// import { Link } from 'gatsby'
import React from 'react'

import './accordion.css'

const Accordion = ({accordionTitle, accordionText, accordionIcon}) => (
	<div className="accordion">
		<svg className="icon" width="14" height="14">
				<path fill-rule="evenodd" clip-rule="evenodd" d={accordionIcon} fill="#333333"/>
		</svg>
		<span className="accordionTitle">
			{accordionTitle}
		</span>
		<svg className="closingArrow" width="16" height="16" >
			<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2297 7.63956C12.4343 7.83629 12.4343 8.16371 12.2297 8.36044L5.67612 14.6612C5.48022 14.8495 5.16975 14.8469 4.97704 14.6553L4.25398 13.9363C4.05396 13.7375 4.05796 13.4126 4.2628 13.2187L9.7758 8L4.25618 2.76261C4.05008 2.56705 4.04815 2.23926 4.25192 2.04128L4.97711 1.33673C5.17042 1.14893 5.47778 1.14813 5.67206 1.33491L12.2297 7.63956Z" fill="black" fill-opacity="0.2"/>
		</svg>
	</div>
)

export default Accordion