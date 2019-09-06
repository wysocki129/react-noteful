import React from 'react';
import Folder from './Folder';

import { NavLink, Link } from 'react-router-dom';

import useFoldersState from '../../useFoldersState';

const FolderList = () => {
	const { getFoldersArray } = useFoldersState();

	return (
		<>
			<ol>
				{getFoldersArray().map(folder => (
					<NavLink key={folder.id} to={`/folder/${folder.id}`}>
						<li>{folder.name}</li>
					</NavLink>
				))}
			</ol>
			<Link to={`/folder/addfolder`}>
				<button>Add Folder</button>
			</Link>
		</>
	);
};

export default FolderList;
