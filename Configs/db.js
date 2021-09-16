const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_url = process.env.DATABASE_URL;
    mongoose.connect(DB_url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        //we are connected
        console.log(`Database connected to ${db.name}`)
    })
}

module.exports = dbConnect;