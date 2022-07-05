import React, { Component } from 'react'

export default class PropsInClassComponent extends Component {
  render() {
    return (
      <div>
            <h2>Name: {this.props.name}</h2>

      </div>
    )
  }
}
