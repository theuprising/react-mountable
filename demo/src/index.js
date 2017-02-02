import React from 'react'
import {render} from 'react-dom'

import mountable from '../../src'

const mountItalic = el => {
  el.innerHTML = '<em>Hello!</em>'
}

const Italic = mountable(mountItalic)

render(<Italic />, document.querySelector('#demo'))

