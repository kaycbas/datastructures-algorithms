// O(n) Time | O(n) Space
function runLengthEncoding(str) {
  const encoded = [];
	let run = [str[0]];
	for (let i = 1; i < str.length; i++) {
		if (str[i] === run[0] && run.length < 9) {
			run.push(str[i]);
		} else {
			encoded.push(run.length + run[0]);
			run = [str[i]];
		}
	}
	encoded.push(run.length + run[0]);
	return encoded.join('');
}
