import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Calculator from './calculator/calculator.container'
import Store from './store/store.dev'

import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Provider store={ Store }>
    <Calculator />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()



