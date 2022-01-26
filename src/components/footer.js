/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      // bg: "siteColor",
      bg: "black",
    }}
  >
    <div className="container">
      <p>2022 © Gotestr - Tous droits réservés.</p>
    </div>
  </footer>
)

export default Footer
