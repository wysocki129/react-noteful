import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FolderList from './components/FolderList/FolderList';
import NoteList from './components/NoteList/NoteList';
import NotePage from './components/NotePage/NotePage';
import HooksTestSuite from './HooksTestSuite';
import useFoldersState from './useFoldersState';
import useNotesState from './useNotesState';

import { FoldersStateProvider } from './FoldersState';
import { NotesStateProvider } from './NotesState';

const App = () => {
	const { fetchFoldersFromDb } = useFoldersState();

	useEffect(() => {
		{
			fetchFoldersFromDb();
		}
	});
	return (
		<>
			<FoldersStateProvider>
				<NotesStateProvider>
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
								render={() => (
									<>
										<nav className="App__nav">
											<FolderList />
										</nav>
										<main className="App__main">
											<NoteList />
										</main>
										s
									</>
								)}
							/>
							<Route
								path="/folder/:folderId/note/:noteId"
								exact
								render={() => (
									<>
										<NotePage />
									</>
								)}
							/>
						</div>
					</Router>
				</NotesStateProvider>
			</FoldersStateProvider>
		</>
	);
};

export default App;
