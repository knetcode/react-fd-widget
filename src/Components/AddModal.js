import { Modal, TextInput, Textarea, Button } from 'react-materialize'
import { RiCloseCircleFill } from 'react-icons/ri'
import { FaExclamationCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const AddModal = ({ fields, selectedUser, postContent, isAddModalOpen, setIsAddModalOpen }) => {
	const [message, setMessage] = useState([null, null])
	const prioritiesArr = fields[7].ticket_field.choices
	const firstArr = prioritiesArr[0]
	firstArr[2] = true

	function validateEmail(email) {
		const re =
			/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}

	useEffect(() => {
		let timer = setTimeout(() => setMessage([null, null]), 3000)
		return () => {
			clearTimeout(timer)
		}
	}, [message])

	const modalSubmit = async (e) => {
		e.preventDefault()
		const addEmail = document.querySelector('#modal-add-email')
		const addSubject = document.querySelector('#modal-add-subject')
		const addDescription = document.querySelector('#modal-add-description')
		const addPriority = document.querySelector('input[type="radio"]:checked')

		setMessage([null, null])

		if (!validateEmail(addEmail.value)) {
			setMessage(['email', 'Invalid Email Address'])
			return
		}

		if (addSubject.value === '') {
			setMessage(['subject', 'Please enter a subject'])

			return
		}

		if (addDescription.value === '') {
			setMessage(['description', 'Please enter a description'])
			return
		}

		const body = {
			description: addDescription.value.trim(),
			subject: addSubject.value.trim(),
			email: addEmail.value.trim(),
			responder_id: +selectedUser === 100 ? null : +selectedUser,
			priority: +addPriority.value,
			status: 2,
		}

		console.log(body)
		postContent('tickets', body)

		addEmail.value = ''
		addSubject.value = ''
		addDescription.value = ''

		setIsAddModalOpen(!!false)
		setMessage([null, null])
		return
	}

	return (
		<Modal
			header='Quick Add Ticket'
			id='add-modal'
			open={!!isAddModalOpen}
			options={{
				dismissible: false,
			}}
			actions={[
				<Button className='modal-close-btn' flat node='button' onClick={() => setIsAddModalOpen(!!false)}>
					<RiCloseCircleFill />
				</Button>,
			]}
		>
			<form
				className='modal-form'
				id='modal-form'
				onSubmit={(e) => {
					e.preventDefault()
					modalSubmit(e)
				}}
			>
				<TextInput id='modal-add-email' label='Requester Email' />
				{message[0] === 'email' && (
					<div className='message'>
						<FaExclamationCircle />
						<p>{message[1]}</p>
					</div>
				)}

				<TextInput id='modal-add-subject' label='Subject' />
				{message[0] === 'subject' && (
					<div className='message'>
						<FaExclamationCircle />
						<p>{message[1]}</p>
					</div>
				)}

				<Textarea id='modal-add-description' l={12} m={12} s={12} xl={12} label='Description' />
				{message[0] === 'description' && (
					<div className='message message-description'>
						<FaExclamationCircle />
						<p>{message[1]}</p>
					</div>
				)}

				<div className='modal-radio-priority' id='modal-radio-priority'>
					{prioritiesArr.map((priority) => {
						return (
							<label key={priority[0]}>
								<input name='priorities' type='radio' value={priority[1]} defaultChecked={priority[2]} />
								<span>{priority[0]}</span>
							</label>
						)
					})}
				</div>
				<button type='submit' id='modal-submit' className='btn ctk-red btn-block waves-effect waves-light'>
					Submit
				</button>
				<button type='reset' className='btn transparent btn-block z-depth-0 btn-reset waves-effect'>
					Reset
				</button>
			</form>
		</Modal>
	)
}

export default AddModal
