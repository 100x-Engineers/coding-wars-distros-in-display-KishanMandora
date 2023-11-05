const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('<h1>Hello World!!</h1>')
})

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})
