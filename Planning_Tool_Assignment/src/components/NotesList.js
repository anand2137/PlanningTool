import Note from './Note';
import { useState, useEffect } from 'react';
import Board from './Groups';


const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {

	const [sortByGroup, setSortByGroup] = useState(false);

	const [noteByGroup, setNoteByGroup] = useState({});

	//To club notes by group
	useEffect(() => { 
		const noteByGroup = {};
		notes.forEach((note) => {
		if (!noteByGroup[note.group]) noteByGroup[note.group] = [];
		noteByGroup[note.group].push(note);
		});
		setNoteByGroup(noteByGroup);
	}, [notes]);

	const [sortedGroups, setSortedGroups] = useState([]);
  	
	//Sorting the notes within the clubed groups
	useEffect(() => { 
    let groupedData = {};

    for (const group in { ...noteByGroup }) {
      groupedData[group] = { ...noteByGroup }[group].sort((a, b) => {
        if (a.user < b.user) return -1;
        if (a.user > b.user) return 1;
        return 0;
      });
    }
    setSortedGroups(groupedData);
  }, [noteByGroup]);

	return (
		<>
		<button
          class="button-24" role="button"
          onClick={() => setSortByGroup((prev) => !prev)}
        >
          {!sortByGroup ? "Club Groupwise" : "Display All"}
        </button>
		
		<div className='notes-list'>

			{sortByGroup && Object.keys(sortedGroups).map(
				(group)=> 
				sortByGroup && (
					<Board key={group} group={group}>
						{(sortedGroups)[group].map((note) => (
				<Note
					group={note.group}
					text={note.text}
					user={note.user}
					id={note.id}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
					</Board>
				)
			)}

			{!sortByGroup && (
			<Board group="All Notes">
				{(notes).map((note) => (
				<Note
				group={note.group}
				text={note.text}
				user={note.user}
				id={note.id}
				date={note.date}
				handleDeleteNote={handleDeleteNote}
			/>
				))}
			</Board>
			)}


		</div>
		</>
	);
};

export default NotesList;
