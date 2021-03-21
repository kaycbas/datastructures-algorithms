class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

	// O(n^2) time | O(n^2) space - where n is the length of the string
  populateSuffixTrieFrom(string) {
    const chars = string.split('');
		
		for (let i = 0; i < chars.length; i++) {
			let node = this.root;
			for (let j = i; j < chars.length; j++) {
				const char = chars[j];
				if (!node[char]) {
					node[char] = {};
				}
				node = node[char];
				if (j === chars.length - 1) node['*'] = true;
			}
		}
  }

	// O(m) time | O(1) space - where m is the length of the string
  contains(string) {
    let node = this.root;
		for (const char of string) {
			if (!node[char]) return false;
			node = node[char];
		}
		return !!node['*'];
  }
}