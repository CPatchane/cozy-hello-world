'use strict'

/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'

import { I18n } from 'cozy-ui/react/I18n'
import App from '../src/components/App'

describe('App component only', () => {
  it('should be mounted correctly', () => {
    const component = shallow(
      <App />
    ).node
    expect(component).toMatchSnapshot()
  })
})
