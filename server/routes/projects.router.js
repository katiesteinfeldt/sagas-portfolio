const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();




router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "projects" WHERE id=$1';
    pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
        console.log('Error completing SELECT projects query', err);
        res.sendStatus(500);
    })
});













module.exports = router;