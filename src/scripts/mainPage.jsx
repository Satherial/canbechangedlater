import * as React from 'react'
import Home from './home'
import MenuBar from './MenuBar'
import Footer from './Footer'
import MainBlock from './mainBlock'
import GridListModule from './gridList'
// import './mainPage.css'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'main'
    }
  }

  setPage(newPage) {
    this.setState({ currentPage: newPage })
  }

  render() {
    let page = null
    switch (this.state.currentPage) {
      case 'main':
        page = <Home setPage={this.setPage} />
        break
      case 'team':
        page = <Team setPage={this.setPage} />
        break
      default:
        page = <Home setPage={this.setPage} />
    }

    return (
      <div>
        <MenuBar setPage={this.setPage} />
        {page}
        <Footer setPage={this.setPage} />
      </div>
    )
  }
}

export default MainPage
