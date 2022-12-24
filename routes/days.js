var express = require('express');
var router = express.Router();
const db = require("../model/helper");

//Get all days from diary
router.get('/', async function(req, res, next) {
 try {
    let result = await db(`SELECT * FROM days`);
    let days = result.data;
    if (days.length === 0){
        res.status(404).send({ error: "Day not found"})
    } else {
        res.send(days)
    }
 } catch(err) {
    res.status(500).send({ error: err.message });
 }
});


//Add a day to diary
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

//put edit entry
router.put('/:id', async function(req, res){
let id = req.params.id;
let { entry, accomplish } = req.body;

try { 
    let result = await db (`SELECT * FROM days WHERE id=${id}`);
    if (result.data.length === 0){
        res.status(404).send({ error: "Day not found"})
    } else {
        await db(`UPDATE days SET entry='${entry}', accomplish='${accomplish}' WHERE id=${id}`);
        let result = await db(`SELECT * FROM days WHERE id=${id}`);
        let days = result.data;
        res.status(201).send(days);
    }
} catch(err){
    res.status(500).send({ error: err.message});
}
});

//delete diary entry
router.delete('/:id', async function (req, res){
let id = req.params.id;

try {
    let result = await db(`SELECT * FROM days WHERE id=${id}`);
    if ( result.data.length === 0){
        res.status(404).send({ error: "Day not found"})
    } else {
        await db(`DELETE FROM days WHERE id=${id}`);
        let result = await db(`SELECT * FROM days`);
        let days = result.data;
        res.status(201).send(days);
    }
} catch(err) {
    res.status(500).send({ error: err.message });
}
});


module.exports = router;