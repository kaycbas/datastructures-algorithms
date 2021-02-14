// O(n) Time || O(k) Space - where n is the number of competitions and k is the number of teams
function tournamentWinner(competitions, results) {
  const scores = {};
	
	for (let i = 0; i < results.length; i++) {
		const winner = results[i] === 1 ? competitions[i][0] : competitions[i][1];
		scores[winner] = ++scores[winner] || 1;
	}
	
	let maxScore = 0;
	let winner;
	for (let team in scores) {
		if (scores[team] > maxScore) {
			winner = team;
			maxScore = scores[team];
		}
	}
	
  return winner;
}