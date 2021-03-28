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