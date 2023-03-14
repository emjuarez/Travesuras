import React from 'react'
import "./footer.css"
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Instagram from "../../images/desktop/layout/footer/instagramFooter.png"
import Facebook from "../../images/desktop/layout/footer/facebookFooter.png"
import Tiktok from "../../images/desktop/layout/footer/tiktokfooter.png"
import LogoFooter from "../../images/desktop/layout/footer/logo-footer.png"

const Footer = () => {
  return (
    <div className='footerMainDiv'>
      <h2 className='thisIs'>THIS IS <span>THE SIGN</span> YOU WERE WAITING FOR.</h2>
      <h2 className='thisIs'>THIS IS THE <span1>TRAVESURA OF YOUR LIFETIME.</span1></h2>
      <div className='footerRedesRow'>
        <a href="">
          <img className='smFooterIcon' src={Instagram}/>
        </a>
        <a href="">
          <img className='smFooterIcon' src={Facebook}/>
        </a>
        <a href="">
          <img className='smFooterIcon' src={Tiktok}/>
        </a>
      </div>
      <div className='footerNavDiv'>
        <Link to="/">HOME</Link>
        <AnchorLink to="/#about-us" style={{marginRight:"2%"}}>ABOUT US</AnchorLink>
        <img className='logoFooter' src={LogoFooter}/>
        <Link to="/flavors" style={{marginLeft:"12%"}}>FLAVORS</Link>
        <AnchorLink to="/#contact">CONTACT</AnchorLink>
      </div>
      <div className='footerBottomDiv'>
        <p className='elaborado'>Elaborado por YGU</p>
        <Link to="/" className='aviso'>Aviso de privacidad</Link>
      </div>
    </div>
  )
}

export default Footer