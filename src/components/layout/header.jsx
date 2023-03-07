import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./header.css"
import HeaderLogo from "../../images/desktop/layout/logo-header.png"

const Header = () => {
  return ( 
    <div className='headerMainDivDesk'>
        <div className='headerTag'>
            <div className='leftItems'>
                <Link to="/">HOME</Link>
                <AnchorLink>ABOUT US</AnchorLink>
            </div>
            <img src={HeaderLogo} className="headerLogo"/>
            <div className='rightItems'>
                <Link to="/flavors">FLAVORS</Link>
                <AnchorLink>CONTACT</AnchorLink>
            </div>
        </div>
        <img/>
    </div>
  )
}

export default Header