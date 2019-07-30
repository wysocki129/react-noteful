import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FolderList from './components/FolderList/FolderList';
import NoteList from './components/NoteList/NoteList';
import NotePage from './components/NotePage/NotePage';
import HooksTestSuite from './HooksTestSuite';
import { FoldersStateProvider } from './FoldersState';
import { NotesStateProvider } from './NotesState';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
const App = () => {
	return (
		<>
			<ErrorBoundry>
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
									render={({ match }) => (
										<>
											<nav className="App__nav">
												<FolderList
													selectedFolder={match.params.folderId}
												/>
											</nav>
											<main className="App__main">
												<NoteList selectedFolder={match.params.folderId} />
											</main>
										</>
									)}
								/>
								<Route
									path="/folder/:folderId/note/:noteId"
									exact
									render={({ match, history }) => (
										<>
											<NotePage
												noteId={match.params.noteId}
												history={history}
											/>
										</>
									)}
								/>
							</div>
							<HooksTestSuite />
						</Router>
					</NotesStateProvider>
				</FoldersStateProvider>
			</ErrorBoundry>
		</>
	);
};

export default App;
