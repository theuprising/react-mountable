import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({
  render() {
    return <div>
      <h1>react-mountable Demo</h1>
      <Component/>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
