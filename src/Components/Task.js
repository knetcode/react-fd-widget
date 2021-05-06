import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

const Task = () => {
	const taskExpand = (e) => {
		const taskParent = e.target.parentElement;
		taskParent.classList.toggle('expanded');
		e.target.classList.toggle('plus');

		if (e.target.classList.contains('plus')) {
			e.target.innerHTML = '+';
		}

		if (!e.target.classList.contains('plus')) {
			e.target.innerHTML = '-';
		}
	};

	return (
		<div className='task container'>
			<div className='task-priority' style={{ backgroundColor: '#ff0000' }}></div>

			<div className='task-header'>
				<a href='https://computicket.com' className='task-link'>
					<h2>ID - Subject</h2>
				</a>
				<button type='submit' className='task-resolve btn' id='task-resolve-btn'>
					Resolve
				</button>
			</div>
			<p className='task-description'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam quae totam cumque laboriosam
				voluptas tempore eos fuga quo maiores libero, illum ducimus? Facilis quae beatae dolores voluptas illum
				recusandae ipsum officiis illo! Maiores quibusdam nam vitae provident, iste enim, molestias tempora nihil
				consequuntur nemo et eum, esse sed dolore quaerat commodi libero? Adipisci nihil iusto perferendis quos
				illum, similique dignissimos repudiandae quaerat labore totam. Doloremque suscipit quia saepe ut natus
				harum, perspiciatis hic possimus, eum itaque cum ipsum eius voluptas aliquam commodi molestias neque! Aut
				nisi dolore harum obcaecati ad, illo ipsum maiores ut omnis cupiditate recusandae dicta. Corrupti nisi
				voluptas at officia. Officiis reprehenderit vel libero vitae laudantium, eos adipisci. Placeat veniam
				ratione nisi eius perferendis doloremque sapiente iste, dignissimos vel officia! Non neque delectus
				doloribus, veritatis consectetur quaerat consequatur ex et corrupti voluptas possimus quod iure maiores est.
				Laudantium repudiandae quam eum iusto amet eligendi nemo ipsam!
			</p>
			<div className='task-expand plus' onClick={taskExpand}>
				+
			</div>
		</div>
	);
};

export default Task;
