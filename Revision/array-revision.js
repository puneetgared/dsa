/**
 * 3. Longest Substring Without Repeating Characters
 */

// var lengthOfLongestSubstring = function(s) {
    
//     if(s.length == 0) return 0

//     const set = new Set()

//     let i=0, j=0
//     let max = 0
//     while(j<s.length){
//         i
//         j
//         if(!set.has(s[j])){
//             set.add(s[j])
//             max = Math.max(max, (j-i)+1)
//             j++
//         }else{
//             while(i<s.length && set.has(s[j])) {
//                 set.delete(s[i])
//                 i++
//             }
//         }
//     }
//     return max;
// };

// const s = "pwwkew"
// console.log(lengthOfLongestSubstring(s))
