const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    long_url: {
        type: String,
        lowercase: true,
        required: true
    },
    short_url:{
        type: String,
        required: true,
        index: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        required: true
    }
});

module.exports = mongoose.model("url", urlSchema);