const express = require('express');
const { MongoClient } = require('mongodb');
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.PORT || 5000;

// middleWare 
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.bonkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/' , (req , res) => {
    res.send('Running Dentist Crud Server')
});

app.listen(port , () => {
    console.log(`Running server on port ${port}`);
})