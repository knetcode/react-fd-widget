import { Modal, TextInput, Textarea } from 'react-materialize'
import { FaPlus } from 'react-icons/fa'
import React from 'react'

const trigger = (
	<button className='btn-floating btn-large ctk-pink btn-add'>
		<FaPlus />
	</button>
)

const AddModal = ({ fields, selectedUser, postContent, getTickets }) => {
	const prioritiesArr = fields[7].ticket_field.choices
	const firstArr = prioritiesArr[0]
	firstArr[2] = true
	// console.log(firstArr)

	const modalSubmit = async (e) => {
		e.preventDefault()
		// console.log('submitted')
		const addEmail = document.querySelector('#modal-add-email').value
		const addSubject = document.querySelector('#modal-add-subject').value
		const addDescription = document.querySelector('#modal-add-description').value
		const addPriority = document.querySelector('input[type="radio"]:checked').value
		// console.log(addEmail, addSubject, addDescription, addPriority)
		// console.log(addPriority)
		const body = {
			helpdesk_ticket: {
				description: addDescription,
				subject: addSubject,
				email: addEmail,
				responder_id: +selectedUser,
				priority: +addPriority,
				status: 2,
			},
		}
		postContent('helpdesk/tickets', body, getTickets())
		// setTimeout(getTickets, 500)
	}

	return (
		<Modal header='Quick Add Ticket' trigger={trigger}>
			<form
				className='modal-form'
				id='modal-form'
				onSubmit={(e) => {
					e.preventDefault()
					modalSubmit(e)
				}}
			>
				<TextInput email id='modal-add-email' label='Requester Email' validate required />
				<TextInput id='modal-add-subject' label='Subject' required />
				<Textarea id='modal-add-description' l={12} m={12} s={12} xl={12} label='Description' required />
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
				<button type='submit' className='btn ctk-red btn-block waves-effect waves-light'>
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
