import React from 'react'
import { TextInput } from 'react-materialize'

const NoKey = ({ setAPI_KEY }) => {
	const apiCapture = (e) => {
		e.preventDefault()
		const api_input = document.querySelector('#api-input').value
		const api_formatted = `Basic ${window.btoa(api_input)}=`
		setAPI_KEY(api_formatted)
		localStorage.setItem('API_KEY', JSON.stringify(api_formatted))
	}

	return (
		<div className='no-key' id='no-key'>
			<form className='no-key-form' onSubmit={(e) => apiCapture(e)}>
				<TextInput id='api-input' label='Enter your API Key' />

				<button type='submit' className='btn ctk-red btn-block waves-effect waves-light'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default NoKey
