const urls = require("../models/urls");

const getAllUrl = async (req, res, next) => {
    try {
        const allUrls = await urls.find({}).limit(50);
        res.status(201).render("listUrls", {allUrls: allUrls})
        // res.status(201).send(allUrls);
    } catch (e) {
        if (e.code ==='ERR_HTTP_INVALID_STATUS_CODE')res.status(502).send("Server Not Responding")
        else res.status(502).send("No such Url exists in system");
    }
}

module.exports = getAllUrl;