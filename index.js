const cors = require("cors");
const { MongoClient } = require('mongodb');
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.PORT || 5000;

// middleWare 
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bonkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
        const database = client.db('doctors_portal');
        const appointmentsCollection = database.collection('appointments');

        app.post('/appointments', async (req , res) => {
            // m 
        })
    }
    finally{
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/' , (req , res) => {
    res.send('Running Dentist Crud Server')
});

app.listen(port , () => {
    console.log(`Running server on port ${port}`);
})