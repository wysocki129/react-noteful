import React from 'react';
import Note from '../Note/Note';
import DBContext from '../DBContext';

const findFolder = (folders = [], folderId) => folders.find(folder => folder.id === folderId);

const findNote = (notes = [], noteId) => notes.find(note => note.id === noteId);

const getNotesForFolder = (notes = [], folderId) =>
	!folderId ? notes : notes.filter(note => note.folderId === folderId);
const countNotesForFolder = (notes = [], folderId) =>
	notes.filter(note => note.folderId === folderId).length;

export default class NotePageMain extends React.Component {
	static defaultProps = {
		match: {
			params: {}
		}
	};
	static contextType = DBContext;

	handleDeleteNote = noteId => {
		this.props.history.push(`/`);
	};

	render() {
		const { notes = [] } = this.context;
		const { noteId } = this.props.match.params;
		const note = findNote(notes, noteId) || { content: '' };
		return (
			<section className="NotePageMain">
				<Note
					id={note.id}
					name={note.name}
					modified={note.modified}
					onDeleteNote={this.handleDeleteNote}
				/>
				<div className="NotePageMain__content">
					{note.content.split(/\n \r|\n/).map((para, i) => (
						<p key={i}>{para}</p>
					))}
				</div>
			</section>
		);
	}
}
