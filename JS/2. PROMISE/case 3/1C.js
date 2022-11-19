const myPromise1 = new Promise( (resolve, reject) => {

    setTimeout(() => {

        let number = 5;

        if(number === 5) {
            resolve("Thanks1 !");
        }
        else {
            reject("Sorry1 !");
        }
        
    }, 1000);

} )


const myPromise2 = new Promise( (resolve, reject) => {

    setTimeout(() => {

        let number = 2;

        if(number === 5) {
            resolve("Thanks2 !");
        }
        else {
            reject("Sorry2 !");
        }
        
    }, 1000);

} )


Promise.all( [myPromise1, myPromise2] )
.then( (value) => {
    console.log(value);
} )
.catch( (value) => {
    console.log(value);       // Sorry2 !
} )