/*
19. Remove Nth Node From End of List
*/

// var removeNthFromEnd = function(head, n) {
//     const dummy = new ListNode(-1);
//     dummy.next = head;

//     const remove = (head,prev) => {
//         if(head == null){
//             return 1
//         }

//         const count = remove(head.next, head)
//         if(count == n){
//             prev.next = head.next
//         }

//         return count + 1;
//     }

//     remove(head,dummy)
//     return dummy.next;
// };

/**
 * 21. Merge Two Sorted Lists
 */
// var mergeTwoLists = function(list1, list2) {
//     const dummy = new LinkedList(-1)
//     let curr = dummy;

//     while(list1 != null && list2 != null){
//         if(list1.val < list2.val){
//             curr.next = list1
//             list1 = list1.next
//         }else{
//             curr.next = list2
//             list2 = list2.next
//         }

//         curr = curr.next
//     }

//     if(list1 != null) curr.next = list1;
//     if(list2 != null) curr.next = list2;

//     return dummy.next;
// };

/**
 * 141. Linked List Cycle
 */

// var hasCycle = function(head) {
//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if(slow == fast) return true;
//     }
//     return false;
// };


