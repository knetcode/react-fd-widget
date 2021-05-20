import { Modal, TextInput, Textarea, Button } from 'react-materialize'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useState } from 'react'

const AddModal = ({ fields, selectedUser, postContent, isAddModalOpen, setIsAddModalOpen }) => {
	const [message, setMessage] = useState(null)
	const prioritiesArr = fields[7].ticket_field.choices
	const firstArr = prioritiesArr[0]
	firstArr[2] = true

	function validateEmail(email) {
		const re =
			/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
		return re.test(email)
	}

	const modalSubmit = async (e) => {
		e.preventDefault()
		const addEmail = document.querySelector('#modal-add-email')
		const addSubject = document.querySelector('#modal-add-subject')
		const addDescription = document.querySelector('#modal-add-description')
		const addPriority = document.querySelector('input[type="radio"]:checked')

		if (validateEmail(addEmail.value)) {
			const body = {
				description: addDescription.value.trim(),
				subject: addSubject.value.trim(),
				email: addEmail.value.trim(),
				responder_id: +selectedUser === 100 ? null : +selectedUser,
				priority: +addPriority.value,
				status: 2,
			}

			// postContent('tickets', body)
			console.log('submitted')

			addEmail.value = ''
			addSubject.value = ''
			addDescription.value = ''

			setIsAddModalOpen(!!false)
			return
		}

		setMessage('Invalid Submission')
		setTimeout(() => {
			setMessage(null)
		}, 2000)

		console.log('failed')
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
				<TextInput email id='modal-add-email' label='Requester Email' required />
				<TextInput id='modal-add-subject' label='Subject' required />
				<Textarea id='modal-add-description' l={12} m={12} s={12} xl={12} label='Description' required />
				{message && <div className='message'>{message}</div>}
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
