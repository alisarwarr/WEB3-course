new Promise( (resolve, reject) => {

    setTimeout(() => {

        let number = 2;

        if(number === 5) {
            resolve();
        }
        else {
            reject();
        }
        
    }, 1000);

} )
.then( () => {
    console.log("Thanks !");
} )
.catch( () => {
    console.log("Sorry !");
} )


// Sorry !