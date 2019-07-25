import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FolderList from './components/FolderList/FolderList';
import NoteList from './components/NoteList/NoteList';
import NotePage from './components/NotePage/NotePage';
import { dummyFolders, dummyNotes } from './dummy-store';

const App = ({ starterFolders, starterNotes }) => {
	const [allFolders, setAllFolders] = useState(dummyFolders);
	const [allNotes, setAllNotes] = useState(dummyNotes);

	const getNotePage = (allNotes, selectedNoteId) => {
		let noteForPage = allNotes.filter(
			note => note.id === selectedNoteId
		);
		return noteForPage[0];
	};

	return (
		<Router>
			<div className="App">
				<Link to="/">
					<h1>Noteful</h1>
				</Link>
				<FolderList allFolders={allFolders} />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<NoteList allNotes={allNotes} />
						</>
					)}
				/>
				<Route
					path="/folder/:folderId"
					exact
					render={({ match }) => (
						<>
							<NoteList
								allNotes={allNotes}
								folderFilter={match.params.folderId}
							/>
						</>
					)}
				/>
				<Route
					path="/folder/:folderId/note/:noteId"
					exact
					render={({ match }) => (
						<NotePage
							data={getNotePage(
								allNotes,
								match.params.noteId
							)}
						/>
					)}
				/>
			</div>
		</Router>
	);
};

export default App;
