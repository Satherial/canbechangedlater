import React from 'react'
import MenuBar from './menubar'
import MainBlock from './mainBlock'
import GridListModule from './gridList'
import Footer from './footer'
import './mainPage.css'

const MainPage = () => (
  <div className="mainPage">
    <MenuBar />
    <div className="heroSection">
      <h1>Motto accattivante</h1>
      <h4>Dico sul serio per dinci baccolina baccona</h4>
    </div>
    <div className="blockLine">
      <div className="blockItem">
        <MainBlock />
      </div>
      <div className="blockItem">
        <MainBlock />
      </div>
    </div>
    <div className="blockLine">
      <div className="blockItem">
        <MainBlock />
      </div>
      <div className="blockItem">
        <MainBlock />
      </div>
    </div>
    <h1>Collaborazioni</h1>
    <GridListModule />
    <h1>Portfolio</h1>
    <GridListModule />
    <Footer />
  </div>
)

export default MainPage