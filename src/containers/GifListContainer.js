import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifs: [],
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${event.target.children[0].value}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(response => {
        this.setState(
          { gifs: response.data.slice(0, 3) }
        )
      })
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}