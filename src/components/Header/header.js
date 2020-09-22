import PropTypes from "prop-types"
import React from "react"
import "../../Styles/global.css"

const Header = ({ siteTitle }) => (
  <>
    <header className="headerContainer"></header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
