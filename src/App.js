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

	const getNotePage = (allNotes, allFolders, selectedNoteId) => {
		let noteForPage = allNotes.filter(
			note => note.id === selectedNoteId
		);
		let noteFolderName = allFolders.filter(
			folder => folder.id == noteForPage[0].folderId
		);
		noteForPage[0].folderName = noteFolderName[0].name;
		return noteForPage[0];
	};

	return (
		<Router>
			<div className="App">
				<header className="App__header">
					<Link to="/">
						<h1>Noteful</h1>
					</Link>
				</header>
				<Route
					path="/"
					exact
					render={() => (
						<>
							<nav className="App__nav">
								<FolderList allFolders={allFolders} />
							</nav>
							<main className="App__main">
								<NoteList allNotes={allNotes} />
							</main>
						</>
					)}
				/>
				<Route
					path="/folder/:folderId"
					exact
					render={({ match }) => (
						<>
							<nav className="App__nav">
								<FolderList allFolders={allFolders} />
							</nav>
							<main className="App__main">
								<NoteList
									allNotes={allNotes}
									folderFilter={match.params.folderId}
								/>
							</main>
						</>
					)}
				/>
				<Route
					path="/folder/:folderId/note/:noteId"
					exact
					render={({ match }) => (
						<>
							<NotePage
								data={getNotePage(
									allNotes,
									allFolders,
									match.params.noteId
								)}
							/>
						</>
					)}
				/>
			</div>
		</Router>
	);
};

export default App;
