var express = require('express');
var router = express.Router();
const db = require("../model/helper");

router.get('/', async function(req, res, next) {
 try {
    let result = await db(`SELECT * FROM days`);
    let days = result.data;
    if (days.length === 0){
        res.status(404).send({ error: "Day does not exist"})
    } else {
        res.send(days)
    }
 } catch(err) {
    res.status(500).send({ error: err.message });
 }
});

router.post('/', async function(req, res) {
let { date, entry, accomplish } = req.body;

let sql = `
    INSERT INTO days (date, entry, accomplish)
    VALUES ('${date}', '${entry}', '${accomplish}')
    `;

    try {
       await db (sql);
       let result = await db(`SELECT * FROM days`);
       let days = result.data;
       res.status(201).send(days);
    } catch(err) {
       res.status(500).send({ error: err.message });
    }
   });


module.exports = router;