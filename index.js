const mongoose = require('mongoose');
const app = require('express')();
const PORT = 8080;
require('dotenv/config');

//import routes
const usersRoute = require('./routes/users');
const wfoRoute = require('./routes/wfos');
const alertsRoute = require('./routes/alerts');

app.use('/users', usersRoute);
app.use('/wfos', wfoRoute);
app.use('/alerts', alertsRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => 
    console.log('connected to db')
);

//run web server
app.listen(
    PORT,
    () => console.log(`alive on  http://localhost:${PORT}`)
);
