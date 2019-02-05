import React from 'react'

const GameForm = ({ data, handleSubmit, handleChange }) => {
  return(
    <form onSubmit={ handleSubmit }>

      <div className="field">
        <label className="label title is-4">Title</label>
        <div className="control">
          <input
            className="input"
            name="title"
            placeholder="Game Title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Developer</label>
        <div className="control">
          <input
            className="input"
            name="developer"
            placeholder="Developer"
            value={data.developer}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Image URL</label>
        <div className="control">
          <input
            className="input"
            name="image"
            placeholder="Image URL"
            value={data.image}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Platforms</label>
        <div className="control">
          <textarea
            className="textarea"
            name="platforms"
            placeholder="Platforms (separated by comma, E.g. 'Playstation 2, Gamecube')"
            value={data.platforms}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Genre</label>
        <div className="control">
          <input
            className="input"
            name="genre"
            placeholder="Genre"
            value={data.genre}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Release Date</label>
        <div className="control">
          <input
            type="date"
            className="input"
            name="release"
            placeholder="Release date"
            value={data.release}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label title is-4">Metascore</label>
        <div className="control">
          <input
            className="input"
            name="metascore"
            placeholder="Metascore"
            value={data.metascore}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="button is-light">Submit</button>

    </form>
  )
}

export default GameForm
