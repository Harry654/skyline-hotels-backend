const { Schema, model } = require("mongoose");

const roomSchema = Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    password: {
        type: String,
        requried: true,
    },
    pictures: {
        type: [String],
        default: []
    },
    vacant: {
        type: Boolean,
        default: true
    },
    guest_number: {
        type: Number,
        required: true
    }
});

module.exports = model("room", roomSchema);