const express = require('express');

const app = express();

const port = process.argv[2] || 3000;

app.get('/', (req, res) => {
    res.send(`Hello Serving at port : ${port}`);
});

app.listen(port, () => {

    console.log('listening at port ',port);

})