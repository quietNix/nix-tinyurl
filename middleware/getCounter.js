const counterModel = require("../models/counter");

const getCounter=async(req, res, next) =>{
    let counter = await counterModel.findOneAndUpdate({}, {$inc: {count: 1}})
    req.body.counter = counter;
    return next();
}

module.exports=getCounter;