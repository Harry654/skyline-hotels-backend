const { Schema, model } = require("mongoose");

const reviewSchema = Schema({
    used_id: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    review_caption: {
        type: String,
        required: true
    },
    review_content: {
        type: String,
        required: true
    }
});

module.exports = model("Review", reviewSchema);