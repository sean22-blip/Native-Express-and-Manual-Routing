const express = require('express');
const app = express();
const port = 8000;


function validating(req, res, next){
    const {minCredits, maxCredits} = req.query;
if(minCredits !== undefined &&  maxCredits != undefined){
    console.log("Valid!");
}
if(minCredits > maxCredits){
    return res.status(400).json({error: "404 error!"})
}
next();
}
module.exports = validating;
