import { useState, useEffect } from 'react'
import { TextInput } from 'react-materialize'

const NoKey = ({ setAPI_KEY, API_URL }) => {
	const [isValid, setIsValid] = useState(true)

	const testFetch = async (apikey) => {
		const res = await fetch(`${API_URL}/api/v2/tickets/19028`, {
			headers: { Authorization: `${apikey}`, 'Content-Type': 'application/json' },
			method: 'GET',
		})
		const dataObj = await res.json()
		return dataObj
	}

	const apiCapture = async (e) => {
		e.preventDefault()

		const api_input = document.querySelector('#api-input').value
		const api_formatted = `Basic ${window.btoa(api_input)}=`

		const testRes = await testFetch(api_formatted)

		if (testRes.code === 'access_denied') {
			localStorage.setItem('API_KEY', JSON.stringify(null))

			setIsValid(true)
			setIsValid(false)

			return
		}

		setIsValid(true)
		setAPI_KEY(api_formatted)
		localStorage.setItem('API_KEY', JSON.stringify(api_formatted))
	}

	useEffect(() => {
		const timer = window.setTimeout(() => {
			setIsValid(true)
		}, 5000)
		return () => {
			window.clearTimeout(timer)
		}
	}, [isValid])

	return (
		<div className='no-key' id='no-key'>
			<form className='no-key-form' onSubmit={(e) => apiCapture(e)}>
				{!isValid && (
					<div className='incorrect-key' id='incorrect-key'>
						<h2>API Key is not valid</h2>
					</div>
				)}

				<TextInput id='api-input' label='Enter your API Key' password />

				<button type='submit' className='btn ctk-red btn-block waves-effect waves-light'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default NoKey
