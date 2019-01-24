// import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledGreenButton = styled.button`
	margin-top: 20px;
	width: 100%;
	height: 48px;
	background: #35CC62;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	font-style: normal;
	font-weight: 500;
	line-height: 14px;
	font-size: 14px;
	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: #FFFFFF;
	transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

	:hover {
		background: #FFFFFF;
		border: 1px solid #35CC62;
		transform: translateY(-3px);

		color: #35CC62;
	}

`

const GreenButton = ({ buttonText }) => (
	<StyledGreenButton>
		{buttonText}
	</StyledGreenButton>
)

export default GreenButton