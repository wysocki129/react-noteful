import React from 'react';
import DBContext from '../DBContext';

class AddNote extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '', content: '', folderId: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	static defaultProps = {
		match: {
			params: {}
		},
		onPostNewNote: () => {}
	};
	static contextType = DBContext;

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event => {
		event.preventDefault();

		const noteValues = this.state;
		let date = new Date();
		const newNote = {
			name: noteValues.name,
			folderId: noteValues.folderId,
			modified: date,
			content: noteValues.content
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newNote)
		};

		fetch('http://localhost:9090/notes', options)
			.then(res => {
				if (!res.ok) return res.json().then(e => Promise.reject(e));
				return res.json();
			})
			.then(note => (this.context.postNewNote(note), this.props.onPostNewNote(note)))
			.catch(error => {
				console.error({ error });
			});
	};

	render() {
		const { folders = [] } = this.context;

		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
							placeholder="New Note Name"
						/>
					</label>
					<label>
						Note Content:
						<input
							type="text"
							name="content"
							value={this.state.content}
							onChange={this.handleChange}
							placeholder="New Note Content"
						/>
					</label>
					<select
						name="folderId"
						value={this.state.folderId}
						onChange={this.handleChange}
					>
						{folders.map(folder => (
							<option key={folder.id} value={folder.id}>
								{folder.name}
							</option>
						))}
					</select>
					<button type="submit">Add New Note</button>
				</form>
			</>
		);
	}
}

export default AddNote;
