import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
    {/* <Link to="/">{props.title}</Link> */}
    <Link to="/">
      <img src="/static/assets/logol.svg" alt="logo" />
    </Link>
  </div>
)

export default Logo
