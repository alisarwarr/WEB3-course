new Promise( (resolve, reject) => {

    setTimeout(() => {

        let number = 5;

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


// Thanks !