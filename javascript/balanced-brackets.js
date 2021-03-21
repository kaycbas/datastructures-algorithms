// O(n) time | O(n) space - where n is the length of the string
function balancedBrackets(string) {
	const brackets = {'(': ')', '[': ']', '{': '}'};
	const closingBrackets = Object.values(brackets);
	let stack = [];

	for (const char of string) {
		if (char in brackets) {
			stack.push(char);
		} else if (closingBrackets.includes(char)) {
			const stackTop = stack[stack.length - 1];
			if (brackets[stackTop] !== char) return false;
			stack.pop();
		}
	}
	
	return stack.length === 0;
}