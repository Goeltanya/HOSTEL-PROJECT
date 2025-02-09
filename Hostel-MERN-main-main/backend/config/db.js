const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace this URL with your actual MongoDB URI
        const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hostel_management';

        // Connect to MongoDB
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,  // Optional, ensures indexes are created
            useFindAndModify: false,  // Avoids using `findAndModify()` methods (deprecated)
        });

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);  // Stop the app if DB connection fails
    }
};

module.exports = connectDB;
