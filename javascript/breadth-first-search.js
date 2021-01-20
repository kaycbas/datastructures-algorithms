class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(v + e) time | O(v) space
  breadthFirstSearch(array) {
    let queue = [this];
    while (queue.length > 0) {
        const node = queue.pop();
        array.push(node.name);
        for (const child of node.children) {
            queue.unshift(child);
        }
    }
    return array;
  }
}