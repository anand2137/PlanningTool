import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import AddNote from './components/AddNote';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			group: 'BackEnd',
			text: 'This is Note 1',
			date: '16/02/2022',
			user: 'Anand'
		},
		{
			id: nanoid(),
			group: 'FrontEnd',
			text: 'This is Note 2',
			date: '15/04/2021',
			user: 'Bhushan'
		},
		{
			id: nanoid(),
			group: 'FrontEnd',
			text: 'This is Note 3',
			date: '20/12/2021',
			user: 'Mithila'
		},
		{
			id: nanoid(),
			group: 'Android',
			text: 'This is Note 4',
			date: '22/01/2022',
			user: 'Anand'
		},
		{
			id: nanoid(),
			group: 'BackEnd',
			text: 'This is Note 5',
			date: '20/01/2022',
			user: 'Ankush'
		},
		{
			id: nanoid(),
			group: 'FrontEnd',
			text: 'This is Note 6',
			date: '15/04/2021',
			user: 'Achal'
		}
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);



	const addNote = (note) => {
		console.log(note);
		const date = new Date();
		const newNote = {
			...note,
			id: nanoid(),
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='headContainer'>
			<Header handleToggleDarkMode={setDarkMode} />
			</div>
			
			<div className='container'>
				
				<div className="left-half">
				{/* <div className="vp"></div> */}
				<AddNote handleAddNote={addNote}/>
				</div>

				<div className="right-half">
					<Search handleSearchNote={setSearchText} />
					<NotesList
						notes={notes.filter((note) =>
							note.text.toLowerCase().includes(searchText)
							)}
							handleDeleteNote={deleteNote}
							/>
				</div>
			</div>
		</div>
	);
};

export default App;
