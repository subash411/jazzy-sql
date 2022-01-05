const pg = require('pg');
const express = require('express');
const songRouter = express.Router();

const pool = new pg.Pool({
    database: 'jazzy_sql'
});

songRouter.get('/', (req, res) => {
    console.log(`In /song GET`);
    const queryText = 'SELECT * FROM songs ORDER BY title;';
    pool.query(queryText)
        .then((dbRes) =>{
            res.send(dbRes.rows);
        })

        .catch((err) =>{
            console.log('get /song failed', err);
            res.sendStatus(500);
        })
});

songRouter.post('/', (req, res) => {
    console.log('req.body is', req.body);
    let queryText = `
    INSERT INTO songs
        ("title", "length", "release")
    VALUES
        ($1,$2,$3)
        
    `;
    let queryParams = [
        req.body.title,
        req.body.length,
        req.body.release

    ];
    console.log('queryText is', queryText);
    pool.query(queryText, queryParams)
        .then((dbRes)=> {
            res.sendStatus(201);
        })
        .catch((err)=> {
            console.log('post /song failed', err);
            res.sendStatus(500);
        })
});

module.exports = songRouter;