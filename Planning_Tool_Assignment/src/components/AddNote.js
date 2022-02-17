import { useState } from 'react';



const AddNote = ({handleAddNote} ) => {
	const [note, setNote] = useState({
		group: "",
		text: "",
		user: "",
	  });
	
	  const handleChange = (e) => {
		setNote({
		  ...note,
		  [e.target.name]: e.target.value,
		});
	  };
	
	  const handleSubmit = (e) => {
		e.preventDefault();
		handleAddNote(note);
		setNote({
		  group: "",
		  text: "",
		  user: "",
		});
	  };
	
	  return (
		<div className="create-note">
		  <div>
			<form onSubmit={handleSubmit}>
			  <div className="form-control">
				<label htmlFor="group">Group</label>
				<input
				  type="text"
				  name="group"
				  id="group"
				  value={note.group}
				  onChange={handleChange}
				/>
			  </div>
	
			  <div className="form-control">
				<label htmlFor="text">Text</label>
				<textarea
				  type="text-area"
				  name="text"
				  id="text"
				  value={note.text}
				  onChange={handleChange}
				/>
			  </div>

			  <div className="form-control">
				<label htmlFor="user">User</label>
				<input
				  type="text"
				  name="user"
				  id="user"
				  value={note.user}
				  onChange={handleChange}
				/>
			  </div>
			  <div className='form-submit'>
			  <button classname="bt" class="button-37" role="button" type="submit">
				Add Note
			  </button>
			  </div>
			  
			</form>
		  </div>
		</div>
	  );	
};


export default AddNote;
