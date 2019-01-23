import React from 'react'

import './card.css'

const Card = ({title, text, icon}) => (
  <div className="card">
    <div className="cardIcon">
    	<svg className="icon" width="32" height="32">
    			<path fillRule="evenodd" clipRule="evenodd" d={icon} fill="#666666"/>
    	</svg>
    </div>
    <div>
	    <div className="cardTitle">
	    	{title}
	    </div>
	    <div className="cardText">
	    {text}
	    </div>
    </div>
  </div>
)

export default Card