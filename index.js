const receivesAFunction = (callback) => {
    callback();
}

const returnsANamedFunction = () => {
    return function namedFunction() {
        console.log('Hello World');
    }
}

const returnsAnAnonymousFunction = () => {
    return function() {
        console.log('Hello World');
    }
}