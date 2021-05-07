import React from 'react';
import { Badge } from 'react-materialize';

const Ticket = () => {
	return (
		<div className='ticket z-depth-2'>
			<div className='ticket-header'>
				<div>
					<h2>Subject</h2>
					<h4>ID</h4>
				</div>
				<div>
					<a href='!#'>Link</a>
					<strong>URGENT</strong>
				</div>
			</div>

			<div className='ticket-body'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos labore, suscipit totam doloremque ad
					odit cum vel veniam ipsum ullam, impedit iusto eveniet! Blanditiis, illum aliquid! Officia aspernatur
					magni, veniam facere maiores dicta maxime rerum quidem explicabo est deserunt voluptate deleniti eos
					nihil culpa quam. At pariatur mollitia autem recusandae natus animi perspiciatis fugiat provident,
					necessitatibus praesentium maiores, aspernatur officiis dolor expedita quisquam sit adipisci voluptates,
					temporibus beatae doloremque sapiente repellat eaque. Inventore quasi molestias reiciendis consequuntur
					ipsam distinctio aliquam accusamus aspernatur numquam eveniet hic odio dignissimos praesentium veniam
					dolor itaque doloremque blanditiis animi voluptatum ea, rerum amet vel molestiae? Molestias impedit
					veniam incidunt porro consectetur commodi non excepturi aliquid, sed nam recusandae perspiciatis qui
					illum animi quidem error sequi molestiae ipsum unde vel magnam dolorem. Provident eius id iure
					reprehenderit ab, consequatur totam natus aut quo voluptatibus exercitationem laudantium? Neque
					consectetur magnam porro quibusdam sapiente corrupti quos eveniet nostrum?
				</p>
			</div>

			<div className='ticket-footer'>
				<button type='submit' className='btn'>
					Resolve
				</button>
				<button type='submit' className='btn'>
					Expand
				</button>
			</div>
		</div>
	);
};

export default Ticket;
