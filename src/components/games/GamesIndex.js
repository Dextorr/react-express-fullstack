import React from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import GameCard from './GameCard'

class GamesIndex extends React.Component {

  constructor(){
    super()

    this.state = {
      games: []
    }
  }

  componentDidMount(){
    axios.get('/api/games')
      .then(res => this.setState({ games: res.data }))
      .catch(error => console.error('ERROR', error))
  }

  render(){
    const games = this.state.games
    return(
      <section className="section GamesIndex">
        <div className="container columns is-multiline">
          {games.map(game =>
            <Link to={`/games/${game._id}`} key={game._id} className="column is-one-quarter">
              <GameCard {...game} />
            </Link>
          )}
        </div>
      </section>
    )
  }

}

export default GamesIndex
