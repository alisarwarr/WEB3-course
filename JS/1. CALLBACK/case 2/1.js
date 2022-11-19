console.log("line 1");


function printText() {
    setTimeout(() => { 
        return "Juice";
    }, 1000);
}


console.log(printText());


// line 1
// undefined