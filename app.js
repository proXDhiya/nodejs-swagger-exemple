const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const low = require('lowdb');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// File DB
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ books: [] }).write();

// App
const app = express();

// Config
app.db = db;
const PORT = process.env.PORT || 3000;

// Swagger
const specs = swaggerJsdoc(require('./swaggerOptions').options);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/books', require('./routes/books'));
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

// listen
app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }
);
