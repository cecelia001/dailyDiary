var express = require('express');
var router = express.Router();
const db = require("../model/helper");

router.get('/', async function(req, res, next) {
 try {
    let result = await db(`SELECT * FROM days`);
    let days = result.data;
    if (days.length === 0){
        res.status(404).send({ error: "yooooo"})
    } else {
        res.send(days)
    }
 } catch(err) {
    res.status(500).send({ error: err.message });
 }
});


module.exports = router;