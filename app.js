const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Routes
app.get('/', (req, res) => {
    res.send("We are on the home page");
});

app.get('/posts', (req, res) => {
    res.send("We are on the posts page");
});

const clientOptions = {
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true
    }
};


async function run() {
    try {
        // Connect to DB.
        await mongoose.connect(process.env.DB_CONNECTION, clientOptions);

        await mongoose.connection.db.admin().command({
            ping: 1
        });

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        await mongoose.disconnect();
    }
}

run().catch(console.dir);


// How to start listening to the server.
app.listen(3000);