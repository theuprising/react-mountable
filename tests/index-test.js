import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'

import mountable from 'src/'

describe('mountable', () => {
  it('mountable', () => {
    const mountHello = el => {
      el.innerHTML = 'Hello!'
    }
    const Hello = mountable(mountHello)
    const mounted = mount(<Hello />)

    expect(mounted.text()).toEqual('Hello!')
  })
})
