import React, { useState } from 'react';

function useFormValidation(formState) {
	const [values, setValues] = useState(formState);

	function handleChange(event) {
		setValues({ ...values, [event.target.name]: event.target.value });
	}

	function handleNoteSubmit(event) {
		event.preventDefault();
		newNoteAuth(values);
	}

	function newNoteAuth(values) {
		let errors = {};
		if (!values.name) {
			errors.name = 'Each note must have a name.';
		}
		if (Object.keys(errors).length !== 0) {
			console.log(errors);
		} else {
			postNewNote(values);
		}
	}

	function postNewNote(note) {
		let date = new Date();
		const newNote = {
			name: note.name,
			folderId: note.folderId,
			modified: date,
			content: note.content
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newNote)
		};

		fetch('http://localhost:9090/notes', options)
			.then(response => response.json())
			.catch(e => {
				console.error({ e });
			});
	}

	return { handleChange, handleNoteSubmit, values };
}

export default useFormValidation;
