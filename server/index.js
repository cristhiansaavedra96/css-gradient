const express = require('express');
const app = express();
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Add headers before the routes are defined

// use it before all route definitions
app.use(cors({origin: '*'}));

//routes
app.use(require('./src/routes/index'));

app.listen(4000);
console.log('Server on port 4000');