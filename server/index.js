const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        const fakeDb = new FakeDb();
        console.log('MongoDB Connected')
        fakeDb.initDb();
    }
).catch(err => console.error('MongoDB connection error:', err));

const app = express()

app.use('/api/v1/products', productRoutes)

const PORT = process.env.PORT || '3001'

app.listen('3001', function () {
    console.log('I am running!')
})


// npm install mongodb@3.7

//   mongodb+srv://ryushin0714:<db_password>@cluster0.ycna047.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0