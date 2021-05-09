import React from 'react'
import ReactDOM from 'react-dom'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
	<React.StrictMode>
		<App M={M} />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
