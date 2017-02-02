# react-mountable

Let's say you have a non-react-aware thing (we'll call it `mountItalic`) that needs to mount itself into a regular dom node.

Use this!

```js
import React from 'react'
import {render} from 'react-dom'

import mountable from '../../src'

const mountItalic = el => {
  el.innerHTML = '<em>Hello!</em>'
}

const Italic = mountable(mountItalic)

render(<Italic />, document.querySelector('#demo'))
```

