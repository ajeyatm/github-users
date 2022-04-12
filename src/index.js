import React from 'react'
//react 17
// import ReactDOM from 'react-dom'

//react 18
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

//react 17
// ReactDOM.render(<App />, document.getElementById('root'))

//react 18
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
