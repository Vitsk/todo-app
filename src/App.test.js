import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils';
import AppContainer from './App'

it('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<AppContainer />, div);
  })
  act(() => {
    ReactDOM.unmountComponentAtNode(div);
  })
})