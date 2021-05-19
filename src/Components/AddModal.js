import { Modal, TextInput, Textarea, Button } from 'react-materialize'

const AddModal = ({ fields, selectedUser, postContent, isAddModalOpen, setIsAddModalOpen }) => {
	const prioritiesArr = fields[7].ticket_field.choices
	const firstArr = prioritiesArr[0]
	firstArr[2] = true

	const modalSubmit = async (e) => {
		e.preventDefault()
		const addEmail = document.querySelector('#modal-add-email')
		const addSubject = document.querySelector('#modal-add-subject')
		const addDescription = document.querySelector('#modal-add-description')
		const addPriority = document.querySelector('input[type="radio"]:checked')
		const body = {
			description: addDescription.value.trim(),
			subject: addSubject.value.trim(),
			email: addEmail.value.trim(),
			responder_id: +selectedUser === 100 ? null : +selectedUser,
			priority: +addPriority.value,
			status: 2,
		}

		postContent('tickets', body)

		addEmail.value = ''
		addSubject.value = ''
		addDescription.value = ''

		setIsAddModalOpen(!!false)
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
				<Button flat node='button' waves='green' onClick={() => setIsAddModalOpen(!!false)}>
					Close
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
