import React from 'react';
import useFormValidation from '../../useFormValidation';

const AddFolder = ({ history }) => {
	const formState = { name: `` };
	const { handleChange, handleFolderSubmit, values } = useFormValidation(formState);

	return (
		<>
			<form
				onSubmit={e => {
					handleFolderSubmit(e, history);
				}}
			>
				<label>
					New Folder
					<input type="text" name="name" value={values.name} onChange={handleChange} />
				</label>
				<button type="submit">Add New Folder</button>
			</form>
		</>
	);
};

export default AddFolder;
