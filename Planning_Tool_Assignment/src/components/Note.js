import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, group, text, user, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<div className='note-footer'>
				<h5>{group}</h5>
				<small>{date}</small>
			</div>
			<small>{text}</small>
			<div className='note-footer'>
				<h5>{user}</h5>

				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
