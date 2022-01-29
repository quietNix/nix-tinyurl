const mongoose = require("mongoose");
const urlModel = require("../models/urls");
const base62 = require("base62/lib/ascii");

const createUrl = async (req, res, next) => {
    const { longUrl, counter } = req.body
    const shortUrl = base62.encode(counter.count);
    try {
        const newUrl = await urlModel.create({
            long_url: longUrl,
            short_url: shortUrl
        })
        res.status(201).render("createUrl", { urlAdded: newUrl });
    } catch (e) {
        console.log(e.message);
        res.status(502).send("Try Again");
    }
}

module.exports = createUrl;