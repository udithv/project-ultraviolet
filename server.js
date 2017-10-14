const express = require('express');

const app = express();

const port = process.argv[2] || 3000;
const workDir = process.cwd();

app.get('/', (req, res) => {
    res.send(`Hello Serving at port : ${port} in directory: ${workDir}`);
});

app.listen(port, () => {

    console.log('listening at port ',port);

})