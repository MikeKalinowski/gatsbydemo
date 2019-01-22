import React from 'react'
import Title from './title'
import GreenButton from './greenButton'

import './ourWorkFlow.css'

const OurWorkFlow = () => (
  <div className="ourWorkFlowWrapper">
  	<span className="smallTitle">
  		BEST SERVICE
  	</span>
  	<Title titleText="Our Work Flow"/>
  	<img src={require('../images/phones.png')} alt="" />
  	<span className="text">
  		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ex ea commodo consequat.   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium natus error sit. 
  	</span>
  	<GreenButton buttonText="LEARN MORE"/>
  </div>
)

export default OurWorkFlow