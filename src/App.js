import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NoteListNav from './components/ComponentsVersion/NoteListNav/NoteListNav';
import NoteListMain from './components/ComponentsVersion/NoteListMain/NoteListMain';
import NotePageNav from './components/ComponentsVersion/NotePageNav/NotePageNav';
import NotePageMain from './components/ComponentsVersion/NotePageMain/NotePageMain';
import DBContext from './components/ComponentsVersion/DBContext';
class App extends Component {
	state = {
		notes: [],
		folder: []
	};

	componentDidMount() {
		Promise.all([fetch(`http://localhost:9090/notes`), fetch(`http://localhost:9090/folders`)])
			.then(([notesRes, foldersRes]) => {
				if (!notesRes.ok) return notesRes.json().then(e => Promise.reject(e));
				if (!foldersRes.ok) return foldersRes.json().then(e => Promise.reject(e));

				return Promise.all([notesRes.json(), foldersRes.json()]);
			})
			.then(([notes, folders]) => {
				this.setState({ notes, folders });
			})
			.catch(e => {
				console.error({ e });
			});
	}

	renderNavRoutes() {
		return (
			<>
				{['/', '/folder/:folderId'].map(path => (
					<Route exact key={path} path={path} component={NoteListNav} />
				))}
				<Route path="/note/:noteId" component={NotePageNav} />
				<Route path="/add-folder" component={NotePageNav} />
				<Route path="/add-note" component={NotePageNav} />
			</>
		);
	}

	renderMainRoutes() {
		return (
			<>
				{['/', '/folder/:folderId'].map(path => (
					<Route exact key={path} path={path} component={NoteListMain} />
				))}
				<Route path="/note/:noteId" component={NotePageMain} />
			</>
		);
	}

	handleDeleteNote = noteId => {
		this.setState({
			notes: this.state.notes.filter(note => note.id !== noteId)
		});
	};

	render() {
		const value = {
			notes: this.state.notes,
			folders: this.state.folders,
			deleteNote: this.handleDeleteNote
		};
		return (
			<>
				<DBContext.Provider value={value}>
					<Router>
						<div className="App_main">
							<nav className="App__nav">{this.renderNavRoutes()}</nav>
							<header className="App_header">
								<Link to="/">
									<h1>Noteful</h1>
								</Link>
							</header>

							<main className="App__main">{this.renderMainRoutes()}</main>
						</div>
					</Router>
				</DBContext.Provider>
			</>
		);
	}
}

export default App;
