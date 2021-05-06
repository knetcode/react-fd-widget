import React from 'react';
import logo from './logo-small.png';

const Header = () => {
	return (
		<header className='header'>
			<img src={logo} alt='logo' />
			<button className='select-user btn' id='select-user'>
				Select User
			</button>
		</header>
	);
};

export default Header;
