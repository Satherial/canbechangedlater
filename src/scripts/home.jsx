import React from 'react'
import MainBlock from './mainBlock'
import GridListModule from './gridList'
import './home.css'

const Home = props => (
  <div className="mainPage">
    <div className="heroSection">
      <h1>Motto accattivante</h1>
      <h4>Dico sul serio per dinci baccolina baccona</h4>
    </div>
    <div className="blockLine">
      <div className="blockItem">
        <MainBlock>
          <h1>testo di esempio</h1>
        </MainBlock>
      </div>
      <div className="blockItem">
        <MainBlock>
          <h1>testo di esempio</h1>
        </MainBlock>
      </div>
    </div>
    <div className="blockLine">
      <div className="blockItem">
        <MainBlock>
          <h1>testo di esempio</h1>
        </MainBlock>
      </div>
      <div className="blockItem">
        <MainBlock>
          <h1>testo di esempio</h1>
        </MainBlock>
      </div>
    </div>
    <h1>Collaborazioni</h1>
    <GridListModule />
    <h1>Portfolio</h1>
    <GridListModule />
  </div>
)

export default Home
