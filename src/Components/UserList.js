import React from 'react';
import { FaTimes } from 'react-icons/fa';

const UserList = ({ userListDisplay }) => {
	return (
		<div className='users' id='users-modal'>
			<div className='users-container'>
				<h4 className='users-heading'>
					Select User
					<span
						id='close-list'
						className='users-close'
						onClick={userListDisplay}
					>
						<FaTimes />
					</span>
				</h4>
				<ul id='users-list' className='users-list'>
					<li className='users-list-item'>User 1</li>
					<li className='users-list-item'>User 2</li>
					<li className='users-list-item'>User 3</li>
					<li className='users-list-item'>User 4</li>
					<li className='users-list-item'>User 5</li>
					<li className='users-list-item'>User 6</li>
					<li className='users-list-item'>User 7</li>
					<li className='users-list-item'>User 8</li>
					<li className='users-list-item'>User 9</li>
					<li className='users-list-item'>User 1</li>
					<li className='users-list-item'>User 2</li>
					<li className='users-list-item'>User 3</li>
					<li className='users-list-item'>User 4</li>
					<li className='users-list-item'>User 5</li>
					<li className='users-list-item'>User 6</li>
					<li className='users-list-item'>User 7</li>
					<li className='users-list-item'>User 8</li>
					<li className='users-list-item'>User 9</li>
					<li className='users-list-item'>User 1</li>
					<li className='users-list-item'>User 2</li>
					<li className='users-list-item'>User 3</li>
					<li className='users-list-item'>User 4</li>
					<li className='users-list-item'>User 5</li>
					<li className='users-list-item'>User 6</li>
					<li className='users-list-item'>User 7</li>
					<li className='users-list-item'>User 8</li>
					<li className='users-list-item'>User 9</li>
				</ul>
			</div>
		</div>
	);
};

export default UserList;
