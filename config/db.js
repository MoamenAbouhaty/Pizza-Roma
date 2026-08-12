const mongoose = require('mongoose');

/**
 * Connects to MongoDB using the URI defined in the environment variables.
 * Exits the process if the connection fails, since the API cannot function without a database.
 */
async function connectDB() {
    // Accept either MONGO_URI or MONGODB_URI so the .env file can use whichever name you prefer.
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

    if (!uri) {
        console.error('Missing MONGO_URI (or MONGODB_URI) in environment variables. Check your .env file.');
        process.exit(1);
    }

    try {
        await mongoose.connect(uri);
        console.log(`MongoDB connected: ${mongoose.connection.host}/${mongoose.connection.name}`);
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;