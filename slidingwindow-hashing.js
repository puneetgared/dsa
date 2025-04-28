/**
 * 49. Group Anagrams
 */

    // var groupAnagrams = function(strs) {
        
    //     let map = new Map()

    //     for(let str of strs){

    //         const count = new Array(26).fill(0);
    //         for (let ch of str) {
    //             count[ch.charCodeAt(0) - 97]++;
    //         }
    //         const hash = count.join(''); // cr

    //         if(map.has(hash)){
    //             map.get(hash).push(str)
    //         }else{
    //             map.set(hash,[str])
    //         }
    //     }        
    //     return Array.from(map.values())
    // };
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// console.log(groupAnagrams(strs))
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * 347. Top K Frequent Elements
 */

// var topKFrequent = function(nums, k) {
//     let map = new Map()

//     for(let num of nums){
//         if(map.has(num)){
//             map.set(num,map.get(num)+1)
//         }else{
//             map.set(num,1)
//         }
//     }

    
//     let bucket = Array.from({ length: nums.length + 1 }, () => []);
//         bucket
//     for(let [val,frequency] of map.entries()){
//        const data =  bucket[frequency]
//        data.push(val)
//     }
//     const result = [];
//     for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
//         if (bucket[i].length > 0) {
//             result.push(...bucket[i]);
//         }
//     }
//     return result
// };

// // const nums = [-1,-1], k = 1
// const nums = [1,1,1,2,2,3], k=2
// console.log(topKFrequent(nums,k))
// Output: [1,2]

/**
 * 76. Minimum Window Substring
 */

// var minWindow = function(s, t) {
//     const resultMap = buildMap(t)
    
//     let left=0,right=0
//     let resultLeft = 0;
//     let resultRight =Infinity;

//     let sourceMap = new Map()
//     while(right< s.length){
//         let current = s[right]
//         sourceMap.set(current,sourceMap.has(current) ? sourceMap.get(current) +1: 1)
//         while(compareMap(sourceMap,resultMap)){
//             if((right-left) < (resultRight-resultLeft)){
//                 resultLeft = left
//                 resultRight = right
//             }
//             deleteFromMap(sourceMap,s[left])
//             left++
//         }

//         right++
//     }
//     resultLeft
//     resultRight

//     return resultRight === Infinity ? "" : s.slice(resultLeft, resultRight + 1);   
// };

// const buildMap = (s) => {
//     const map = new Map()
//     for(let ch of s){
//         if(map.has(ch)) map.set(ch,map.get(ch)+1)
//         else map.set(ch,1)
//     }
//     map
//     return map;
// }

// const compareMap = (map1,map2) => {
//     for(let [key,val] of map2.entries()){
//         if (!map1.has(key) || map1.get(key) < val) {
//             return false;
//         }
//     }
//     return true;
// }

// const deleteFromMap = (map, element) => {
//     if(map.get(element) > 1){
//         map.set(element, map.get(element)-1)
//     }else{
//         map.delete(element)
//     }
// }


// const s = "ADOBECODEBANC", t = "ABC"
// console.log(minWindow(s,t))
// Output: "BANC"



/**
 * 424. Longest Repeating Character Replacement
 */

// const map = new Map()
// map.set(1,2)

// console.log(Array.from(map.values()))


// var characterReplacement = function(s, k) {

//     if(s.length == 0) return 0

//     const map = new Map()
    
//     let left=0;right=0;
//     let max = -Infinity

//     while(right < s.length){

//         map.set(s[right], map.get(s[right]) + 1 || 1)

//         const freq = Math.max(...Array.from(map.values()))
//         const extraChar = (right-left+1) - freq
//         if(extraChar > k){
//             if(map.get(s[left]) > 1)
//                  map.set(s[left], map.get(s[left])-1)
//             else
//                  map.delete(s[left])

//             left++
//         }else{
//             max = Math.max(max, right-left +1)
//         }

//         right ++;
//     }

//     return max;
// };



// const s = "AABABBA", k = 2
// console.log(characterReplacement(s,k))
// Output: 4


/**
* 217. Contains Duplicate
 */
// var containsDuplicate = function(nums) {
//     let set = new Set()
//     for(let num of nums){
//         if(set.has(num)) return true

//         set.add(num)
//     }
//     return false;
// };

// const nums = [1,2,3,1]

/**
 * 242. Valid Anagram
 */

// var isAnagram = function(s, t) {

//     if(s.length != t.length) return false;

//     let hash1 = new Array(26).fill(0)
//     let hash2 = new Array(26).fill(0)

//     for(let i=0;i<s.length; i++){
//         hash1[s[i].charCodeAt()-97]++
//         hash1[t[i].charCodeAt()-97]--
//     }
//     return hash1.filter(a => a > 0).length == 0
// };

// const s = "rat", t = "car"
// console.log(isAnagram(s,t))

/*
239. Sliding Window Maximum
*/
// var maxSlidingWindow = function(nums, k) {
//     let result = []
//     let deque = new Array()
    
//     for(let i=0;i<nums.length;i++){

//         //remove from the deque which are not part of window
//         while(deque.length && deque[0] <= i-k) deque.shift()

//         //Push in to deque and remove smaller elements
//         while(deque.length && nums[deque[deque.length-1]] < nums[i]) {
//             deque.pop()
//         }
        
//         deque.push(i)
//         //Store in to the result
//         if(i >= k-1){
//             result.push(nums[deque[0]])
//         }
//         result
//         //
//     }
//     return result;
// };


// const nums = [7,2,4], k = 2
// const nums = [1,3,-1,-3,5,3,6,7], k = 3
// console.log(maxSlidingWindow(nums,k))

/**
 * 128. Longest Consecutive Sequence
 */

/** Time complexity - O(n logn)
 * /

// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0;
//     if(nums.length == 1) return 1
//     let max=1;
//     nums.sort((a,b) => a-b)
//     nums
//     let seq = 1
//     for(let i=1;i<nums.length;i++){
//         console.log(nums[i], nums[i+1])
//         if(nums[i-1] == nums[i]) continue
//         if(nums[i-1] == nums[i]-1){
//             seq++
//             seq
//             max = Math.max(max, seq)
//         }else{
//             seq = 1
//         }
        
//     }

//     return max;

// }
// const nums = [1,0,1,2]
// console.log(longestConsecutive(nums))
// Output : 4

/**
 * Time Complexity : O (n)
 */

// var longestConsecutive = function(nums) {
//     let max = 0;
//     const set = new Set()

//     for(let num of nums){
//         set.add(num)
//     }
//     set
//     let seq = 1
    
//     for(let val of set.values()){
//         if(set.has(val-1)) continue;

//         let currVal = val;
//         while(set.has(currVal+1)){
//             currVal++
//             seq++;
//         } 

//         max = Math.max(max,seq)
//         seq = 1
//     }

//     return max;
// }

// const nums = [100,4,200,1,3,2]
// console.log(longestConsecutive(nums))


/**
 * 438. Find All Anagrams in a String
 */

// var findAnagrams = function(s, p) {
//     let result = []
    
//     let sourceArr = new Array(26).fill(0)
//     for(let i=0;i<p.length;i++){
//         sourceArr[p[i].charCodeAt()-97]++
//     }
//     let sourceHash = sourceArr.join("#")
//     sourceHash

//     targetArr = new Array(26).fill(0)

//     for(let i=0;i<s.length;i++){
//         targetArr[s[i].charCodeAt()-97]++

//         if(i >= p.length-1){
//             const targetHash = targetArr.join("#")
//             if(sourceHash == targetHash){
//                 result.push(i-(p.length-1))
//             }
//             i
//             // console.log(2-3-1)
//             // console.log(s[i])
//             targetArr[s[i-(p.length-1)].charCodeAt()-97]-- 
//         }
//     }

//     return result;
// };


// let s = "cbaebabacd", p = "abc"
// console.log(findAnagrams(s,p))

/**
 * 205. Isomorphic Strings
 */

var isIsomorphic = function(s, t) {
    
    if(s.length != t.length) return false;

    let mapST = new Map()
    let mapTS = new Map()

    for(let i=0;i<s.length;i++){
        const chS = s[i]
        const chT = t[i]
        
        if(mapST.has(chS) && mapST.get(chS) != chT
            || mapTS.has(chT) && mapTS.get(chT) != chS){
                return false;
            }

            mapST.set(s[i], t[i])
            mapTS.set(t[i],s[i])
    }
    return true;
};

const s = "egg", t = "add"
console.log(isIsomorphic(s,t))