const pg = require('pg');
const express = require('express');
const artistRouter = express.Router();

const pool = new pg.Pool({
    database: 'jazzy_sql'
});

artistRouter.get('/', (req, res) => {
    console.log(`In /artist GET`);
    const queryText = 'SELECT * FROM artists ORDER BY year_born DESC;';
    pool.query(queryText)
        .then((dbRes) =>{
        res.send(dbRes.rows);
        })

        .catch((err) =>{
            console.log('GET /artist failed', err);
            res.sendStatus(500);
        })
});

artistRouter.post('/', (req, res) => {
    console.log('req.body is', req.body);
    let queryText = `
    INSERT INTO artists
        ("artist_name", "year_born" )
    VALUES
        ($1,$2)     
    `;

    let queryParams = [
        req.body.artist_name,
        req.body.year_born

    ];
    console.log('queryText is', queryText);
    pool.query(queryText, queryParams)
        .then((dbRes)=> {
        res.sendStatus(201);
        })
        .catch((err)=> {
         console.log('post /artist failed', err);
        res.sendStatus(500);
        })
});

module.exports = artistRouter