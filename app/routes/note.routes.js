module.exports = (app) => {
	const notes = require('../controllers/note.controller.js');

	// Create a new Note
	app.post('/notes', notes.create);

	// Retrive all Notes
	app.get('/notes', notes.findAll);

	// Retrive a single note with noteId
	app.get('/notes/:noteId', notes.findOne);

	// Update a note with noteId
	app.put('/notes/:noteId', notes.update);

	// Delete a note with noteId
	app.delete('/notes/:noteId', notes.delete);
}