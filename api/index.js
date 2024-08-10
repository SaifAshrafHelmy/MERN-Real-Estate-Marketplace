import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('Connected to MongoDB successfully.');
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB', err);
    });

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hii!' });
});

app.listen(PORT, () => {
    console.log(`Express app is listening on ${PORT}`);
});
