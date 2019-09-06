import React from 'react';
import Folder from './Folder';
import './FolderList.css';

import { NavLink, Link } from 'react-router-dom';

import useFoldersState from '../../useFoldersState';

const FolderList = () => {
	const { getFoldersArray } = useFoldersState();

	return (
		<>
			<div className="folder-list">
				<div className="tab-struct">
					<ul className="tabs">
						{getFoldersArray().map(folder => (
							<li>
								<NavLink
									key={folder.id}
									to={`/folder/${folder.id}`}
									className="NavLink"
								>
									{folder.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<Link to={`/folder/addfolder`}>
					<button className="tab-button">Add Folder</button>
				</Link>
			</div>
		</>
	);
};

export default FolderList;
