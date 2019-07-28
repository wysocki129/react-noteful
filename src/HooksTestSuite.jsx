import React, { useContext } from 'react';
import useFoldersState from './useFoldersState';
import useNotesState from './useNotesState';

//To run test add this to App.js:
// import HooksTestSuite from './HooksTestSuite'
// return(
// <>
// 	<FoldersStateProvider>
// 		<NotesStateProvider>
// 			<HooksTestSuite />
// 		</NotesStateProvider>
// 	</FoldersStateProvider>
// </>
// )

const HooksTestSuite = () => {
	const {
		fetchNotesFromDb,
		getNoteName,
		getNoteId,
		getNotesState,
		addNewNote,
		deleteSelectedNote,
		getNoteFolderId,
		getNoteModified,
		getNoteContent
	} = useNotesState();

	const {
		fetchFoldersFromDb,
		getFolderName,
		getFolderId,
		addNewFolder,
		deleteSelectedFolder,
		getFoldersState
	} = useFoldersState();

	return (
		<>
			<h2>Folders</h2>
			<button type="button" onClick={() => fetchFoldersFromDb()}>
				Fetch
			</button>
			<button type="button" onClick={() => console.log(getFolderName(0))}>
				Get Folder Name
			</button>
			<button type="button" onClick={() => console.log(getFolderId(0))}>
				Get Folder Id
			</button>
			<button type="button" onClick={() => addNewFolder()}>
				Add New Folder
			</button>
			<button type="button" onClick={() => deleteSelectedFolder(0)}>
				Delete Selected Folder
			</button>
			<button type="button" onClick={() => console.log(getFoldersState())}>
				Log foldersState
			</button>

			<br />
			<hl />
			<h2>Notes</h2>
			<button type="button" onClick={() => fetchNotesFromDb()}>
				Fetch Notes
			</button>
			<button type="button" onClick={() => console.log(getNoteName(0))}>
				Get Notes Name
			</button>
			<button type="button" onClick={() => console.log(getNoteId(0))}>
				Get Notes Id
			</button>
			<button type="button" onClick={() => console.log(getNoteFolderId(0))}>
				Get Notes Folder Id
			</button>
			<button type="button" onClick={() => console.log(getNoteModified(0))}>
				Get Notes Modified
			</button>
			<button type="button" onClick={() => console.log(getNoteContent(0))}>
				Get Notes Content
			</button>
			<button type="button" onClick={() => console.log(getNotesState())}>
				Log Notes State
			</button>
			<button type="button" onClick={() => addNewNote()}>
				Add New Note
			</button>
			<button type="button" onClick={() => deleteSelectedNote(0)}>
				Delete Selected Note
			</button>
		</>
	);
};

export default HooksTestSuite;
