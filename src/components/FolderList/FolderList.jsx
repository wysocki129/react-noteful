import React from 'react';
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom'

const FolderList = ({ allFolders }) => {
	console.log(allFolders)
	return (
		<nav>
			{allFolders.map(folder => <Link key={folder.id} to={folder.id}><Folder data={folder} /></Link>)}
		</nav>
	);
};

export default FolderList;
