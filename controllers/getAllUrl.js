const urls = require("../models/urls");

const getAllUrl = async (req, res, next) => {
    try {
        const allUrls = await urls.find({}).sort({created_at: -1}).limit(50);
        res.status(201).render("listUrls", {allUrls: allUrls})
    } catch (e) {
        if (e.code ==='ERR_HTTP_INVALID_STATUS_CODE')res.status(502).send("Server Not Responding")
        else res.status(502).send("No such Url exists in system");
    }
}

module.exports = getAllUrl;