// O(n) time | O(1) space
const reverseList = (head) => {
    let prevNode = null;
    let currNode = head;
    
    while (currNode !== null) {
        let tempNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = tempNode;
    }
    
    return prevNode;
};