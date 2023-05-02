const express = require('express');
const mongoose = require('mongoose');

const http = require('http');
const app = express();
const port =process.env.PORT || 9000;


app.use(express.json());
// app.use(cors());

const connection_url = 'mongodb+srv://rishabh0071:F61SECb5wU9BLiwc@cluster0.dixppl2.mongodb.net/TrackIt?retryWrites=true&w=majority';

mongoose.connect(connection_url);

const db = mongoose.connection;
db.once('open', ()=>{
    console.log('Db connection');
})

// api routes
app.get('/', (req,res)=> res.status(200).send('hello world from student'));




// listen
app.listen(port, ()=>console.log(`Listening on localhost:${port}`));