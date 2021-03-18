import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"
import './index.css'
import {Manager} from "./components/Manager"

ReactDOM.render(
  <Router>
    <Manager />
  </Router>
  , document.getElementById('root')
)


