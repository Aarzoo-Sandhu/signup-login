const express = require('express');
const {connectDatabase} = require('./config/mongo');
const app = express();
require('dotenv').config();

const userRoute = require('./routes/user-route');

app.use(express.json());

// Mount the user routes
app.use('/api/users', userRoute);
app.listen(process.env.PORT, async()=> {
    console.log(`Listen on PORT number ${process.env.PORT}`)

    try {
        await connectDatabase();
        console.log(`Successfully connected`);
    } catch (error) {
        console.log(`Error while connecting: ${error}`)
    }
})