class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // O(logn) Time | O(1) Space
    insert(value) {
        if (value < this.value) {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new BST(value);
            }
        } else {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new BST(value);
            }
        }
        return this;
    }

    // O(logn) Time | O(1) Space
    contains(value) {
        if (value < this.value) {
            if (!this.left) return false;
            return this.left.contains(value);
        } else if (value > this.value) {
            if (!this.right) return false;
            return this.right.contains(value);
        } else {
            return true;
        }
    }

    // Average: O(logn) Time | O(logn) Space
    // Worst: O(logn) Time | O(logn) Space
    remove(value, parent = null) {
        if (value < this.value) {
            if (!this.left) return;
            this.left.remove(value, this);
        } else if (value > this.value) {
            if (!this.right) return;
            this.right.remove(value, this);
        } else {
            if (!parent) { // root node
                if (this.left && this.right) {
                    this.value = this.right.min();
                    this.right.remove(this.value, this);
                } else if (this.left) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {
                    // single node tree, no action
                }
            } else { // not root node
                if (this.left && this.right) {
                    this.value = this.right.min();
                    this.right.remove(this.value, this);
                } else if (this.left) {
                    parent.left === this ? parent.left = this.left : parent.right = this.left;
                } else if (this.right) {
                    parent.left === this ? parent.left = this.right : parent.right = this.right;
                } else {
                    parent.left === this ? parent.left = null : parent.right = null;
                }
            }
        }
        return this;
    }

    // O(logn) Time | O(1) Space
    min() {
        if (this.left) {
            return this.left.min();
        } else {
            return this.value;
        }
    }
}