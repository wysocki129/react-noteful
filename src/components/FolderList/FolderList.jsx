import React from 'react';
import Folder from './Folder/Folder';

const FolderList = () => {
	return (
		<nav>
			<ul>
				<Folder />
				<Folder />
				<Folder />
				<Folder />
				<button
					type="button"
					onClick={() => console.log('Added New Folder')}
				>
					Add Folder
				</button>
			</ul>
		</nav>
	);
};

export default FolderList;
