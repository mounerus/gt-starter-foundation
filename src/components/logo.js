import React from "react"
import { Link } from "gatsby"
import { logo } from "/public/assets/logo.svg"

const Logo = props => (
  <div className="site-logo">
    {/* <Link to="/">{props.title}</Link> */}
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  </div>
)

export default Logo
