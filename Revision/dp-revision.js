/**
 * 
 * ------------------------------------------------------
 * 
 * REVISION
 * 
 * ------------------------------------------------------
 */


/*
*      
*/
// var coinChange = function(coins, amount) {
//     const dp = new Array(amount+1).fill(Infinity)
//     dp[0] = 0

//     for(let i=1;i<=amount;i++){
//         for(let coin of coins){
//             const remain = i - coin
//             if(remain < 0) continue;
//             dp[i] = Math.min(dp[remain]+1, dp[i])
//         }
//     }
//     dp
//     return dp[amount]
// };

// const coins = [1], amount = 11
// console.log(coinChange(coins, 11))

/**
 * 518. Coin Change II
 */

// var change = function(amount, coins) {
//     const dp = new Array(amount+1).fill(0)
//     dp[0] = 1   

//     for(let coin of coins) {
//         for(let i=coin;i<=amount;i++){
//             const remain = i-coin;
//             if(remain < 0) continue;

//             dp[i] = dp[remain] + dp[i] 
//         }
//     }
//     dp
//     return dp[amount]
// };

// const coins = [1,2,5], amount = 11
// console.log(change(11, coins))   


/**
 * 62. Unique Paths
 */

// var uniquePaths = function(m, n) {
    
//     const dp = Array.from({length: m}, ()=> Array(n).fill(0))

//     for(let i=0;i<m;i++){
//         dp[i][0] = 1
//     }

//     for(let i=0;i<n;i++){
//         dp[0][i] = 1
//     }

//     for(let i=1;i<m;i++){
//         for(j=1;j<n;j++){
//             dp[i][j] = dp[i-1][j] + dp[i][j-1]
//         }
//     }
//     dp
//     return dp[m-1][n-1]
// };

// const m = 3, n = 7
// console.log(uniquePaths(m,n))


/**
 * 
 */

// const longestCommonSubsequence = (text1, text2) => {

//     const dp = Array.from({length: text1.length+1}, ()=> Array(text2.length+1).fill(0))

//     console.log(dp)
   
//     for(let i=1;i<=text1.length;i++){
//         for(let j=1;j<=text2.length;j++){
//             if(text1[i-1] == text2[j-1]){
//                 dp[i][j] = 1+ dp[i-1][j-1]
//             }else{
//                 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
//             }
//         }
//     }

//     return dp[text1.length][text2.length]
// }

// console.log(longestCommonSubsequence("abcde","ace"))


/**
 * 300. Longest Increasing Subsequence
 */

// var lengthOfLIS = function(nums) {
//     const dp = new Array(nums.length).fill(1)

//     for(let i=1;i<nums.length;i++){
//         for(j=0;j<i;j++){
//             if(nums[i] > nums[j]){
//                 dp[i] = Math.max(dp[j] + 1, dp[i])
//             }
//         }
//     }
//     dp
//     return Math.max(...dp)
// };



// nums = [10,9,2,5,3,7,101,18]
// console.log(lengthOfLIS(nums))

/**
 * 152. Maximum Product Subarray
 */

// var maxProduct = function(nums) {
//     let max = nums[0]
//     let min = nums[0]

//     let result = nums[0]

//     for(let i=1;i<nums.length;i++){

//         if(nums[i] < 0)
//             [max, min] = [min, max]


//         max = Math.max(nums[i], max * nums[i])
//         min = Math.min(nums[i], min * nums[i])

//         result = Math.max(max, result)
//     }


//     return result;
// };

// const nums = [2,3,-2,4]
// console.log(maxProduct(nums))


/**
 * 64. Minimum Path Sum
 */

// var minPathSum = function(grid) {
//     const m = grid.length;
//     const n = grid[0].length;
//     const dp = Array.from({length: m}, ()=> Array(n).fill(0))

//     dp[0][0] = grid[0][0]
//     for(let i=1;i<m;i++){
//         dp[i][0] = dp[i-1][0] + grid[i][0]
//     }
//     for(let j=1;j<n;j++){
//         dp[0][j] = dp[0][j-1] + grid[0][j]
//     }

//     for(let i=1;i<m;i++){
//         for(let j=1;j<n;j++){
//             dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
//         }
//     }

//     dp
//     return dp[m-1][n-1]
// };

// const grid = [[1,3,1],[1,5,1],[4,2,1]]
// console.log(minPathSum(grid))


/**
 * 560. Subarray Sum Equals K
 */

// var subarraySum = function(nums, k) {
    
//     const map = new Map()
//     map.set(0,1)

//     let prefixSum = 0;
//     let result = 0;
//     for(let i=0;i<nums.length;i++){

//         prefixSum += nums[i]

//         const remain = prefixSum - k

//         if(map.has(remain)){
//             result = result + map.get(remain)
//         }


//         map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
//     }
//     return result
// };

// const nums = [1,1,1], k = 2
// console.log(subarraySum(nums,2))


/**
 * 72 Edit Distances
 */

// var minDistance = function(word1, word2) {
    
//     const dp = Array.from({length: word1.length + 1}, ()=> Array(word2.length +1).fill(0))

//     const m = word1.length;
//     const n = word2.length;

//     // Fill base cases
//     for (let i = 0; i <= m; i++) dp[i][0] = i;
//     for (let j = 0; j <= n; j++) dp[0][j] = j;

//     dp

//     for(let i=1;i<=word1.length;i++){
//         for(let j=1;j<=word2.length;j++){
//             if(word1[i-1] != word2[j-1]){
//                 dp[i][j] = 1+ Math.min(
//                    dp[i-1][j-1], //Replace,
//                    dp[i][j-1], //Inserted
//                    dp[i-1][j] // Deleted
//                 )
//             }else{
//                 dp[i][j] = dp[i-1][j-1]
//             }
//         }
//     }
    
//     console.log(dp)
//     return dp[word1.length][word2.length]

// };

// const word1 = "horse", word2 = "ros"
// console.log(minDistance(word1,word2))

/**
 * 416. Partition Equal Subset Sum
 */

// var canPartition = function(nums) {
    
//     const sum = nums.reduce((sum, num) => sum+= num)
//     console.log(sum)

//     if(sum % 2 != 0) return false

//     const target = sum/2
//     const dp = Array(target+1).fill(false)
//     dp[0] = true
    
//     for(let i=0;i<=nums.length;i++){
//         for(let j=target;j>i;j--){
//             dp[j] = dp[j] || dp[j-nums[i]]
//         }
//     }

//     return dp[target]
// };

// const nums = [1,5,11,5]
// console.log(canPartition(nums))

/**
 * 300. Longest Increasing Subsequence
 */

// var lengthOfLIS = function(nums) {
    
//     const dp = Array(nums.length).fill(1)


//     console.log(dp)

//     for(let i=1;i<nums.length;i++){
//         for(let j=0;j<i;j++){
//             if(nums[i] > nums[j]){
//                 dp[i] = Math.max(dp[j]+1, dp[i])
//             }
//         }
//     }
//     console.log(dp)
//     return Math.max(...dp)
// };

// const nums = [1,3,6,7,9,4,10,5,6]
// console.log(lengthOfLIS(nums))