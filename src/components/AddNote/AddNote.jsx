import React from 'react';
import useFormValidation from '../../useFormValidation';
import useFoldersState from '../../useFoldersState';

const AddNote = () => {
	const formState = { name: `` };
	const { handleChange, handleNoteSubmit, values } = useFormValidation(formState);
	const { getFoldersArray } = useFoldersState();
	return (
		<>
			<form onSubmit={handleNoteSubmit}>
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
				<select name="folderId" value={values.folderId} onChange={handleChange}>
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
