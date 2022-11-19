function getPromise() {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            let number = 5;

            if(number === 5) {
                resolve("Thanks !");
            }
            else {
                reject("Sorry !");
            }
            
        }, 1000);
    
    } )
}


async function execute() {
    const something = await getPromise();       // Thanks !
    console.log(something);
}


execute();