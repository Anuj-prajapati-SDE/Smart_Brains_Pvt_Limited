const mongoose = require('mongoose');

async function connetDB() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('database is connected successfully');
};

module.exports = connetDB