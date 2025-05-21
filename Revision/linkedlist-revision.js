/*
19. Remove Nth Node From End of List
*/
// dummy-> 1-> 2-> 3-> 4 -> Null

// 1-> 2-> 3-> 4->
// var removeNthFromEnd = function(head, n) {
//     const dummy = new ListNode(-1)
//    dummy.next = head;

//    let slow = dummy;
//    let fast = dummy;

//    let count = 0;
//    while(count <= n){
//     fast = fast.next;
//     count++
//    }

//    while(fast != null){
//     fast = fast.next;
//     slow = slow.next;
//    }
 
//   if(slow.next)  slow.next = slow.next.next;

//    return dummy.next;
// };