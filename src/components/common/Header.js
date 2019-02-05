import React from 'react'

import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(){
    super()

    this.state = {
      menuActive: false
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e){
    e.target.classList.toggle('is-active')
    this.setState({ menuActive: !this.state.menuActive})
  }

  render(){
    return(
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <h1 className="title is-1">DDL Games</h1>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={this.clickHandler}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>
          <div
            className={`navbar-menu
                ${this.state.menuActive ? 'is-active' : ''}
              `}
          >
            <div className="navbar-end">
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/games" className="navbar-item">Games</Link>
              <Link to="/games/new" className="navbar-item">Add Game</Link>
            </div>

          </div>
        </nav>
      </header>
    )
  }
}

export default Header
