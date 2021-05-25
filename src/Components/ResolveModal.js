import React from 'react'
import { Modal, Button, Textarea } from 'react-materialize'
import { RiCloseCircleFill } from 'react-icons/ri'

const ResolveModal = ({
	putContent,
	isResolveModalOpen,
	setIsResolveModalOpen,
	resolvingTicket,
	setResolvingTicket,
	postContent,
}) => {
	const resolveTicket = async (e) => {
		e.preventDefault()

		const addResolve = document.querySelector('#modal-add-resolve')

		const bodyPut = {
			type: 'Incident',
			status: 4,
		}

		const bodyPost = {
			body: addResolve.value.trim(),
		}

		await postContent(`tickets/${+resolvingTicket}/reply`, bodyPost)
		await putContent('tickets', +resolvingTicket, bodyPut)
		console.log(bodyPost)
		console.log(+resolvingTicket)

		addResolve.value = ''

		setIsResolveModalOpen(!!false)
		setResolvingTicket(null)
		return
	}

	return (
		<Modal
			header='Add comment &amp; resolve'
			id='resolve-modal'
			open={!!isResolveModalOpen}
			options={{
				dismissible: false,
			}}
			actions={[
				<Button className='modal-close-btn' flat node='button' onClick={() => setIsResolveModalOpen(!!false)}>
					<RiCloseCircleFill />
				</Button>,
			]}
		>
			<form
				className='modal-form'
				id='modal-form'
				onSubmit={(e) => {
					e.preventDefault()
					resolveTicket(e)
				}}
			>
				<Textarea id='modal-add-resolve' l={12} m={12} s={12} xl={12} label='Description' />

				<button type='submit' id='modal-submit' className='btn ctk-red btn-block waves-effect waves-light'>
					Resolve
				</button>
				<button type='reset' className='btn transparent btn-block z-depth-0 btn-reset waves-effect'>
					Reset
				</button>
			</form>
		</Modal>
	)
}

export default ResolveModal
