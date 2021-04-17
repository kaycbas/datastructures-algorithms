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