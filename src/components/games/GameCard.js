import React from 'react'

const GameCard = ({ title, image, developer, genre }) => {
  return(
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title title is-4 is-centered">{title}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="subtitle is-5"><strong>Developer:</strong> {developer}</h4>
        <h4><strong>Genre:</strong> {genre}</h4>
      </div>
    </div>
  )
}

export default GameCard
