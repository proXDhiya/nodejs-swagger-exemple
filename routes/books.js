const express = require('express');
const { nanoid } = require('nanoid');

const router = express.Router();

// config
const idLength = 8;

// GET /books
router.get('/', (req, res) => {
    const books = req.app.db.get('books');
    res.json(books);
});

// GET /books/:id
router.get('/:id', (req, res) => {
    const book = req.app.db.get('books').find({ id: req.params.id }).value();
    res.json(book);
});

// POST /books
router.post('/', (req, res) => {
    try {
        const book = {
            id: nanoid(idLength),
            ...req.body
        }
        req.app.db.get('books').push(book).write();
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT /books/:id
router.put('/:id', (req, res) => {
    try {
        const book = req.app.db.get('books')
            .find({ id: req.params.id })
            .assign(req.body)
            .write();
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE /books/:id
router.delete('/:id', (req, res) => {
    try {
        req.app.db.get('books').remove({ id: req.params.id }).write();
        res.json({ message: 'Book deleted' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
