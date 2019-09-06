import React, { useState } from 'react';
import useFoldersState from './useFoldersState';
import useNotesState from './useNotesState';
import { Route, Redirect } from 'react-router-dom';

function useFormValidation(formState) {
	const [values, setValues] = useState(formState);
	const { newFolderAuth } = useFoldersState();
	const { newNoteAuth } = useNotesState();

	function handleChange(event) {
		setValues({ ...values, [event.target.name]: event.target.value });
	}

	function handleFolderSubmit(event, history) {
		event.preventDefault();
		newFolderAuth(values, history);
	}

	function handleNoteSubmit(event, history) {
		event.preventDefault();
		newNoteAuth(values, history);
	}

	return { handleChange, handleFolderSubmit, handleNoteSubmit, values };
}

export default useFormValidation;
