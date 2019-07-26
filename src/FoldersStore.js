import React, { createContext, useState } from 'react';

const FoldersStoreContext = createContext([{}, () => {}]);

const FoldersStoreProvider = props => {
	const [foldersState, setFoldersState] = useState({});

	return (
		<FoldersStoreContext.Provider value={[foldersState, setFoldersState]}>
			{props.children}
		</FoldersStoreContext.Provider>
	);
};

export { FoldersStoreContext, FoldersStoreProvider };
