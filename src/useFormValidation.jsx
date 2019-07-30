import React, { useState } from 'react';
import useFoldersState from './useFoldersState';
import useNotesState from './useNotesState';

function useFormValidation(formState) {
	const [values, setValues] = useState(formState);
	const { newFolderAuth } = useFoldersState();
	const { newNoteAuth } = useNotesState();

	function handleChange(event) {
		setValues({ ...values, [event.target.name]: event.target.value });
	}

	function handleFolderSubmit(event) {
		event.preventDefault();
		newFolderAuth(values);
	}

	function handleNoteSubmit(event) {
		event.preventDefault();
		newNoteAuth(values);
	}

	return { handleChange, handleFolderSubmit, handleNoteSubmit, values };
}

export default useFormValidation;
