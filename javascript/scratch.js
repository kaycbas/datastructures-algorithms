function generateDivTags(numberOfTags) {
	const tags = new Array(numberOfTags).fill('<div>');
	for (let i = 0; i < numberOfTags; i++) {
		tags.push('</div>');
	}
	
	const validPermutations = [];
	calcValidPermutations(tags, [], validPermutations);

  for (let i = 0; i < validPermutations.length; i++) {
    validPermutations[i] = validPermutations[i].join('');
  }
	
  return [...new Set(validPermutations)];
}

function calcValidPermutations(tags, currPermutation, validPermutations) {
  // console.log(currPermutation);
	if (tags.length === 0 && currPermutation.length > 0) {
    // console.log(currPermutation);
		if (validDivPerm(currPermutation)) {
			validPermutations.push(currPermutation);
		}
	}
	
	for (let i = 0; i < tags.length; i++) {
		const newPermutation = currPermutation.concat(tags[i]);
		const newTags = tags.slice(0, i).concat(tags.slice(i + 1));
		calcValidPermutations(newTags, newPermutation, validPermutations)
	}
}

function validDivPerm(array) {
	const openStack = [];
	
	for (const tag of array) {
		if (tag.includes('/')) {
			if (openStack.length === 0) return false;
			openStack.pop();
		} else {
			openStack.push(tag);
		}
	}
	
	return true;
}
// Do not edit the line below.
// exports.generateDivTags = generateDivTags;

const result = generateDivTags(5);
console.log(result);
