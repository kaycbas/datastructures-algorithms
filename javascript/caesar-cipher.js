// O(n) Time | O(n) Space
function caesarCipherEncryptor(string, key) {
	let encrypted = [];
	for (const ch of string) { 
		const newCh = cipher(ch, key); 
		encrypted.push(newCh);
	}
	return encrypted.join(''); 
}

const cipher = (ch, key) => {
	const alpha = 'abcdefghijklmnopqrstuvwxyz';
	let idx = alpha.indexOf(ch);
	idx = (idx + key) % 26;
	return alpha[idx];
}