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

        let number = 5;

        if(number === 5) {
            resolve("Thanks2 !");
        }
        else {
            reject("Sorry2 !");
        }
        
    }, 1000);

} )


myPromise1
.then( (value) => {
    console.log(value);       // Thanks !

    myPromise2
    .then( (value) => {
        console.log(value);   // Thanks !
    } ) 
} )