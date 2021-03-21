// O(n) time | O(n) space - where n is the number of buildings
function sunsetViews(buildings, direction) {
	const sunnyBuildings = [];
	let maxHeightSoFar = 0;
	
  if (direction === 'WEST') {
		for (let i = 0; i < buildings.length; i++) {
			if (buildings[i] > maxHeightSoFar) sunnyBuildings.push(i);
			maxHeightSoFar = Math.max(maxHeightSoFar, buildings[i]);
		}
	} else {
		for (let i = buildings.length - 1; i >= 0; i--) {
			if (buildings[i] > maxHeightSoFar) sunnyBuildings.unshift(i);
			maxHeightSoFar = Math.max(maxHeightSoFar, buildings[i]);
		}
	}

  return sunnyBuildings;
}