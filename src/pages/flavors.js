import React from 'react'
import Layout from '../components/layout'
import "../css/flavors.css"
import LemonFront from "../images/desktop/flavors/Lemon.png"
import LemonBack from "../images/desktop/flavors/lemonback.png"
import WatermelonFront from "../images/desktop/flavors/Watermelon-Mint.png"
import WatermelonBack from "../images/desktop/flavors/watermelonback.png"
import Blanco from "../images/desktop/flavors/Blanco.png"
import BlancoBack from "../images/desktop/flavors/blancoBack.png"
import Spicy from "../images/desktop/flavors/spicy-mango.png"
import SpicyBack from "../images/desktop/flavors/spicyback.png"
import Tamarind from "../images/desktop/flavors/Tamarind.png"
import TamarindBack from "../images/desktop/flavors/tamarinback.png"
import Reposado from "../images/desktop/flavors/Reposado.png"
import ReposadoBack from "../images/desktop/flavors/reposadoback.png"
import Añejo from "../images/desktop/flavors/Añejo.png"
import AñejoBack from "../images/desktop/flavors/añoejoback.png"

const Flavors = () => {
  return (
    <Layout>
      <div className='MainDivDesk'>
        <div className='flavorsFirstSection'></div>
        <div className='flavorsSecondSection'>
          <div className='flavorsDuo'>
            <div className='flavorDetails'>
              <img src={LemonFront} className="front"/>
              <img src={LemonBack} className="back"/>
            </div>
            <div className='flavorDetails'>
              <img src={WatermelonFront} className="front"/>
              <img src={WatermelonBack} className="back"/>
            </div>
          </div>
          <div className='flavorsDuo'>
            <div className='flavorDetails'>
              <img src={Blanco} className="front"/>
              <img src={BlancoBack} className="back"/>
            </div>
            <div className='flavorDetails'>
              <img src={Spicy} className="front"/>
              <img src={SpicyBack} className="back"/>
            </div>
          </div>
          <div className='flavorsTrio'>
            <div className='trioFlavorDetails'>
              <img src={Tamarind} className="front"/>
              <img src={TamarindBack} className="back"/>
            </div>
            <div className='trioFlavorDetails'>
              <img src={Reposado} className="front"/>
              <img src={ReposadoBack} className="back"/>
            </div>
            <div className='trioFlavorDetails'>
              <img src={Añejo} className="front"/>
              <img src={AñejoBack} className="back"/>
            </div>
          </div>
        </div>
        <div className='flavorsThirdSection'>
          <h2 className='wichFlavors'>Which <span>FLAVOURS</span> suits best your <span>TRAVESURAS?</span></h2>
        </div>
      </div>
    </Layout>
  )
}

export default Flavors