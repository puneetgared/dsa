/**
 * 200. Number of Islands
 */

// var numIslands = function(grid) {
//     let rowLength = grid.length;
//     let colLength = grid[0].length;

//     let visited = Array.from({length: rowLength}, ()=> Array(colLength).fill(0))

//     let islandCount = 0;

//     for(let row=0;row<rowLength;row++){
//         for(let col=0;col<colLength;col++){
//             if(!visited[row][col] && grid[row][col] == "1"){
//                 dfs(grid,row,col,visited)
//                 islandCount++;
//             }
//         }
//     }

//     return islandCount;
// };

// let dfs = (grid, row,col, visited) => {

//     if(row > grid.length-1 
//         || col > grid[0].length-1
//         || row < 0
//         || col < 0
//         || visited[row][col]
//         || grid[row][col] == "0") return;

//     visited[row][col] = 1

//         dfs(grid, row,col+1,visited)  //Side col visit
//         dfs(grid, row+1,col, visited)  // Row visit
//         dfs(grid, row,col-1,visited)  //Side col visit
//         dfs(grid, row-1,col, visited)  // Row visit
// }

// const grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]

// console.log(numIslands(grid))


// function TreeNode(val, left, right) {
//       this.val = (val===undefined ? 0 : val)
//       this.left = (left===undefined ? null : left)
//      this.right = (right===undefined ? null : right)
//  }

/**
 * Validate Binary Search Tree
 */

// var isValidBST = function(root) {
//    if(root == null) return true;

//    return validate(root, -Infinity, Infinity)
// };


// let validate = (root, min, max) => {
    
//     if(root == null) return true;
//     if(root.val <= min || root.val  >= max) return false;


//     return validate(root.left, min, root.val)
//                     && validate(root.right, root.val, max)
     
// }


/**
 * 207. Course Schedule
 * DAG 
 */

// var canFinish = function(numCourses, prerequisites) {
//     const graph = Array.from({ length: numCourses }, () => []);

//     for([course,dependency] of prerequisites) {
//         graph[dependency].push(course)
//     }

//     const visited = new Array(numCourses).fill(0)
//     console.log(graph)

//     for (let i = 0; i < numCourses; i++) {
//         if(visited[i] == 0 && dfsCycle(graph,i,visited)) return false
//     }

//     return true;
// };


// const dfsCycle = (graph,node,visited) => {
//     if(visited[node] == 1) return true;   //Cycle Detected
//     if(visited[node] == 2 ) return false;   // Already visited

//     visited[node] = 1

//     for(let neigbour of graph[node]){
//         if(dfsCycle(graph,neigbour,visited)) return true
//     }

//     visited[node] = 2

//     return false;

// }

// const numCourses = 2, prerequisites = [[1,0]]
// const numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]]
// const numCourses = 3, prerequisites = [[2,1],[1,0]]

// console.log(canFinish(numCourses,prerequisites))


/**
 * 133. Clone Graph
 */

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

// var cloneGraph = function(node) {
//     if (!node) return null;  // 🔐 Prevents null access
    
//     const map = new Map()

//     const dfs = (node) => {
//        if(map.has(node)) return map.get(node)
       
//         const copy = new _Node(node.val)
//         map.set(node, copy)

//         for(let neigbour of node.neighbors){
//             const copyNeibour = dfs(neigbour)
//             copy.neighbors.push(copyNeibour)
//         }

//         return copy;
//     }

//     return dfs(node)

// };


/**
 * 
 * 102. Binary Tree Level Order Traversal
 */
// var levelOrder = function(root) {
//     if(root == null) return []
//     let queue = [root]
//     let output = []
//     while(queue.length > 0){
        
//         let nodeCount = queue.length;
//         let arr = []
//         while(nodeCount > 0){
//             const node = queue.shift();
//             arr.push(node.val)
//             if(node.left != null) queue.push(node.left)
//             if(node.right != null) queue.push(node.right)
//             nodeCount--
//         }

//         output.push(arr)
//     }

//     return output
// };

/**
 * 236. Lowest Common Ancestor of a Binary Tree
 */

// var lowestCommonAncestor = function(root, p, q) {
//     if(root == null) return root;

//     if(root.val == p.val) return root;
//     if(root.val == q.val) return root;
//     let left = lowestCommonAncestor(root.left, p, q)
//     let right = lowestCommonAncestor(root.right, p, q)

//     if(left && right) return root;
//     return left || right
// };


/**
 * 543. Diameter of Binary Tree
 */

// var diameterOfBinaryTree = function(root) {
//     let max = 0

//     const depth = (root) => {
//         if(!root) return 0;

//         let left = depth(root.left)
//         let right = depth(root.right)

//          max = Math.max(max, left + right)
//         return Math.max(left,right) + 1
//     }
//     depth(root)
//     return max;
// };

/**
 * 100. Same Tree
 */

// var isSameTree = function(p, q) {
    
//     if(p == null &&  q == null) return true;
//     if(p == null || q == null) return false;

//     return p.val == q.val
//          && isSameTree(p.left, q.left)
//          && isSameTree(p.right , q.right)
// };

/**
 * 104. Maximum Depth of Binary Tree
 */

// var maxDepth = function(root) {
//     if(root == null) return 0;

//     let max = 1

//     const depth = (root,dept) => {
//         if(!root) return;

//         depth(root.left,dept+1);
//         depth(root.right, dept+1);

//        max =  Math.max(dept, max)
//     }

//     depth(root, 1)
    
//     return max;
// };

