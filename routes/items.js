const express = require("express");
const createUrl = require("../controllers/createUrl");
const getUrl = require("../controllers/getUrl");
const getAllUrl = require("../controllers/getAllUrl");
const getCounter = require("../middleware/getCounter");

const router = express.Router();

router.get("/", (req, res)=>{
    res.render("createUrl", {urlAdded: undefined});
})
router.get("/list", getAllUrl)
router.get("/:shortUrl", getUrl)
router.post("/", getCounter, createUrl);

module.exports = router;