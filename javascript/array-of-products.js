// O(n*2) Time | O(n) Space - where n is the length of the input array
function arrayOfProducts(array) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if (j !== i) product *= array[j];
        }
        output.push(product);
    }
    return output;
}