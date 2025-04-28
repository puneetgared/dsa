/**
 * 15 3 Sum
 */

// const threeSum = (nums) => {

//     let set = new Set()

//     for(let i=0;i<nums.length;i++){
//         let map = new Set()
//         for(let j=i+1;j<nums.length;j++){
//                 const k = -(nums[i] + nums[j])
//                 if(map.has(k)){

//                     const arr = [nums[i], nums[j], k]
//                     console.log(arr)
//                     arr.sort((a,b) => a-b)
//                     set.add(arr.join(','))
//                 }
//                 map.add(nums[j])
//         }
//     }

//     return Array.from(set).map(item => item.split(',').map(Number));
// }

// const threeSum = (nums) => {
//     nums.sort((a,b) => a-b)
//     console.log(nums)
    
//     let set = new Set()

//     for(let i=0;i<nums.length;i++){

//         let j=i+1
//         let k=nums.length-1;

//         while(j< k) {
//             const total =  nums[i] + nums[j] + nums[k]
//             if(total == 0){
//                 const arr = [nums[i], nums[j], nums[k]]
//                 set.add(arr.join(','))
//                 j++
//                 k--

//             while (j < k && nums[j] === nums[j - 1]) j++;
//             while (j < k && nums[k] === nums[k + 1]) k--;
//             }else if(total < 0) j++
//             else k--;
//         }
//     }
//     return set;

// }

// const arr = [-1,0,1,2,-1,-4]
// console.log(threeSum(arr))


/**
 * Two Sum
 */

// const twoSum = (nums, target)=> {
//     let map = new Map()
//     for(let i=0;i<nums.length;i++){
//         let remain = target-nums[i]
//         if(map.has(remain)){
//             return [i, map.get(remain)]
//         }
//         map.set(nums[i], i)
//     }
// }


// const nums = [3,2,4], target = 6
// console.log(twoSum(nums,target))

/**
 * 238: Product of Array except Self
 */

// const productExceptSelf = (nums) => {
//     const output = Array(nums.length).fill(1)

//     console.log(output)

//     let leftProduct = 1;
//     for(let i=0;i<nums.length;i++){
//         output[i] = leftProduct
//         leftProduct *= nums[i]
//     }
//     output
//     let rightProduct = 1
//     for(let i=nums.length-1;i>=0;i--){
//         output[i] *= rightProduct
//         rightProduct *= nums[i]
//     }
//     return output
// }

// const nums = [1,2,3,4]
// // const nums = [-1,1,0,-3,3]
// console.log(productExceptSelf(nums))

/**
 * 3 Longest substring without repeating character
 */
// const lengthOfLongestSubstring = (s) => {

//     if(s.length == 0) return 0;

//     const set = new Set()
//     let count = 0;
//     let i=0;j=0

//     while(j< s.length){
//         if(!set.has(s[j])){
//             set.add(s[j])
//             j++
//         }else{
//             set.delete(s[i])
//             i++
//         }

//         count = Math.max(count,set.size)
//     }

//     return count;
// }

// const s = "bbbbb"
// console.log(lengthOfLongestSubstring(s))


/**
 * 56 Merge Intervals
 */

// const mergeIntervals = (intervals) => {

//     if (intervals.length <= 1) return intervals;
//     intervals.sort((a, b) => a[0] - b[0]); // 🔑 Sorting by start time

//     let merged = [intervals[0]]

//     for(let i=1;i<intervals.length;i++){
//         let lastInterval = merged[merged.length-1]
//         let currentInterval = intervals[i]
//         if(lastInterval[1] >= currentInterval[0]){
//             lastInterval[1] = Math.max(currentInterval[1], lastInterval[1])
//         }else{
//             merged.push(currentInterval)
//         }
//     }
//     return merged
// }


// // const intervals = [[1,3],[2,6],[8,10],[15,18]]
// const intervals = [[1,4],[4,5]]
// console.log(mergeIntervals(intervals))

// const Output = [[1,6],[8,10],[15,18]]


/**
 * 57. Insert Interval
 */

// const InsertInterval = (intervals, newInterval) => {
//     const merged = []
//     if(intervals.length == 0) merged.push(newInterval)
//     let isMerged = false;
//     for(let i=0;i<intervals.length;){
//         if(intervals[i][0] > newInterval[0] && !isMerged){
//             merged.push(newInterval)
//             isMerged = true
//         }else {
//             merged.push(intervals[i])
//             i++;
//         }
//     }
//     console.log(intervals)
//     if (!isMerged) merged.push(newInterval)

//    return  mergeIntervals(merged)
// }


// const intervals = [[1,3],[6,9]], newInterval = [2,5]
// const intervals = [], newInterval = [2,5]

// Output: [[1,5],[6,9]]
// console.log(InsertInterval(intervals, newInterval))


/**
 * 18: 4 Sum
 */

// const threeSum = (nums, target, skippingIndex) => {

//     let set = new Set()

//     for(let i=0;i<nums.length;i++){
//         if(i== skippingIndex) continue;
//         let map = new Set()
//         for(let j=i+1;j<nums.length;j++){
//             if (j === skippingIndex) continue;

//                 const k = target - nums[i] - nums[j]
//                 if(map.has(k)){

//                     const arr = [nums[i], nums[j], k]
//                     console.log(arr)
//                     arr.sort((a,b) => a-b)
//                     set.add(arr.join(','))
//                 }
//                 map.add(nums[j])
//         }
//     }
//     return set;
// }

// var fourSum = function(nums, target) {
//     nums.sort((a, b) => a - b);
//     let set = new Set();
//     for(let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let newTarget = target - nums[i];

//         const output = threeSum(nums,newTarget,i)
//         console.log(output)
//         for (let triplet of output) {
//             const quad = [nums[i], ...triplet.split(',').map(Number)];
//                         quad.sort((a, b) => a - b);
//             set.add(quad.join(','));
//         }    }
//     console.log(set)
//     return Array.from(set).map(item => item.split(',').map(Number));
//         // return Array.from(set).map(item => item.split(',').map(Number));
// };

// const nums = [1,0,-1,0,-2,2], target = 0
// console.log(fourSum(nums,0))

/**
 * 73: Set Matrix Zeros
 */

// var setZeroes = function(matrix) {
//     const rowSet = new Set()
//     const colSet = new Set()

//     for(let row=0;row<matrix.length;row++){
//         for(let col=0;col< matrix[0].length; col++){
//             if(matrix[row][col] == 0){
//                 rowSet.add(row)
//                 colSet.add(col)
//             }
//         }
//     }

//     for(let row=0;row<matrix.length;row++){
//         for(let col=0;col< matrix[0].length; col++){
//             if(rowSet.has(row) || colSet.has(col)){
//                 matrix[row][col] = 0
//             }
//         }
//     }

// };

// const matrix = [[1,1,1],[1,0,1],[1,1,1]]
// console.log(setZeroes(matrix))
// console.log(matrix)


/**
 * 560. Subarray Sum Equals K
 */


// var subarraySum = function(nums, k) {

//     let map = new Map()
//     map.set(0,1)

//     let sum = 0;
//     let total = 0;

//     for(let num of nums){
//         sum += num
//         let remain = sum - k

//         if(map.has(remain)){
//             total += map.get(remain)
//         }

//         map.set(sum, map.has(sum)? map.get(sum)+1 : 1)
//     }

//     return total;
// }

// const nums = [1,1,1], k = 2
// console.log(subarraySum(nums,k))


/**
 * 53. Maximum Subarray
 */

// var maxSubArray = function(nums) {

//     let max = -Infinity
//     let sum =0
//     for(let num of nums){
//         sum +=num

//         max = Math.max(max,sum)

//         if(sum<0){
//             sum = 0
//         }
//     }

//     return max;

// }

// const nums = [-2,1,-3,4,-1,2,1,-5,4]
// console.log(maxSubArray(nums))

/**
 * 54. Spiral Matrix
 */

// var spiralOrder = function(matrix) {
//     let top = 0
//     let bottom = matrix.length-1
//     let left = 0
//     let right = matrix[0].length-1

//     let output = []
//     while(top <= bottom && left <= right){
//         for(let i=left;i<=right;i++){
//             output.push(matrix[top][i])
//         }
//         top ++;
//         for(let i=top;i<=bottom;i++){
//             output.push(matrix[i][right])
//         }
//         right --;
//         if (top <= bottom) {
//             for(let i=right;i>=left;i--){
//                 output.push(matrix[bottom][i])
//             }
//             bottom--;
//         }

//         if (left <= right) {
//             for(let i=bottom;i>=top;i--){
//                 output.push(matrix[i][left])
//             }
//             left++ 
//         }  
//     }
  
//     output
//     return output;
// };
// Output: [1,2,3,6,9,8,7,4,5]
// const matrix = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(spiralOrder(matrix))


/**
 * 5. Longest Palindromic Substring
 */

// var longestPalindrome = function(s) {
//     let start = 0

//     let maxLength = 1

//     for(let center=0;center<s.length;center++){
//         const [oddLeft, oddRight] = expandAroundCenter(s, center, center) // Capture odd palindrome
//         const [evenLeft, evenRight] = expandAroundCenter(s, center, center+1) //capture even palindrome
    
        
//         if (oddRight - oddLeft + 1 > maxLength) {
//             start = oddLeft;
//             maxLength = oddRight - oddLeft + 1;
//         }
//         if (evenRight - evenLeft + 1 > maxLength) {
//             start = evenLeft;
//             maxLength = evenRight - evenLeft + 1;
//         }

//     }
//     return s.substring(start, start+maxLength)
// };

// const expandAroundCenter = (s, left,right) => {
//     while(left >= 0 && right< s.length && s[left] == s[right]){
//         left--
//         right++
//     }
//     return [left+1, right-1]
// }



// const s = "babad"

// console.log(longestPalindrome(s))


/**
 * 11. Container With Most Water
 */

// var maxArea = function(height) {
    
//     let left = 0
//     let right = height.length-1;

//     let maxArea = 0
    
//     while(left < right) {
        
//         const area = (right - left ) * Math.min(height[left], height[right])
//         maxArea = Math.max(area, maxArea)
//         maxArea
//         if(height[left] < height[right]) left++
//         else right --
//     }
//     return maxArea;
// };

// const height = [1,8,6,2,5,4,8,3,7]
// console.log(maxArea(height))

/**
 * 283. Move Zeroes
 */

// var moveZeroes = function(nums) {
//     let insertPointer = 0

//    for(let i=0;i<nums.length;i++){
//         if(nums[i] != 0){
//             nums[insertPointer] = nums[i]
//             insertPointer ++
//         }
//    }

//    while(insertPointer < nums.length){
//     nums[insertPointer] = 0
//     insertPointer++
//    }

//     return nums;
// };

// nums = [0,1,0,3,12]
// console.log(moveZeroes(nums))

/**
 * 48. Rotate Image
 */

// var rotate = function(matrix) {
//     const n = matrix.length;
//     //Transpose the matrix
//     for (let i = 0; i < n; i++) {
//         for (let j = i+1; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
//         }
//     }

//     for(let row of matrix){
//         row.reverse()
//     }

//     console.log(matrix)
// };

// const nums = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(rotate(nums))

/**
 * 151. Reverse Words in a String
 */

// var reverseWords = function(s) {
//     let result = []

//     let wordEnd = s.length-1
//     while(wordEnd > 0){
        
//         while(wordEnd > 0 && s[wordEnd] == " ") wordEnd --

//         if(wordEnd < 0) break;
        
//         let wordBegin = wordEnd

//         while (wordBegin >= 0 && s[wordBegin] !== ' ') wordBegin--;

//         // Push the word into result
//         result.push(s.slice(wordBegin + 1, wordEnd + 1)); 

//         wordEnd = wordBegin -1 ;
//     }

//     return result.join(" ")

//     console.log(result)
// };

// const s = "the sky is blue"
// console.log(reverseWords(s))