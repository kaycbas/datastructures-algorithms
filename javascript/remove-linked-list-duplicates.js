class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) Time | O(1) Space - where n is the length of the linked list
function removeDuplicatesFromLinkedList(linkedList) {
  let prevNode = linkedList;
	let node = linkedList.next;
	while (node !== null) {
		if (node.value === prevNode.value) {
			prevNode.next = node.next;
		} else {
			prevNode = node;
		}
		node = node.next;	
	}
	return linkedList;
}