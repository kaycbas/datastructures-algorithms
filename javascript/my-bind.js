// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
Function.prototype.myBind = function(context, ...bindArgs) {
    return (...callArgs) => (this.call(context, ...bindArgs, ...callArgs));
}