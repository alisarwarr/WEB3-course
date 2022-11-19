console.log("line 1");


function printText(callback) {
    setTimeout(() => { 
        callback();
    }, 1000);
}


printText( () => { console.log("Juice"); } );


// line 1
// Juice