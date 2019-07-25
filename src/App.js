import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FolderList from './components/FolderList/FolderList';
import NoteList from './components/NoteList/NoteList';
import { dummyFolders, dummyNotes } from './dummy-store';




	

const App = ({ starterFolders, starterNotes }) => {
	
	const [ allFolders, setAllFolders ] = useState(dummyFolders)
	const [ allNotes, setAllNotes ] = useState(dummyNotes)
	
	return (
		<Router>
			<div className="App">
				<Link to='/'><h1>Noteful</h1></Link>
				<Route path='/' render={() => (<><FolderList allFolders={allFolders} /> <NoteList allNotes={allNotes} /></>)} />
				
			</div>
		</Router>
	)
}


export default App;
