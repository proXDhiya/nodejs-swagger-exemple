// dep
const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

// routers
// TODO: ...

// app
const app = express();
const PORT = 3000;

// cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// listen
app.listen(PORT, () => {
    console.log(`App start at port ${PORT}`);
});
