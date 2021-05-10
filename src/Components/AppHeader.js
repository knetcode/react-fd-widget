import React from 'react'
import { RiRefreshFill, RiCloseCircleFill } from 'react-icons/ri'

const AppHeader = ({ appName }) => {
	return (
		<header className='header'>
			<h1>{appName}</h1>
			<button id='close-app-btn' className='app-btn app-btn-close'>
				<RiCloseCircleFill
					onClick={() => {
						window.close()
					}}
				/>
			</button>
			<button
				id='refresh-app-btn'
				className='app-btn app-btn-refresh'
				onClick={() => {
					window.location.reload()
				}}
			>
				<RiRefreshFill />
			</button>
		</header>
	)
}

export default AppHeader
