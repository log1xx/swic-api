const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    wfo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    locs: {
        type: String,
        required: true
    }
})