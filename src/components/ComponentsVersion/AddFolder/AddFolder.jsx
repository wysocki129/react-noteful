import React from 'react';
import DBContext from '../DBContext';
import ErrorBoundry from '../ErrorBoundry';

class AddFolder extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	static defaultProps = {
		match: {
			params: {}
		},
		onPostNewFolder: () => {}
	};
	static contextType = DBContext;

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = event => {
		event.preventDefault();

		const folderValues = this.state;

		const newNote = {
			name: folderValues.name
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newNote)
		};

		fetch('http://localhost:9090/folders', options)
			.then(res => {
				if (!res.ok) return res.json().then(e => Promise.reject(e));
				return res.json();
			})
			.then(
				folder => (this.context.postNewFolder(folder), this.props.onPostNewFolder(folder))
			)
			.catch(error => {
				console.error({ error });
			});
	};

	render() {
		return (
			<ErrorBoundry>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
							placeholder="New Folder Name"
						/>
					</label>

					<button type="submit">Add New Folder</button>
				</form>
			</ErrorBoundry>
		);
	}
}

export default AddFolder;
