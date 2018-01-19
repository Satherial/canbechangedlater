import React from 'react'
import MainBlock from './mainBlock'
import './team.css'

const Team = () => (
  <div className="team">
    <MainBlock>
      <h1>Team member1</h1>
      <div className="team-face">&nbsp;</div>
    </MainBlock>
    <MainBlock>
      <h1>Team member2</h1>
      <div className="team-face">&nbsp;</div>
    </MainBlock>
    <MainBlock>
      <h1>Team member3</h1>
      <div className="team-face">&nbsp;</div>
    </MainBlock>
    <MainBlock>
      <h1>Team member4</h1>
      <div className="team-face">&nbsp;</div>
    </MainBlock>
  </div>
)

export default Team
