import React from 'react';
import DBContext from '../DBContext';
import dbhelper from '../db-helpers';

export default class NotePageNav extends React.Component {
	static defaultProps = {
		history: {
			goBack: () => {}
		},
		match: {
			params: {}
		}
	};
	static contextType = DBContext;

	render() {
		const { findNote, findFolder } = dbhelper();
		const { notes, folders } = this.context;
		const { noteId } = this.props.match.params;
		const note = findNote(notes, noteId) || {};
		const folder = findFolder(folders, note.folderId);
		return (
			<div className="NotePageNav">
				{folder && <h3 className="NotePageNav__folder-name">{folder.name}</h3>}
			</div>
		);
	}
}
