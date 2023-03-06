import React from 'react'
import "../css/home.css"
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


const Index = () => {
  return (
    <div className="MainDivDesk">
    <div className="homeFristSectionDesk"></div>
    <div className="homeSecondSectionDesk"></div>
    <div className="homeThirdSectionDesk"></div>
    <div className="homeFourthsectionDesk">
      <div className="fourthSectionContainer">
        <div className="fourthSectionLeftDiv">
          <h2>Find out all the news in our social networks</h2>
          <RedesCard image={InstagramV} username={"@tequila_travesuras"}/>
          <RedesCard image={FacebookV} username={"@tequila_travesuras"}/>
          <RedesCard image={TicktokV} username={"@tequila_travesuras"}/>
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
  </div>
  )
}

export default Index

