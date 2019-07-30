import React from 'react';
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
	const { getNotesState, postNewNote, deleteSelectedNote, noteGetRequest } = useNotesState();

	const {
		getFoldersState,
		postNewFolder,
		deleteSelectedFolder,
		getSelectedFolder,
		folderGetRequest
	} = useFoldersState();

	return (
		<>
			<h2>Folders</h2>
			<button type="button" onClick={() => folderGetRequest()}>
				Fetch
			</button>
			<button type="button" onClick={() => console.log(getSelectedFolder())}>
				Get Selected Folder
			</button>
			<button type="button" onClick={() => postNewFolder('hella')}>
				Post New Folder
			</button>
			<button type="button" onClick={() => deleteSelectedFolder()}>
				Delete Selected Folder
			</button>
			<button type="button" onClick={() => console.log(getFoldersState())}>
				Log foldersState
			</button>
			<br />
			<h2>Notes</h2>
			<button type="button" onClick={() => noteGetRequest()}>
				Fetch Notes
			</button>
			<button type="button" onClick={() => console.log(getNotesState())}>
				Log Notes State
			</button>
			<button type="button" onClick={() => postNewNote()}>
				Add New Note
			</button>
			<button type="button" onClick={() => deleteSelectedNote(0)}>
				Delete Selected Note
			</button>
		</>
	);
};

export default HooksTestSuite;
