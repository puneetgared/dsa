/**
 * least common ancestor
 */

// const leastCommon = (root, p,q) => {
//     if(root == null) return;

//     if(root == p) return root;
//     if(root == q) return root;

//     const left = leastCommon(root.left, p, q)
//     const right = leastCommon(root.right, p, q)

//     if(left && right ) return root;
//     return left || right
// }


/**
 * 200. Number of Islands
 */

// var numIslands = function(grid) {
//     let m = grid.length;
//     let n = grid[0].length;

//     const visited = Array.from({length: m}, ()=> Array(n).fill(0))
//     console.log(visited)
    
//     let islandCount = 0
//     for(let row=0;row<m;row++){
//         for(let col=0;col<n;col++){
//             if(!visited[row][col] && grid[row][col] == "1"){
//                 dfs(row,col,m,n,visited,grid)
//                 islandCount ++;
//             }

//         }
//     }

//     return islandCount;
// };

// const dfs = (row,col,rowLength,colLength, visited, grid) => {
//     if(row < 0 || row >= rowLength
//         || col < 0 || col >= colLength
//         || visited[row][col]
//         || grid[row][col] == "0" 
//     ) {
//         return;
//     }

//     visited[row][col] = 1

//     dfs(row+1,col,rowLength,colLength,visited, grid)
//     dfs(row,col+1,rowLength,colLength,visited, grid)
//     dfs(row-1,col,rowLength,colLength,visited, grid)
//     dfs(row,col-1,rowLength,colLength,visited, grid)

// }

// const grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]

// console.log(numIslands(grid))


/**
 * Validate Binary Search Tree
 */


// var isValidBST = function(root) {
//    if(root == null) return true;

//    return validate(root, -Infinity, Infinity)
// };


// let validate = (root, min, max) => {
    
//    if(root == null) return true

//    const isValid =  validate(root.left, min,root.val) &&
//          validate(root.right, root.val, max)


//    return isValid && min < root.val && root.val < max;
     
// }