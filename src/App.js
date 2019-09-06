import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FolderList from './components/Folder/FolderList';
import NoteList from './components/Note/NoteList';
import NotePage from './components/Note/NotePage';
// import HooksTestSuite from './HooksTestSuite';
import { FoldersStateProvider } from './FoldersState';
import { NotesStateProvider } from './NotesState';
import AddFolder from './components/Folder/AddFolder';
import AddNote from './components/Note/AddNote';

const App = () => {
	return (
		<>
			<Router>
				<FoldersStateProvider>
					<NotesStateProvider>
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
											<FolderList />
										</nav>
										<main className="App__main">
											<NoteList />
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
											<FolderList selectedFolder={match.params.folderId} />
										</nav>
										<main className="App__main">
											<NoteList selectedFolder={match.params.folderId} />
										</main>
									</>
								)}
							/>
							<Route
								path="/folder/:folderid/note/:noteId"
								exact
								render={({ match, history }) => (
									<>
										<NotePage noteId={match.params.noteId} history={history} />
									</>
								)}
							/>
							<Route
								path="/folder/addfolder"
								exact
								render={({ history }) => <AddFolder history={history} />}
							/>
							<Route
								path="/folder/addnote"
								exact
								render={({ history }) => <AddNote history={history} />}
							/>
						</div>
					</NotesStateProvider>
				</FoldersStateProvider>
			</Router>
		</>
	);
};

export default App;
