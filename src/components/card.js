import React from 'react'
import styled from 'styled-components'
import { device } from './device'

const CardWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  @media ${device.tablet} {
      padding: 30px;
      margin-top: 0px;
  }
`

const CardIcon = styled.div`
  margin-right: 30px;
`

const CardTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  font-size: 21px;
  color: #262626;
`

const CardText = styled.div`
  margin-top: 12px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: #535353;
`

const Card = ({className, title, text, icon}) => (
  <CardWrapper className={className}>
    <CardIcon>
    	<svg className="icon" width="32" height="32">
    			<path fillRule="evenodd" clipRule="evenodd" d={icon} fill="#666666"/>
    	</svg>
    </CardIcon>
    <div>
	    <CardTitle>
	    	{title}
	    </CardTitle>
	    <CardText>
	    {text}
	    </CardText>
    </div>
  </CardWrapper>
)

export default Card