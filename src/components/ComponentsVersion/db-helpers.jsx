import React from 'react';

const dbhelpers = () => {
	const findFolder = (folders = [], folderId) => folders.find(folder => folder.id === folderId);

	const findNote = (notes = [], noteId) => notes.find(note => note.id === noteId);

	const getNotesForFolder = (notes = [], folderId) =>
		!folderId ? notes : notes.filter(note => note.folderId === folderId);
	const countNotesForFolder = (notes = [], folderId) =>
		notes.filter(note => note.folderId === folderId).length;

	return { findFolder, findNote, getNotesForFolder, countNotesForFolder };
};

export default dbhelpers;
