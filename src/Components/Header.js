import React from 'react';
import logo from './logo-small.png';
import UserList from './UserList';

const Header = () => {
	const userListDisplay = () => {
		const userModal = document.querySelector('#users-modal');
		userModal.classList.toggle('display');
	};

	return (
		<header className='header'>
			<img src={logo} alt='logo' />
			<button
				className='select-user btn'
				id='select-user'
				onClick={userListDisplay}
			>
				Select User
			</button>
			<UserList userListDisplay={userListDisplay} />
		</header>
	);
};

export default Header;
