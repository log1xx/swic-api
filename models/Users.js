const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    wfo: {
        type: String,
        required: true
    },
    acctype: {
        type: String,
        required: true
    }
})