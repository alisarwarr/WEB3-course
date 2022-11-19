const fs = require('fs');


fs.readFile("guide.txt", 'utf8', function(error, data) {
    if(error) {
        throw error;
    }

    console.log("text file data is : " + data);
});