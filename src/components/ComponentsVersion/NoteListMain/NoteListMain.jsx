import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DBContext from '../DBContext';
import Note from '../Note/Note';

const getNotesForFolder = (notes = [], folderId) =>
	!folderId ? notes : notes.filter(note => note.folderId === folderId);

export default class NoteListMain extends Component {
	static defaultProps = {
		match: {
			params: {}
		}
	};
	static contextType = DBContext;

	render() {
		const { folderId } = this.props.match.params;
		const { notes = [] } = this.context;
		const notesForFolder = getNotesForFolder(notes, folderId);

		return (
			<>
				<section className="NoteListMain">
					<ul>
						{notesForFolder.map(note => (
							<li key={note.id}>
								<Note id={note.id} name={note.name} modified={note.modified} />
							</li>
						))}
					</ul>
					<div className="NoteListMain__button-container">
						<br />
						Note
					</div>
				</section>
			</>
		);
	}
}
