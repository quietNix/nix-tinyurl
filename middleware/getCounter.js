const counterModel = require("../models/counter");

const getCounter=async(req, res, next) =>{
    const counter = await counterModel.findOne({});
    req.body.counter = counter;
    return next();
}

module.exports=getCounter;