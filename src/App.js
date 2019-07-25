import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FolderList from './components/FolderList/FolderList';
import NoteList from './components/NoteList/NoteList';

function App() {
	return (
		<Router>
			<div className="App">
				<FolderList />
				<NoteList />
			</div>
		</Router>
	);
}

export default App;
