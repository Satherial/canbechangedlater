import React from 'react'
import { render } from 'react-dom'
import MainPage from './mainPage'

import './global.css'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <MainPage />
  </MuiThemeProvider>
)

render(<App />, document.getElementById('app'))
