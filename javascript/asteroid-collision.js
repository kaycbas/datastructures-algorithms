// Leetcode: https://leetcode.com/problems/asteroid-collision/
// O(n) Time | O(n) Space
const asteroidCollision = function(asteroids) {
    let stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        const currAst = asteroids[i];
        
        if (stack.length === 0) {
            stack.push(currAst);
            continue;
        }
    
        let stackAst = stack[stack.length - 1];
        
        if (currAst < 0 && stackAst > 0) {
            while (currAst < 0 && stackAst > 0) {
              if (Math.abs(currAst) > Math.abs(stackAst)) {
                stack.pop();
                if (stack.length === 0 || stack[stack.length - 1] < 0) stack.push(currAst);
              } else if (Math.abs(currAst) < Math.abs(stackAst)) {
                  break;
              } else {
                  stack.pop();
                  break;
              }
              stackAst = stack[stack.length - 1];
            }
        } else {
            stack.push(currAst);
        }
    }
    return stack;
};