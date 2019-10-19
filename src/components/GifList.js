import React, { Component } from 'react'

export default class GifList extends Component {

  generateGifs = () => {
    return this.props.gifs.map(gif => {
      return (
        <li key={gif.id}><img src={gif.images.original.url} alt="gif"/></li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.generateGifs()}
      </ul>
    )
  }
}