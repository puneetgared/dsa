/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
23. Merge k Sorted Lists
 */

// var mergeKLists = function(lists) {
//     const queue = []

//     for(let node of lists){
//         if(node != null){
//             queue.push(node)
//         }
//     }

//     const result = new ListNode(null)
//     let curr = result;

//     while(queue.length > 0){
//         //Simulating the priority queue
//         queue.sort((node1, node2) => node1.val - node2.val)

//         const smallest = queue.shift()

//         curr.next = smallest
//         curr = smallest

//         if(smallest.next != null) queue.push(smallest.next)
//     }

//     return result.next;
// };

// const lists = [[1,4,5],[1,3,4],[2,6]]


/**
 * 767. Reorganize String
 */

// var reorganizeString = function(s) {
//     const freqMap = new Map();
//     for (let ch of s) {
//         freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
//     }

//     // Convert freqMap to array and sort descending
//     let heap = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

//     // Base case check
//     if (heap[0][1] > Math.ceil(s.length / 2)) return "";

//     let result = "";
//     let prev = null;

//     while (heap.length > 0) {
//         let [char1, freq1] = heap.shift(); // most frequent

//         result += char1;
//         freq1--;

//         // Only reinsert previous character if it still has remaining count
//         if (prev && prev[1] > 0) {
//             heap.push(prev);
//         }

//         // Re-sort the heap (simulating max heap)
//         heap.sort((a, b) => b[1] - a[1]);

//         // Save current char as prev for next round
//         prev = [char1, freq1];
//     }

//     return result;
// };

// const s = "aab"