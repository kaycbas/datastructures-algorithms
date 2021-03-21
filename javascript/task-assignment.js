// O(nlogn) time | O(n) space - where n is the number of tasks
function taskAssignment(k, tasks) {
	for (let i = 0; i < tasks.length; i++) {
		tasks[i] = { val: tasks[i], idx: i };
	}
  tasks.sort((a, b) => a.val - b.val);
	
	const pairs = [];
	let start = 0;
	let end = tasks.length - 1;
	
	while (start < end) {
		const task1 = tasks[start].idx;
		const task2 = tasks[end].idx;
		pairs.push([task1, task2]);
		start++;
		end--;
	}
  return pairs;
}