const express = require('express');
const db = require('./data/db.js');
const server=express();

server.get('/', (req, res)=>{
    res.send('Hello Web XXVII');
});

server.get('/now', (req, res) =>{
const now = new Date().toISOString();
    res.send(now);
});

//CRUD
server.post('/hubs', (req, res)=> {
    const hubInfo = req.body;
    console.log('hub info', hubInfo)
})

server.get('/hubs',(req, res)=>{

});

server.get('/hubs', (req, res)=>{
db.hubs.find().then(hubs =>{
    res.json(hubs); res.status(200).json(hubs);
}).catch(err=>{
    //handle
})
});

server.listen(4000, ()=>{
    console.log('\n** APT up and running on port 4K**')
});