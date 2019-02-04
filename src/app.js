import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './style.scss'

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
      <div>
        <h1>DDL Video Games</h1>
        {this.state.data.map(game =>
          <div key={game._id}>
            <h2>{game.title}</h2>
            <div className="image" style={{backgroundImage: `url(${game.image})`}}></div>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
