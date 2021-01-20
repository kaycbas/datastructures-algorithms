class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node);
    }

    setTail(node) {
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertAfter(this.tail, node);
    }

    insertBefore(node, nodeToInsert) {
        if (!nodeToInsert) return;
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.prev = node.prev;
        nodeToInsert.next = node;
        if (node.prev === null) {
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }
        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeToInsert) {
        if (!nodeToInsert) return;
        if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
        this.remove(nodeToInsert);
        nodeToInsert.next = node.next;
        nodeToInsert.prev = node;
        if (node.next === null) {
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    insertAtPosition(position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let cur = this.head;
        let pos = 1;
        while (cur !== null) {
            if (pos === position) {
                this.insertBefore(cur, nodeToInsert);
                break;
            }
            cur = cur.next;
            pos++;
        }
        if (position > pos) this.insertAfter(this.tail, nodeToInsert);
    }

    removeNodesWithValue(value) {
        let cur = this.head;
        while (cur !== null) {
            if (cur.value === value) {
                this.remove(cur);
            }
            cur = cur.next;
        }
    }

    remove(node) {
        if (!node) return;
        if (this.head === node) this.head = this.head.next;
        if (this.tail === node) this.tail = this.tail.prev;
        if (node.prev !== null) node.prev.next = node.next;
        if (node.next !== null) node.next.prev = node.prev;
    }

    containsNodeWithValue(value) {
        let cur = this.head;
        while (cur !== null) {
            if (cur.value === value) return true;
            cur = cur.next;
        }
        return false;
    }
}