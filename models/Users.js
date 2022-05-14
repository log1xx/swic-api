const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 32
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 1024
    },
    wfo: {
        type: String,
        required: true
    },
    acctype: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', UsersSchema)
