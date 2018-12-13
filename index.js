const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'bye'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);