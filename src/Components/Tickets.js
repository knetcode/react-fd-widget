import React from 'react';
import { Tab } from 'react-materialize';
import Ticket from './Ticket';

const Tickets = ({ content }) => {
	return (
		<div className='tickets white-text'>
			<button type='submit' className='btn btn-block'>
				Username Selection
			</button>
			<Ticket />
		</div>
	);
};

export default Tickets;
