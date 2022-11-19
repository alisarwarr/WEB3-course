console.log("line 1");


function printText(callback) {
    setTimeout(() => { 
        callback();
    }, 1000);
}


console.log(printText( () => { return "Juice"; } ));


// line 1
// undefined