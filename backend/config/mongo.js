const mongoose = require('mongoose');

// Connect to MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        throw error;
    } 
}

module.exports = {connectDatabase};
