import React from 'react'
import Title from './title'
import GreenButton from './greenButton'

import './footer.css'

const Footer = () => (
  <div className="footerWrapper">
    <div className="dotTitle">
	    <Title titleText="Creation"/>
	    <span className="dot">
	    	<Title titleText="."/>
	    </span>
    </div>
    <div className="smallTitle">
    Address
    </div>
    <div className="text">
    5th Floor, AH Building, 756 New Designst Melbourne, Australia
    </div>
    <div className="smallTitle">
    Help
    </div>
    <div className="text">
    Duis aute irure dolor in repre henderit in  iste natus esse.
    </div>
    <GreenButton buttonText="CONTACT US"/>
  </div>
)

export default Footer
