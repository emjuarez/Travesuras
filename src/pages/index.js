import React from 'react'
import "../css/home.css"
import Layout from "../components/layout/"
import RedesCard from "../components/redesCard"
import InstagramV from "../images/desktop/index/instagram.png"
import FacebookV from "../images/desktop/index/facebook.png"
import TicktokV from "../images/desktop/index/ticktok.png"
import Grid1 from "../images/desktop/index/homeGrid-1.png"
import Grid2 from "../images/desktop/index/homeGrid-2.png"
import Grid3 from "../images/desktop/index/homeGrid-3.png"
import Grid4 from "../images/desktop/index/homeGrid-4.png"
import Grid5 from "../images/desktop/index/homeGrid-5.png"
import Grid6 from "../images/desktop/index/homeGrid-6.png"
import Infused from '../components/infusedSection'
import MailW from "../images/desktop/index/mail-w.png"
import IgW from "../images/desktop/index/instagram-w.png"
import FacebookW from "../images/desktop/index/facbook-w.png"
import Aregular from "../static/fonts/AvenirNextLTPro-Regular.otf"
import Acondensed from "../static/fonts/Avenir Next Condensed.ttf.ttf"
import Flavors from "../components/flavorOptions"

const Index = () => {
  const regular = Aregular;
  const Condensed = Acondensed;

  return (
    <Layout>
      <div className="MainDivDesk">
        <div className="homeFristSectionDesk"></div>
        <div className="homeSecondSectionDesk">
          <div className='flavorsContainer'>
            <h2 className='tempting'>TEMPTING <span>infused</span> FRUIT <span>flavours with tequila</span> FOR THE BOLD</h2>
            <Flavors>
              <p className='flavorName' style={{color:"#FECD41"}}>LEMON</p>
              <p className='flavorName' style={{color:"#28C67D", marginLeft:"8%"}}>SPICY MANGO</p>
              <p className='flavorName' style={{color:"#01D9FE", marginLeft:"3%"}}>WATERMELON MINT</p>
              <p className='flavorName' style={{color:"#C78548"}}>TAMARIND</p>
            </Flavors>
          </div>
        </div>
        <div className="homeThirdSectionDesk">
          <div className='flavorsCoinatiner2'>
              <Flavors>
                <p className='flavorName' style={{color:"#00DFDD"}}>BLANCO</p>
                <p className='flavorName' style={{color:"#409FCF"}}>REPOSADO</p>
                <p className='flavorName' style={{color:"#ECA95A"}}>AÑEJO</p>
              </Flavors>
          </div>
        </div>
        <div className="homeFourthsectionDesk">
          <div className="fourthSectionContainer">
            <div className="fourthSectionLeftDiv">
              <p className='findOut'>Find out all the <span>NEWS</span> in <span>OUR SOCIAL NETWORKS</span></p>
              <RedesCard image={InstagramV} username={"@tequila_travesuras"} color={"#000000"}/>
              <RedesCard image={FacebookV} username={"@tequila_travesuras"} color={"#000000"}/>
              <RedesCard image={TicktokV} username={"@tequila_travesuras"} color={"#000000"}/>
            </div>
            <div className="fourthSectionRightDiv">
              <div className="indexImageRow">
                <img src={Grid1}/>
                <img src={Grid2}/>
                <img src={Grid3}/>
              </div>
              <div className="indexImageRow">
                <img src={Grid4}/>
                <img src={Grid5}/>
                <img src={Grid6}/>
              </div>
            </div>
          </div>
        </div>
        <div className='homeFifthSectionDesk' id="about-us">
          <Infused/>
          <div className='partnerDiv' id="contact">
            <h2 className='partnerIn'>BE OUR PARTNER <span>in crime for our</span> NEXT TRAVESURA</h2>
            <RedesCard image={MailW} username={"@TEQUILA_TRAVESURAS"} color={"#FFFFFF"}/>
            <RedesCard image={IgW} username={"@TEQUILA_TRAVESURAS"} color={"#FFFFFF"}/>
            <RedesCard image={FacebookW} username={"@TEQUILA_TRAVESURAS"} color={"#FFFFFF"}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

