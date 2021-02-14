// O(nlogn) Time | O(1) Space - where n is the number of students
function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a, b) => a - b);
	blueShirtHeights.sort((a, b) => a - b);
	
	let frontRow = redShirtHeights[0] < blueShirtHeights[0] ? redShirtHeights : blueShirtHeights;
	let backRow = redShirtHeights[0] < blueShirtHeights[0] ? blueShirtHeights : redShirtHeights;
	
	for (let i = 0; i < backRow.length; i++) {
		if (frontRow[i] >= backRow[i]) return false;
	}
	
  return true;
}