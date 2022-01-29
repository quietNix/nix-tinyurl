const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: () => 1000,
        required: true
    }
});

module.exports = mongoose.model("counter", counterSchema);