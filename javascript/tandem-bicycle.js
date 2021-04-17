// O(nlogn) time | O(1) space
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);

    if (fastest) {
        redShirtSpeeds.reverse();
        blueShirtSpeeds.reverse();
    }

    let sum = 0;
    let count = 0;
    let i = 0;
    let j = 0;

    while (count < redShirtSpeeds.length) {
        sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[j])
        count++;

        if (redShirtSpeeds[i] > blueShirtSpeeds[j]) {
            i++;
            if (!fastest) j++;
        } else {
            j++;
            if (!fastest) i++;
        }
    }

    return sum;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;