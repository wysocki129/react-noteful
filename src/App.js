import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FolderList from './components/FolderList/FolderList';
import NoteList from './components/NoteList/NoteList';
import { dummyFolders, dummyNotes } from './dummy-store';




	

const App = ({ starterFolders, starterNotes }) => {
	
	const [ allFolders, setAllFolders ] = useState(dummyFolders)
	const [ allNotes, setAllNotes ] = useState(dummyNotes)
	
	return (
		<Router>
			<div className="App">
				<Route path='/' render={() => (<><FolderList allFolders={allFolders} /> <NoteList allNotes={allNotes} /></>)} />
			</div>
		</Router>
	)
}


export default App;
