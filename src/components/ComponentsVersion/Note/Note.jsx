import React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundry from '../ErrorBoundry';
import DBContext from '../DBContext';
import PropTypes from 'prop-types';

export default class Note extends React.Component {
	static defaultProps = {
		onDeleteNote: () => {}
	};
	static contextType = DBContext;

	handleClickDelete = e => {
		e.preventDefault();
		const noteId = this.props.id;

		fetch(`http://localhost:9090/notes/${noteId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(res => {
				if (!res.ok) return res.json().then(e => Promise.reject(e));
				return res.json();
			})
			.then(() => {
				this.context.deleteNote(noteId);
				this.props.onDeleteNote(noteId);
			})
			.catch(error => {
				console.error({ error });
			});
	};

	formatDate = date => {
		let newDate = new Date(date);

		return newDate.toLocaleDateString();
	};

	render() {
		const { name, id, modified } = this.props;

		return (
			<ErrorBoundry>
				<div className="Note">
					<h2 className="Note__title">
						<Link to={`/note/${id}`}>{name}</Link>
					</h2>
					<button className="Note__delete" type="button" onClick={this.handleClickDelete}>
						remove
					</button>
					<div className="Note__dates">
						<div className="Note__dates-modified">
							Modified: <span className="Date">{this.formatDate(modified)}</span>
						</div>
					</div>
				</div>
			</ErrorBoundry>
		);
	}
}

Note.propTypes = {
	id: PropTypes.string,
	content: PropTypes.string,
	name: PropTypes.string.isRequired,
	modified: PropTypes.string
};
