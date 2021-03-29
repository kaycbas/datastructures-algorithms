// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.
Function.prototype.myCurry = function(numArgs) {
    const args = [];

    const curriedFunc = (...newArgs) => {
        args.push(...newArgs);

        if (args.length === numArgs) {
            return this(...args);
        } else {
            return curriedFunc;
        }
    }
    
    return curriedFunc;
}