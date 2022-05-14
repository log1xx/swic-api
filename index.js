const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

//import routes
const usersRoute = require('./routes/users');
const wfoRoute = require('./routes/wfos');
const alertsRoute = require('./routes/alerts');

//middleware
app.use(express.json());
//middleware routes
app.use('/users', usersRoute);
app.use('/wfos', wfoRoute);
app.use('/alerts', alertsRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => 
    console.log('connected to db')
);

//run web server
app.listen(
    process.env.PORT,
    () => console.log(`alive on  http://localhost:${process.env.PORT}`)
);
