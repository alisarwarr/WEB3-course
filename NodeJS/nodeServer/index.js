const http = require('http');


const app = http.createServer(function (req, res) {
    res.write("Hello World");
    res.end();
});


const PORT = 5000;


app.listen(PORT);