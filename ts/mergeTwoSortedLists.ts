// You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. 
// The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.

// Dummy Node Trick

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 1. Create the dummy train
    let dummy = new ListNode(-1);
    
    // 2. Guy who joins all trails
    let actual = dummy;

    // 3. While they have values, we need to compare
    while (list1 !== null && list2 !== null) {
        // 4. We compare the values of each train
        if (list1.val <= list2.val){
            // 5. We locate the winner trail
            actual.next = list1;
            // 5.1 Go to the next trail for the rest of it
            list1 = list1.next;
        } else {
            // 5.2 We locate the winner trail
            actual.next = list2;
            // 5.3 Go to the next trail for the rest of it
            list2 = list2.next;
        }

        // 6. We move to the next trail
        actual = actual.next
    }

    // 7. What if we have more trains left, we swith everything to the end.
    if (list1 !== null){
        actual.next = list1;
    } else {
        actual.next = list2;
    }

    // We return the whole trails ignoring the first one
    return dummy.next;
};

let l1 = new ListNode(1, new ListNode(2, new ListNode(9)));
let l2 = new ListNode(1.4, new ListNode(3, new ListNode(4)));

console.log(JSON.stringify(mergeTwoLists(l1, l2), null, 2));