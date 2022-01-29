const urls = require("../models/urls");

const getUrl = async (req, res, next) => {
    const { shortUrl } = req.params;
    try {
        const url = await urls.findOne({ short_url: shortUrl })
        res.redirect(url.long_url);
    } catch (e) {
        if (e.code === 'ERR_HTTP_INVALID_STATUS_CODE') res.status(502).send("Server Not Responding")
        else res.status(502).send("No such Url exists in system");
    }
}

module.exports = getUrl;