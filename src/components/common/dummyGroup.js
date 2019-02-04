import React from 'react'
import styled from 'styled-components'
import { device } from '../device'

const GroupWrapper = styled.div`
  display: flex;
  padding-top: 40px;
  @media ${device.tablet} {
  	padding-top: 40px;
  }
  @media ${device.laptop} {
  	padding-top: 65px;
  }
`

const GroupIcon = styled.div`
  margin-right: 30px;
`

const GroupTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  font-size: 21px;
  color: ${props => props.theme.color.darkGray};
`

const GroupText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  line-height: 23px;
  font-size: 14px;
  letter-spacing: 0.1px;
  color: ${props => props.theme.color.lightGray};
`

const Path = styled.path`
	fill: ${props => props.theme.color.accent}
`

const DummyGroup = ({ title, text, icon }) => (
	<GroupWrapper>
	    <GroupIcon>
	    	<svg className="icon" width="32" height="32">
	    		<Path fillRule="evenodd" clipRule="evenodd" d={icon} fill="#666666"/>
	    	</svg>
	    </GroupIcon>
	    <div>
		    <GroupTitle>
		    	{title}
		    </GroupTitle>
		    <GroupText>
		    {text}
		    </GroupText>
	    </div>
	</GroupWrapper>
)

export default DummyGroup

