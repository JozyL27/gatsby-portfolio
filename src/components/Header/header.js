import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../../Styles/global.css'

const Header = ({ siteTitle }) => (
  <header className='headerContainer'>
    <h1 className='signature'>Jozy Alba</h1>
    <ul className='navContainer'>
      <li className='navLink'>Contact</li>
      <li className='navLink'>Projects</li>
      <li className='navLink'>Resume</li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
