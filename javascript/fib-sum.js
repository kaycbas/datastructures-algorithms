// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

// O(n) time | O(n) space
function fibsSum(n) {
    const fib = memoFib();
    return fibSumHelper(n, fib);
}

function fibSumHelper(n, fib) {
    if (n <= 2) return n;
    return fibSumHelper(n-1, fib) + fib(n);
}

function memoFib() {
    const memo = {};
    return function fib(n) {
        if (n in memo) return memo[n];
        if (n <= 2) return 1;
        memo[n] = fib(n-1, memo) + fib(n-2, memo);
        return memo[n];
    }
}