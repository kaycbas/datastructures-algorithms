// O(n) time | O(d) space - where n is # of ppl & d is depth
function getLowestCommonManager(topManager, reportOne, reportTwo) {
    const lowestManagerInfo = getLowestManagerInfo(topManager, reportOne, reportTwo);
    return lowestManagerInfo.lowestManager;
}

function getLowestManagerInfo(node, targetOne, targetTwo) {
    let foundCount = 0;

    for (const childNode of node.directReports) {
        let managerInfo = getLowestManagerInfo(childNode, targetOne, targetTwo);
        if (!!managerInfo.lowestManager) return managerInfo;
        foundCount += managerInfo.foundCount;
    }

    if (node === targetOne || node === targetTwo) {
        foundCount++;
    }

    let lowestManager = (foundCount === 2) ? node : null;
    return {
        lowestManager,
        foundCount
    };
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