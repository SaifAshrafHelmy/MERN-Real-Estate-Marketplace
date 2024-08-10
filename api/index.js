import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hii!' });
});

app.listen(PORT, () => {
    console.log(`Express app is listening on ${PORT}`);
});
