class MinMaxStack {
	constructor() {
		this.stack = [];
	}
	
	// O(1) time | O(1) space
  peek() {
		return this.stack[this.stack.length-1].number;
  }

	// O(1) time | O(1) space
  pop() {
		return this.stack.pop().number;
  }
	
	// O(1) time | O(1) space
	fullPeek() {
		return this.stack[this.stack.length-1];
	}

	// O(1) time | O(1) space
  push(number) {
		const top = this.fullPeek();
		let min = number;
		let max = number;
		if (top) {
			if (top.min < number) min = top.min;
			if (top.max > number) max = top.max;
		} else {
			min = max = number;
		}
		this.stack.push({ number, min, max });
  }

	// O(1) time | O(1) space
  getMin() {
    const top = this.fullPeek();
		return top.min;
  }

	// O(1) time | O(1) space
  getMax() {
    const top = this.fullPeek();
		return top.max;
  }
}

exports.MinMaxStack = MinMaxStack;