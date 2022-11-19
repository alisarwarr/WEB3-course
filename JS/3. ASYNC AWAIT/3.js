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


function getPromise() {
    return myPromise;
}


async function execute() {
    try {
        const something = await getPromise();
        console.log(something);
    }
    catch(value) {
        console.log(value);                          // Sorry !
    }
}


execute();