/**
 * 22. Generate Parentheses
 */
// var generateParenthesis = function(n) {
//     const opening = "("
//     const closing = ")"
    
//     const output = []

//     const generate = (curr,open,close) => {
//         if(curr.length == 2*n) {
//             output.push(curr)
//             return;
//         }

//         if(open < n)
//             generate(curr+"(", open+1, close)

//         if(close < open)
//             generate(curr+")", open, close +1)
//     }

//     generate("",0,0)

//     return output;
// };

// const n = 3

// console.log(generateParenthesis(3))

/**
 * 39. Combination Sum
 */

// var combinationSum = function(candidates, target) {
//     const result = []

//     const combination = (curr,sum,start) => {
//         if(sum == target) {
//             result.push([...curr])
//             return
//         }

//         if(sum > target) return;

//         for(let i=start; i< candidates.length;i++){
//             curr.push(candidates[i])
//             combination(curr,sum+candidates[i],i)
//             curr.pop()

//         }
//     }

//     combination([],0,0)
//     return result;
// };

// const candidates = [2,3,6,7], target = 7
// console.log(combinationSum(candidates, target))

/**
 * 79. Word Search
 */


// var exist = function(board, word) {
    
//     const rows = board.length;
//     const cols = board[0].length;
//     const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

//     const dfs = (index,row,col) => {
//         if(row < 0 || col < 0
//           || row >= rows || col>= cols
//           || board[row][col] != word[index]
//           || visited[row][col]
//         ) return false;

//         if(index == word.length-1) return true;

//         visited[row][col] = true

//         const found = 
//             dfs(index+1, row+1, col)
//             || dfs(index+1, row, col+1)
//             || dfs(index+1, row-1, col)
//             || dfs(index+1, row, col-1)
        
//         visited[row][col]= false

//         return found;
//     }

//     let result = false;
//     for(let i=0;i<rows;i++){
//         for(let j=0;j<cols;j++){
//            result = result || dfs(0, i, j)
//         }
//     }

//     return result;

// };


// const board = [["A","B","C","E"],
//                 ["S","F","C","S"],
//                 ["A","D","E","E"]], word = "ABCCED"

// console.log(exist(board, word))


/**
 * 17. Letter Combinations of a Phone Number
 */

// var letterCombinations = function(digits) {
//     if(digits.length == 0) return []

//     const set = [[],[], ['a','b','c'],
//                          ['d','e','f'],
//                          ['g','h','i'],
//                          ['j','k','l'],
//                          ['m','n','o'],
//                          ['p','q','r','s'],
//                          ['t','u','v'], 
//                          ['w','x','y','z'],
//                         ]

//     const result = []

//     const dfs = (index, curr) => {
//         if(curr.length == digits.length){
//             result.push(curr)
//             return;
//         }

//         let currentDigit = digits[index]
        
//         for(let ch of set[currentDigit]){
//             dfs(index+1, curr+ch)
//         }
//     }

//     dfs(0,"")

//     return result;
// };

// const digits = "23"
// console.log(letterCombinations(digits))

/**
 * 51. N-Queens
 */

// var solveNQueens = function(n) {
//     const result = [];
//     const board = Array.from({ length: n }, () => Array(n).fill('.'));
//     const cols = new Set();
//     const diag1 = new Set(); // row - col
//     const diag2 = new Set(); // row + col

//     const dfs = (row) => {

//         if(n == row) {
//             result.push(board.map(row => row.join('')))
//             return;
//         }

//         for (let col = 0; col < n; col++) {
//             if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

//             board[row][col] = 'Q';
//             cols.add(col);
//             diag1.add(row - col);
//             diag2.add(row + col);

//             dfs(row + 1);

//             // Backtrack
//             board[row][col] = '.';
//             cols.delete(col);
//             diag1.delete(row - col);
//             diag2.delete(row + col);

//     } 

// }

//     dfs(0)

//     return result
// };


// const n = 4
// console.log(solveNQueens(4))



