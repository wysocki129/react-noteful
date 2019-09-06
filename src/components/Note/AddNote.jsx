import React from 'react';
import useFormValidation from '../../useFormValidation';
import useFoldersState from '../../useFoldersState';

const AddNote = ({ history }) => {
	const formState = { name: `` };
	const { handleChange, handleNoteSubmit, values } = useFormValidation(formState);
	const { getFoldersArray } = useFoldersState();

	return (
		<>
			<form
				onSubmit={e => {
					handleNoteSubmit(e, history);
				}}
			>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={values.name}
						onChange={handleChange}
						placeholder="New Note Name"
					/>
				</label>
				<label>
					Note Content:
					<input
						type="text"
						name="content"
						value={values.content}
						onChange={handleChange}
						placeholder="New Note Content"
					/>
				</label>
				<select name="folderid" value={values.folderid} onChange={handleChange}>
					<option value={0} label>
						Pick A Folder
					</option>
					{getFoldersArray().map(folder => (
						<option key={folder.id} value={folder.id}>
							{folder.name}
						</option>
					))}
				</select>
				<button type="submit">Add New Note</button>
			</form>
		</>
	);
};

export default AddNote;
