// IIFE --> Immediately Invoked function expression
// basically use when we need to execute the function immediately 
// and help us to prevent from global values pollution

// syntax
(function solve(){    //  also called named iife
    console.log("DB Connected")
})();
// if you want to write two iife together you have write semicolumn 

( () =>{   //  simply called iife 
    console.log("wb conneted")
})();

( (name) =>{   //  you can also pass the arguments
    console.log(`My name is ${name}`)
})("ayush")
