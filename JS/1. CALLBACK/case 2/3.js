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


console.log(printText1( () => printText2( () => { return "Juice"; } ) ));;


// line 1
// Juice