

// const minCoin = (amount, coins, memo) => {
    
//     if(amount === 0) return 0;
//     if(amount < 0) return Infinity;
//     console.log(memo)
//     if (memo[amount] !== undefined) return memo[amount]; // Return cached result

//     let result = Infinity;
//     for(let coin of coins){
//         let remaining = amount - coin;
//           result = Math.min(result , minCoin(remaining, coins, memo)+1)
//     }
//     memo[amount] = result;
//     return memo[amount];
// }


// console.log(minCoin(10, [4,5,1], []))


// const minCoinNew = (amount, coins) => {

//     const memo = new Array(amount + 1).fill(Infinity); // Initialize memo with Infinity
//     memo[0] = 0; // Base case: 0 coins needed for amount 0

//     for(let i=1; i<=amount;i++){
//         for(let coin of coins){
//             let remaining = i-coin;
//             if(remaining < 0) continue;
//             memo[i] = Math.min(memo[i], memo[remaining] + 1)

//             console.log(memo)
//         }
    
        
//     }
//     return memo[amount]
// }

// console.log(minCoinNew(12, [4,5,1]))


// const howManyWaysCoin = (amount, coins) => {
//     const memo = new Array(amount + 1).fill(0); // Initialize memo with Infinity
//     memo[0] = 1; // Base case: 0 coins needed for amount 0

//     for(let i=1; i<=amount;i++){
//         for(let coin of coins){
//                 let remaining = i-coin;
//                 if(remaining < 0) continue;
//                 memo[i] = memo[i] + memo[remaining]
//                 console.log(memo[i])
            
//             console.log(memo)
//         }
//     }
//     return memo[amount]
// }

// console.log(howManyWaysCoin(8, [4,5,1,8]))
// amount = 5, coins = [1,2,5]
// console.log(howManyWaysCoin(amount, coins))



// const rabbitMaze = (row, col) => {
//     const memo = Array.from({ length: row }, () => Array(col).fill(0));

//     for(let i=0;i<row;i++){
//         memo[i][0] = 1
//     }
//     for(let j=0;j<col;j++){
//         memo[0][j] = 1
//     }


//     console.log(memo)

//     for(let i=1;i< row;i++){
//         for(let j=1;j<col;j++){
//             memo[i][j] = (memo[i-1][j] || 0) + (memo[i][j-1] || 0 )
//             console.log(memo)
//         }
//     }

//     return memo[row-1][col-1]

// }

// console.log(rabbitMaze(5,6))


//Longest common subsequence

// const longestCommonSubsequence = (text1, text2) => {

//     const dp = Array.from({ length: text1.length+1 }, () => Array(text2.length+1 ).fill(0));
    
//     console.log(dp)
//     const sequence = []
//     for(let i=1;i<=text1.length;i++){
//         for(let j=1;j<=text2.length;j++){
//             if(text1[i-1] == text2[j-1]){
//                 console.log(i, j,text1[i], text2[j])
//                 dp[i][j] = 1+ dp[i-1][j-1]
//                 sequence.push(text1[i-1])
//             }else{
//                 console.log(i,j)
//                 dp[i][j] = Math.max(dp[i][j-1], (dp[i-1][j]))
//             }

//             console.log(dp)
//         }
//     }
//     console.log(sequence)
//     return dp[text1.length][text2.length]
// }

// console.log(longestCommonSubsequence("abcde","ace"))


// Longest increasing subsequence
// const longestIncreasingSubsequence = (arr) => {
//     // let dp = Array.from({length: arr.length}).fill(0)
//     let dp = Array(arr.length).fill(1)
//     console.log(dp)

//     for(let i=1;i<=arr.length;i++){
//         for(let j=0;j<i;j++){
//             if(arr[j] < arr[i]){
//                 dp[i] = Math.max(dp[j] + 1, dp[i])
//             }
//         }
//     }

//     console.log(dp)

//     return Math.max(...dp)
// }

// console.log(longestIncreasingSubsequence([3,1,8,2,5,1,2]))
// console.log(longestIncreasingSubsequence([5,2,8,6,3,6,9,5]))

/**
 * Maximum product subarray
 */
// example - [2,3,-2,4]

// const maxSubProductArray = (arr) => {
//     let max = -Infinity; // Initialize max to the smallest possible value
//     let prefix = 1;
//     let suffix = 1;

//     for (let i = 0; i < arr.length; i++) {
//         // Update prefix product
//         prefix = prefix === 0 ? arr[i] : prefix * arr[i];
//         // Update suffix product (from the end of the array)
//         suffix = suffix === 0 ? arr[arr.length - i - 1] : suffix * arr[arr.length - i - 1];

//         // Update max with the maximum of prefix, suffix, and current max
//         max = Math.max(max, prefix, suffix);
//     }

//     return max;
// }

// console.log(maxSubProductArray([2,3,-2,4]))


/**
 * 198: House robber
 * 
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 */


// const houseRobber = (arr) => {
//     if (arr.length === 0) return 0; // No houses to rob
//     if (arr.length === 1) return arr[0]; // Only one house to rob

//     const dp = Array(arr.length).fill(0)
//     dp[0] = arr[0]
//     dp[1] = Math.max(arr[0], arr[1])
//     console.log(dp)

//     for(let i=2;i<arr.length;i++){
//         dp[i] = Math.max(dp[i-1], arr[i]+dp[i-2])
//         dp
//     }

//     return dp[arr.length -1]
    
// }

// const arr = [1,2,3,1]
// console.log(houseRobber(arr))


// const houseRobber = (arr) => {
//     if (arr.length === 0) return 0; // No houses to rob
//     if (arr.length === 1) return arr[0]; // Only one house to rob

//     const dp = Array(arr.length).fill(0)
//     dp[1] = arr[0]
//     // dp[1] = Math.max(arr[0], arr[1])
//     console.log(dp)

//     for(let i=1;i<arr.length;i++){
//         dp[i+1] = Math.max(dp[i], arr[i]+dp[i-1])
//         dp
//     }

//     return dp[arr.length]
    
// }
// const arr = [1,2,3,1]

// console.log(houseRobber(arr))


/**
 * 64 Minium Path Sum
 */
// const minPathSum = (grid) => {
//     const row = grid.length
//     const col = grid[0].length

//     if(row == 1 && col == 1) return grid[0][0]

//     const dp = Array.from({length: row+1}, () => Array(col+1).fill(Infinity))
//     console.log(dp)
//     dp[1][1] = grid[0][0]
//     dp
//     for(let i=1;i<=row;i++){
//         for(let j=2;j<=col;j++){
//             dp[i][j] = Math.min(grid[i-1][j-1]+dp[i][j-1], grid[i-1][j-1]+dp[i-1][j])
//             dp
//         }
    
//     }

//     return dp[row][col]

// }
// const grid = [[1,3,1],[1,5,1],[4,2,1]]

// console.log(minPathSum(grid))


/**
 * 516. Longest Palindromic Subsequence
 */

// let longestPalindromicSubsequence = (str) => {
//    const str2 =  str.split('').reverse().join('')
//     console.log(str2)
//     return longestCommonSubsequence(str,str2)
// }

// let longestCommonSubsequence = (str1, str2) => {

//     let dp = Array.from({length: str1.length + 1}, ()=> Array(str2.length+1).fill(0))
//     console.log(dp)

//     for(let i=1;i<=str1.length;i++){
//         for(let j=1;j<=str2.length;j++){

//             if(str1[i-1] == str2[j-1]){
//                 dp[i][j] = 1+dp[i-1][j-1]
//             }else{
//                 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
//             }
//         }
//     }
//     return dp[str1.length][str2.length]
// }

// const str = "bbbab"
// console.log(longestPalindromicSubsequence(str))


/**
 * 560 - SubArray Sum Equal to K
 */

// const subArraySum = (nums, k) =>{
//     const map = new Map()
//     map.set(0,1)
//     let count = 0

//     let sum =0
//     for(let num of nums){
//         console.log(num)
        
//         sum += num

//         let remain = sum-k

//         if(map.has(remain)){
//             count += map.get(remain)
//         }

//         map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1)
//     }

//     return count;
// }

// const nums = [1,2,3]
// const k = 3

// console.log(subArraySum(nums,k))

/**
 * 72 Edit Distances
 */

// const editDistances = (word1, word2) => {
    
//     const m = word1.length
//     const n = word2.length 

//     let dp = Array.from({length: m + 1}, ()=> Array(n + 1).fill(0))
//     console.log(dp)

//     for(let i=0;i<=m;i++){
//         dp[i][0] = i;
//     }
//     for(let j=1;j<=n;j++){
//         dp[0][j] = j
//     }

//     console.log(dp)

//     for(let i=1;i<=m;i++){
//         for(let j=1;j<=n;j++){

//             if(word1[i-1] == word2[j-1]){
//                 dp[i][j] = dp[i-1][j-1]
//             }else{
//                 dp[i][j] = 1+ Math.min(
//                     dp[i-1][j-1],
//                     dp[i][j-1],
//                     dp[i-1][j]
//                 )
//             }
//         }
//     }

//     return dp[m][n]
// }

// const word1 = "horse"
// const word2 = "ros"
// console.log(editDistances(word1,word2))


/**
 * 455 : Assign Cookies
 */

// const findContentChildren = (g, s) => {
//     g.sort((a,b) => a-b)
//     s.sort((a,b) => a-b)

//     console.log(g)
//     console.log(s)

//     let child = 0
//     let cookie = 0

//     while(child < g.length && cookie < s.length) {
//         if(g[child] <= s[cookie]){
//             child ++
//         }
//         cookie ++
//     }
//     return child
// }

// const greed = [3,4,1]
// const cookie = [2,4]
// console.log(findContentChildren(greed,cookie))


/**
 * 416. Partition Equal Subset Sum
 */

// const canPartition = (nums) => {
//     let total = nums.reduce((total,num) => total+=num, 0)

//     if (total % 2 !== 0) return false;
//     const target = total/2
//     console.log(target)

//     const dp = Array.from({length: target + 1}).fill(false)
//     console.log(dp)
//     dp[0] = true


//     for(let i=0;i<=nums.length;i++){
//         for(let j=target;j>=i; j--){
//             dp[j] = dp[j] || dp[j-nums[i]]
//         }
//     }
//     return dp[target]
// }

// const nums = [1,5,11,5]
// console.log(canPartition(nums))


// var maxProfit = function(prices) {
//     let min = Infinity
//     let profit = 0

//     for(let i=0;i<prices.length;i++){

//         if(min > prices[i]) {
//             min = prices[i];
//         }else {
//             profit = Math.max(profit, prices[i]-min)
//         }
//     }
//     return profit;
// };

// const prices = [7,1,5,3,6,4]
// // const prices = [7,6,4,3,1]
// console.log(maxProfit(prices))



/**
 * 139. Word Break
 */

// var wordBreak = function(s, wordDict) {
//     const dict = new Set(wordDict)


//     const dp = new Array(s.length +1 ).fill(false)
//     dp[0] = true
//     console.log(dp)

//     for(let i=1;i<=s.length;i++){
//         for(let j=0;j<i;j++){
//             if(dp[j] && dict.has(s.substring(j,i))){
//                 dp[i] = true
//             }
//             dp
//         }
        
//     }

//     return dp[s.length]
// };


// // // let s = "leetcode", wordDict = ["leet","code"]
// let s = "aaaaaaa", wordDict = ["aaaa","aaa"]

// console.log(wordBreak(s,wordDict))

/**
 * 213. House Robber II
 */

// var rob = function(arr) {
//     if(arr.length == 1) return arr[0]

//     const robLinear = (nums) => {
//         const dp = new Array(nums.length).fill(0)
//         dp[0] = nums[0]
//         dp[1] = Math.max(nums[0],nums[1])
        
//         for(let i=2;i<nums.length;i++){
//             dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2])
//         }
    
//         return dp[nums.length -1]
//     }
  
        
//     return Math.max(
//         robLinear(arr.slice(0,arr.length-1)),
//         robLinear(arr.slice(1))
//     )
    
// };

// nums = [2,3,2]
// console.log(rob(nums))



/**
 * 97. Interleaving String
 */

// var isInterleave = function(s1, s2, s3) {
    
//     if(s1.length + s2.length != s3.length) return false;

//     let dp = Array.from({length: s1.length +1}, ()=> new Array(s2.length +1).fill(false))
//     dp[0][0] = true

//     for(let i=1;i<=s1.length;i++){
//         for(j=1;j<=s2.legnth;j++){

//             if(s1[i-1] == s3[i+j-1]){
//                 dp[i][j] = dp[i][j] || dp[i-1][j]
//             } 
            
//             if(s2[i-1] == s3[i+j-1]){
//                 dp[i][j] = dp[i][j] || dp[i][j-1]
//             }
//         }
//     }


//     console.log(dp)

//     return dp[s1.length][s2.length]
// };

// const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// console.log(isInterleave(s1,s2,s3))




