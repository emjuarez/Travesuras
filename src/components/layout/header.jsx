import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./header.css"

const Header = () => {
  return (
    <div className='headerMainDivDesk'>
        <div className='headerTag'>
            <div className='leftItems'>
                <Link></Link>
                <AnchorLink></AnchorLink>
            </div>
            <div className='rightItems'>
                <Link></Link>
                <AnchorLink></AnchorLink>
            </div>
        </div>
        <img/>
    </div>
  )
}

export default Header