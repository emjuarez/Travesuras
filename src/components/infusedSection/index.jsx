import React from 'react'
import InfusedImg from "../../images/desktop/index/infused.png"
import "./styles.css"

const Infused = () => {
  return (
    <div className='infusedMaindDiv'>
        <img src={InfusedImg} className="infusedImg"/>
        <div className='dinamicDivsCointainer'>
            <div className='textDiv'>
                <p className='infusedP'>Tequila Travesuras was created in 2020 in Miami, Florida, with the goal of offering the best tequila, discovering brand-new flavors, and highlighting the best ingredients for mixology.</p>
                <p className='infusedP'>Aside from our traditional line that offers three different types of tequila: premium blanco, reposado, and añejo, we created a line with 100% natural infused flavors to spice your drinks <span>ANYTIME, ANYWAY.</span></p>
                <p className='infusedP'>Our production is from Tequila, Jalisco, where the authentic and best tequila in the world is produced. We ensure quality and tradition in each tequila bottle.</p>
            </div>
            <div className='textDiv'>
                <p className='infusedP'>… but we'll explain anyway!</p>
                <p className='infusedP'>Travesura is a unique Spanish word that embraces more than one simple action.</p>
                <p className='infusedP'>It describes a FUN, NAUGHTY, SOMETIMES WICKED, incident when you know you’re doing something you’re not allowed to.</p>
                <p className='infusedP'>We make them since we were young, and as we have grown, they evolve to make our days more enjoyable.</p>
            </div>
            <div className='textDiv'>
                <p className='infusedP'>Travesuras looks for a new way to drink tequila in a sophisticated way.</p>
                <p className='infusedP'>By being pioneers of infused tequila, we encourage people to keep doing the travesuras they have been doing since they were young, and keep that mischievous side that defines them always on.</p>
            </div>
            <div className='colourDivsGroup'>
                <div className='colorDivContainer'>
                    <div className='colorDiv' style={{backgroundColor:"#00C97D"}}>
                        <p className='colorDivTitle'>TEQUILA TRAVESURAS <span>was created to</span> LIFT OUR SPIRITS <span>and</span> LEVEL UP <span>the game of</span> OUR NIGHTS</p>
                    </div>
                </div>
                <div className='colorDivContainer'>
                    <div className='colorDiv' style={{backgroundColor:"#F99BDD"}}>
                        <p className='colorDivTitle'>TEQUILA TRAVESURAS <span>the name that speaks for itself</span></p>
                    </div>
                </div>
                <div className='colorDivContainer'>
                    <div className='colorDiv' style={{backgroundColor:"#00A4F9"}}>
                        <p className='colorDivTitle'>LIVE THE TRADITION <span>with a twist</span></p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Infused