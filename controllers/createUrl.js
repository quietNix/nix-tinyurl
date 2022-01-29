const mongoose = require("mongoose");
const urlModel = require("../models/urls");
const base62 = require("base62/lib/ascii");

const createUrl = async (req, res, next) => {
    const { longUrl, counter } = req.body
    const shortUrl = base62.encode(counter.count);
    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        const newUrl = await urlModel.create({
            long_url: longUrl,
            short_url: shortUrl
        })
        counter.count++;
        await counter.save();

        await session.commitTransaction();
        await session.endSession();
        res.status(201).render("createUrl", { urlAdded: newUrl });
        // res.status(201).send({newUrl});
    } catch (e) {
        console.log(e.message);
        await session.abortTransaction();
        await session.endSession();
        res.status(502).send("Try Again");
    }
}

module.exports = createUrl;