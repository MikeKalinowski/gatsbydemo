import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.css'

const Header = () => (
  <div className="headerDiv">
    <div className="icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.5 19C21.7761 19 22 18.7761 22 18.5V17.5C22 17.2239 21.7761 17 21.5 17H2.5C2.22386 17 2 17.2239 2 17.5V18.5C2 18.7761 2.22386 19 2.5 19H21.5ZM22 11.5C22 11.2239 21.7761 11 21.5 11H2.5C2.22386 11 2 11.2239 2 11.5V12.5C2 12.7761 2.22386 13 2.5 13H21.5C21.7761 13 22 12.7761 22 12.5V11.5ZM22 5.5C22 5.22386 21.7761 5 21.5 5H2.5C2.22386 5 2 5.22386 2 5.5V6.5C2 6.77614 2.22386 7 2.5 7H21.5C21.7761 7 22 6.77614 22 6.5V5.5Z" fill="#333333"/>
      </svg>
      <input type="checkbox" />
      <ul>
       <li>
        <a href="http://www.google.com">Show your work</a>
       </li>
       <li>
        <a href="http://www.google.com">Our work flow</a>
       </li>
       <li>
        <a href="http://www.google.com">Our offer</a>
       </li>
       <li>
        <a href="http://www.google.com">Contact</a>
       </li>
      </ul>
    </div>
    <div className="logoName">
      <Link to="/">
        Creation
        <span className="green">
          .
        </span>
      </Link>
    </div>
    <div className="icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17C11.2092 17 12.7849 16.4282 14.0462 15.4655L20.2415 21.6516C20.4368 21.8465 20.7531 21.8465 20.9483 21.6514L21.6421 20.958C21.8373 20.763 21.8376 20.4468 21.6428 20.2514L15.4626 14.0501C16.4271 12.7882 17 11.211 17 9.5ZM15 9.5C15 12.5376 12.5376 15 9.5 15C6.46243 15 4 12.5376 4 9.5C4 6.46243 6.46243 4 9.5 4C12.5376 4 15 6.46243 15 9.5Z" fill="#333333"/>
      </svg>
    </div>
  </div>
)

Header.propTypes = { // Static typing - mowi o tym jaki typ danych powinien byc przekazany w propsie
  type: PropTypes.string,
}

Header.defaultProps = { // Mowi co jesli nie dostanie stringa o typie z linijki wyzej
  type: ``,
}

export default Header
