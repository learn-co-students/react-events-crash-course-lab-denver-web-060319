import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
      const x = event.clientX
      const y = event.clientY
      drawChromeBoiAtCoords(x, y)
  }
  
  handleToggle = () => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    event.key === 'a' ? resize('+') : null 
    event.key === 's' ? resize('-') : null
  }
  
  render() {
    return (
      <canvas 
        onClick={this.handleToggle}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
