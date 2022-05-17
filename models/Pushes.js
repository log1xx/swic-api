const mongoose = require('mongoose');

const PushesSchema = mongoose.Schema({
    url: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('Pushes', PushesSchema);
