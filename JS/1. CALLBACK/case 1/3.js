console.log("line 1");


function printText1(callback) {
    setTimeout(() => { 
        callback();
    }, 1000);
}


function printText2(callback) {
    setTimeout(() => { 
        callback();
    }, 1000);
}


printText1( () => printText2( () => { console.log("Juice"); } ) );


// line 1
// Juice