const myPromise = new Promise( (resolve, reject) => {

    setTimeout(() => {

        let number = 2;

        if(number === 5) {
            resolve("Thanks !");
        }
        else {
            reject("Sorry !");
        }
        
    }, 1000);

} )


myPromise
.then( (value) => {
    console.log(value);
} )
.catch( (value) => {
    console.log(value);
} )


// Sorry !