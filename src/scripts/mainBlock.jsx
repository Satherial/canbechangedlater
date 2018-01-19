import React from 'react'
import Paper from 'material-ui/Paper'
import './mainBlock.css'

const MainBlock = props => (
  <Paper className="mainBlock" zDepth={1}>
    {props.children}
  </Paper>
)

export default MainBlock
