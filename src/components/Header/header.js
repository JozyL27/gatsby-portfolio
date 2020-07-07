import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../../Styles/global.css'

const Header = ({ siteTitle }) => (
  <header>
    <ul>
      <li>Projects</li>
      <li>Contact</li>
      <li>Home</li>
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
