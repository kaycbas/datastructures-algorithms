function remove(value) {
    if (!this.contains(value)) return this;
    // if (value === this.value) 

    let parent = this;
    while (parent !== null) {
        if (value < parent.value) {
            if (parent.left.value === value) {
                cut(parent, parent.left, 'left');
            } else {
                parent = parent.left;
            }
        } else if (value > parent.value) {
            if (parent.right.value === value) {
                cut(parent, parent.right, 'right');
            } else {
                parent = parent.right;
            }
        } else {
            break;
        }
    }
    return this;
}

function cut(parent, target, dir) {
    if (target.left === null && target.right === null) {
        parent[dir] = null;
    } else if (target.left === null) {
        parent[dir] = target.right;
    } else if (target.right === null) {
        parent[dir] = target.left;
    } else {
        const min = target.right.min();
        target.value = min;
        target.right.remove(min);
    }
}