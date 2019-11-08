import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    searchTerm: ""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="search" placeholder="Search" onChange={this.handleChange} value={this.state.searchTerm}></input>
        <input type="submit" />
      </form>
    )
  }
}