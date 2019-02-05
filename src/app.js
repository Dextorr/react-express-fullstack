import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Header from './components/common/Header'
import Home from './components/Home'
import GamesIndex from './components/games/GamesIndex'
import GamesNew from './components/games/GamesNew'
import GameShow from './components/games/GameShow'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('/api/games')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err))
  }


  render(){
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/games/new" component={GamesNew} />
            <Route path="/games/:id" component={GameShow} />
            <Route path="/games" component={GamesIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
