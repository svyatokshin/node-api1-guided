// similar to import express from 'express';
const express = require ('express');  // npm i express
const shortid = require('shortid'); // npm i shortid

const server = express();

let hubs = [];

let lessons = [];

server.use(express.json()); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< add this line

server.get('/', (req, res) => {
    res.status(200).json({api: "running..."})
})

// write a /hello endpoint that returns an object like so: { hello: "Web 27" }

server.get('/hello', (req, res) => {
    res.status(200).json({hello: "Web 27"})
})

// write a POST endpoint

server.post('/api/hubs', (req, res) => {
    // axios.post(/api/hubs, data) <--- the data shows up as the req.body on the server
    const hubInfo = req.body;
    
    // validate that the hubInfo is correct before saving
    hubInfo.id = shortid.generate();
    
    hubs.push(hubInfo);

    res.status(201).json(hubInfo);
})

server.get('/api/hubs', (req, res) => {
    res.status(200).json(hubs)
})

// write an endpoint to create Lessons




server.post('/api/lessons', (req, res) => {
    const lessonsInfo = req.body;

    lessonsInfo.id = shortid.generate();

    lessons.push(lessonsInfo);
    
    res.status(201).json(lessonsInfo);
})

server.get('/api/lessons', (req,res) => {
    res.status(200).json(lessons)
})

const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n`)
);
