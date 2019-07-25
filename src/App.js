import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FolderList from './components/FolderList/FolderList';
import NoteList from './components/NoteList/NoteList';
import { dummyFolders, dummyNotes } from './dummy-store';

function App() {
	console.log(dummyFolders);
	const [allFolders, setAllFolders] = useState(dummyFolders);
	const [allNotes, setAllNotes] = useState(dummyNotes);
	return (
		<Router>
			<div className="App">
				<header>
					<h1>Noteful</h1>
				</header>
				<FolderList />
				<main>
					<NoteList />
				</main>
			</div>
		</Router>
	);
}

export default App;
