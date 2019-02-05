import React from 'react'
import axios from 'axios'

import GameForm from './GameForm'

class GamesNew extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        title: '',
        release: '',
        genre: '',
        image: '',
        platforms: '',
        developer: '',
        metascore: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()

    const data = {
      ...this.state.data,
      platforms: this.state.data.platforms.split(', ')
    }
    this.setState({ data })

    axios.post('/api/games',
      this.state.data)
      .then(() => this.props.history.push('/games'))
      .catch(error => console.error(error.message))
  }

  handleChange({ target: { name, value } }){
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  render(){
    return (
      <main className="section">
        <div className="container">
          <GameForm
            data={this.state.data}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
      </main>
    )
  }

}

export default GamesNew
