// O(n) time | O(c) space - where n is the length of the document and c is the num chars
function generateDocument(characters, document) {
	const counts = {};
	for (const char of characters) { counts[char] = ++counts[char] || 1 }
	for (const char of document) {
		if (!counts[char]) return false;
		counts[char]--;
	}
  return true;
}