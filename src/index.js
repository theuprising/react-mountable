import React from 'react'

/**
 * @name react.mountable
 *
 * @desc
 * ```
 * (DOM -> Side Effects) -> Component
 * ```
 * Turn a non-react-aware function that expects a domnode
 * to mount into into a Component
 *
 * @example
 * const mountItalic = el => {
 *   el.innerHTML = '<em>Hello!</em>'
 * }
 *
 * const Italic = mountable(mountItalic)
 *
 * render(<Italic />, document.body)
 */

const mountable = mountFn => {
  let div
  return React.createClass({
    componentDidMount: function () { this.forceUpdate() },
    render: () => {
      if (div) mountFn(div)
      return <div ref={el => { div = el }} />
    }
  })
}

export default mountable

