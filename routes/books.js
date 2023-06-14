const express = require('express');
const { nanoid } = require('nanoid');

const router = express.Router();

// config
const idLength = 8;

/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - title
 *        - author
 *      properties:
 *        id:
 *          type: string
 *          description: The auto-generated id of the book
 *        title:
 *          type: string
 *          description: The book title
 *        author:
 *          type: string
 *          description: The book author
 *      example:
 *        id: d5fE_as2
 *        title: The new Turing Omnibus
 *        author: Null
 */

/**
 * @swagger
 * tags:
 *  name: Books
 *  description: The books managing API
 */

/**
 * @swagger
 * /books:
 *  get:
 *    summary: Returns the list of all the books
 *    tags: [Books]
 *    responses:
 *      200:
 *        description: The list of the books
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Book'
 *          
 */
router.get('/', (req, res) => {
  const books = req.app.db.get('books');
  return res.json(books);
});

/**
 * @swagger
 * /books/{id}:
 *  get:
 *    tags: [Books]
 *    summary: Get the book by id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    responses:
 *      200:
 *        description: The book description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: the book was not found
 */
router.get('/:id', (req, res) => {
  const book = req.app.db.get('books').find({ id: req.params.id }).value();
  if (!book)
    return res.status(404).json({msg: "The book was not found"})
  return res.json(book);
});

/**
 * @swagger
 * /books:
 *  post:
 *    tags: [Books]
 *    summary: Create a new bool
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was seccessfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      500:
 *        description: Some server error
 */
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
