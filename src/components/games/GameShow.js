import React from 'react'
import axios from 'axios'

class GameShow extends React.Component {

  constructor(){
    super()

    this.state = {
      game: []
    }
  }

  componentDidMount(){
    axios.get(`/api/games/${this.props.match.params.id}`)
      .then(res => this.setState({ game: res.data }))
      .catch(error => alert(error))
  }

  render(){
    if(this.state.game.length === 0) return null
    const {
      title,
      genre,
      image,
      platforms,
      developer,
      metascore
    } = this.state.game
    const release = new Date(this.state.game.release)
    return (
      <section className="section">
        <div className="container gameShow">
          <h1 className="title is-1">{title}</h1>
          <h2 className="subtitle is-2">{developer}</h2>
          <hr />

          <div className="columns">

            <div className="column is-half">
              <figure className="image">
                <img src={image} alt={title} />
              </figure>
              <div >

              </div>
            </div>
            <div className="column">
              <h4 className="title is-5">
                Genre: {genre}
              </h4>
              <h4 className="title is-5">
                Released: {release.toLocaleDateString()}
              </h4>
              <h4 className="title is-5">
                Metascore: {metascore}
              </h4>
              <hr />
              <h4 className="title is-5">Platforms:</h4>
              <p>{platforms.join(', ')}</p>
              <hr />
            </div>


          </div>

        </div>
      </section>
    )
  }
}

export default GameShow
