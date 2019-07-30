import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DBContext from '../DBContext';

const countNotesForFolder = (notes = [], folderId) =>
	notes.filter(note => note.folderId === folderId).length;

export default class NoteListNav extends React.Component {
	static contextType = DBContext;
	render() {
		const { folders = [], notes = [] } = this.context;
		return (
			<div className="NoteListNav">
				<ul className="NoteListNav__list">
					{folders.map(folder => (
						<li key={folder.id}>
							<NavLink
								className="NoteListNav__folder-link"
								to={`/folder/${folder.id}`}
							>
								<span className="NoteListNav__num-notes">
									{countNotesForFolder(notes, folder.id)}
								</span>
								{folder.name}
							</NavLink>
						</li>
					))}
				</ul>
				<div className="NoteListNav__button-wrapper" />
			</div>
		);
	}
}
