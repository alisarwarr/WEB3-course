import express from 'express';


const app = express();


app.get("/", function(req, res) {
    res.send("Hello World");
});


const PORT = 5000;


app.listen(PORT, function() {
    console.log("Server Runs on PORT " + PORT);
});