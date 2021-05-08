import React from 'react';
import Ticket from './Ticket';
import { FaPlus } from 'react-icons/fa';

const Tickets = ({ content }) => {
	const priorities = {
		low: {
			color: '#20e800',
			text: 'low',
		},
		medium: {
			color: '#2a27c5',
			text: 'medium',
		},
		high: {
			color: '#ff7a00',
			text: 'high',
		},
		urgent: {
			color: '#e91414',
			text: 'urgent',
		},
	};

	return (
		<div className='tickets white-text'>
			<button type='submit' className='btn btn-block'>
				Username Selection
			</button>

			<Ticket priority={priorities.urgent} />
			<Ticket priority={priorities.high} />
			<Ticket priority={priorities.medium} />
			<Ticket priority={priorities.low} />
			<Ticket priority={priorities.urgent} />
			<Ticket priority={priorities.high} />
			<Ticket priority={priorities.medium} />
			<Ticket priority={priorities.low} />
			<Ticket priority={priorities.urgent} />
			<Ticket priority={priorities.high} />
			<Ticket priority={priorities.medium} />
			<Ticket priority={priorities.low} />

			<button class='btn-floating btn-large waves-effect waves-light ctk-pink btn-add'>
				<FaPlus />
			</button>
		</div>
	);
};

export default Tickets;
