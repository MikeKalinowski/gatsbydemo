import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { device } from '../device'

const HeaderWrapper = styled.div`
  background: white;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  @media ${device.tablet} {
      display: none;
  }
`

const StyledLink2 = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 0.1px;
  color: inherit;
`

const IconDiv = styled.div`
  position: relative;
`

const Svg = styled.svg`
  cursor: pointer;
  position: relative;
  z-index: 2;
`

const GreenSpan = styled.span`
  color: #35CC62
`

const CheckboxInput = styled.input` /*Checkbox that goes over hamburger icon*/
  position: absolute;
  width: 24px;
  height: 24px;
  top: -2px;
  left: -2px;
  cursor: pointer;
  opacity: 0;
  z-index: 3;
  -webkit-touch-callout: none;

  :checked ~ ul {
    margin-top: -90px;
  }
`

const List = styled.ul`
  position: absolute;
  width: 100vw;
  margin: -380px 0 0 -24px;
  padding: 100px 0px 0px 0px;
  background: white;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transition: all 0.5s cubic-bezier(0.8,0.2,0.05,1.0);
  z-index: -3;
`

const Li = styled.li`
  padding: 12px 0;
  text-align: center;
  border-bottom: 1px solid #333333;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.1px;
  color: inherit;
  :hover {
    color: #35CC62;
  };
`

const Header = ({ data }) => (
  <HeaderWrapper>
    <IconDiv>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.5 19C21.7761 19 22 18.7761 22 18.5V17.5C22 17.2239 21.7761 17 21.5 17H2.5C2.22386 17 2 17.2239 2 17.5V18.5C2 18.7761 2.22386 19 2.5 19H21.5ZM22 11.5C22 11.2239 21.7761 11 21.5 11H2.5C2.22386 11 2 11.2239 2 11.5V12.5C2 12.7761 2.22386 13 2.5 13H21.5C21.7761 13 22 12.7761 22 12.5V11.5ZM22 5.5C22 5.22386 21.7761 5 21.5 5H2.5C2.22386 5 2 5.22386 2 5.5V6.5C2 6.77614 2.22386 7 2.5 7H21.5C21.7761 7 22 6.77614 22 6.5V5.5Z" fill="#333333"/>
      </Svg>
      <CheckboxInput type="checkbox" />
      <List>
        {data.allContentfulHeader.edges.map((edge, index) => (
          <Li key={index}><StyledLink to={edge.node.linkUrl}>{edge.node.linkTitle}</StyledLink></Li>
          ))
        }
      </List>
    </IconDiv>
    <div>
      <StyledLink2 to="/">
        Creation
        <GreenSpan>
          .
        </GreenSpan>
      </StyledLink2>
    </div>
    <IconDiv>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17C11.2092 17 12.7849 16.4282 14.0462 15.4655L20.2415 21.6516C20.4368 21.8465 20.7531 21.8465 20.9483 21.6514L21.6421 20.958C21.8373 20.763 21.8376 20.4468 21.6428 20.2514L15.4626 14.0501C16.4271 12.7882 17 11.211 17 9.5ZM15 9.5C15 12.5376 12.5376 15 9.5 15C6.46243 15 4 12.5376 4 9.5C4 6.46243 6.46243 4 9.5 4C12.5376 4 15 6.46243 15 9.5Z" fill="#333333"/>
      </Svg>
    </IconDiv>
  </HeaderWrapper>
)

export default Header
