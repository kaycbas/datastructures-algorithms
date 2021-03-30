// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.
Array.prototype.myEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        const ele = this[i];
        cb(ele);
    }
}

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.
Array.prototype.myReduce = function(cb, acc) {
    const arr = this.slice();
    if (acc === undefined) acc = arr.shift();

    arr.myEach((el) => {
        acc = cb(acc, el);
    });
    
    return acc;
}

// Write an `Array.prototype.myMap(callback, acc)` method
Array.prototype.myMap = function(cb) {
    const mapped = [];

    arr.myEach((el) => {
        mapped.push(cb(el));
    });
    
    return mapped;
}

// Write an `Array.prototype.myJoin(separator)` method, which joins the elements
// of an array into a string. If an argument is provided to `myJoin`, use that
// between each element. Otherwise, use an empty string.
// Do NOT call the built-in `Array.prototype.join` method.
// ex.
// [1, 2, 3].myJoin() => '123'
// [1, 2, 3].myJoin('$') => '1$2$3'
Array.prototype.myJoin = function(seperator = '') {
    return this.reduce((str, ele, idx) => {
        return (idx === 0) ? str + ele : str + seperator + ele;
    }, '');
}

// Write an `Array.prototype.myEvery(callback)` method that returns true 
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.
Array.prototype.myEvery = function(cb) {
    let isEvery = true;
    this.myEach(el => {
        if (!cb(el)) isEvery = false;
    });
    return isEvery;
}