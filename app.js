const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
    res.send("We are on the home page");
});

// Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

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

        // Test the connection by pinging the MongoDB server.
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        await mongoose.disconnect();
    }
}

// Run the function to test the connection.
run().catch(console.error);

// Start listening to the server.
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
