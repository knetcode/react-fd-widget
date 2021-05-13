import React from 'react'
import { TextInput } from 'react-materialize'

const NoKey = ({ API_KEY, setAPI_KEY }) => {
	const apiCapture = (e) => {
		e.preventDefault()
		const api_input = document.querySelector('#api-input')
		const api_formatted = `Basic ${window.btoa(api_input.value.trim())}=`
		setAPI_KEY(api_formatted)
		localStorage.setItem('API_KEY', JSON.stringify(api_formatted))
		console.log(API_KEY)
	}

	return (
		<div className='no-key'>
			<form className='no-key-form' onSubmit={(e) => apiCapture(e)}>
				<TextInput id='api_input' label='Enter your API Key' password />
				<button type='submit' className='btn ctk-red btn-block waves-effect waves-light'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default NoKey
