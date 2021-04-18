// O(n) time | O(n^2) space
function getLowestCommonManager(topManager, reportOne, reportTwo) {
  let path1 = [];
  path1 = findPath(topManager, reportOne, [], path1); // [node1, node2, etc]

  let path2 = [];
  path2 = findPath(topManager, reportTwo, [], path2); // [node1, node2, etc]

  const commonManagers = [];
  for (let i = 0; i < path1.length; i++) {
    if (path1[i] === path2[i]) commonManagers.push(path1[i]);
  }

  return commonManagers[commonManagers.length - 1];
}

function findPath(topManager, target, currPath, finalPath) {
  if (finalPath.length > 0) return finalPath;

  currPath.push(topManager);

  if (topManager === target) {
    finalPath = [...currPath];
    return finalPath;
  } else {
    for (const report of topManager.directReports) {
      findPath(report, target, [...currPath], finalPath);
    }
  }

  return finalPath;
}

// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}

// Do not edit the line below.
exports.getLowestCommonManager = getLowestCommonManager;

//

function getLowestCommonManager(topManager, reportOne, reportTwo) {

}

// ----

// O(n * l) time | O() space - where n is length of array and l is longest num
function radixSort(array) {
	const longest = getLongestNum(array);
	let currArr = array;
	
	for (let i = 0; i < longest; i++) { // O(length of longest num)
		currArr = countSort(currArr, i); // O(n) n is length of array
	}

  return currArr;
}

function countSort(array, place) {
	const helper = new Array(10).fill(0);
	
	for (let i = 0; i < array.length; i++) {
		const ele = array[i];
		const digit = placeValue(ele, place);
		helper[digit]++;
	}
	
	for (let i = 1; i < array.length; i++) {
		helper[i] += helper[i - 1];
	}
	
	const sorted = new Array(array.length).fill(0);
	
	for (let i = array.length - 1; i >= 0; i--) {
		const ele = array[i];
		const digit = placeValue(ele, place);
		
		const lastIdx = helper[digit] - 1;
		
		sorted[lastIdx] = ele;
		helper[digit]--;
	}
	
	return sorted;
}

function placeValue(num, place) {
	const numStr = num.toString();
	
	if ((place + 1) > numStr.length) return 0;
	
	const numChar = numStr[numStr - 1 - place];
	return Number.parseInt(numChar);
}

function getLongestNum(array) {
	let maxNum = array.reduce((max, ele) => ele > max ? ele : max);
	return maxNum.toString().length;
}

// Do not edit the line below.
exports.radixSort = radixSort;


