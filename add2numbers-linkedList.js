/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var listNode = new ListNode(0);
    var result = listNode;
    var carry = 0;

    //loop as long as l1 || l2 exists
    while (l1 || l2) {
        var val1;
        var val2;
        var total;

        //if l1 or l2 exists, set val to l1.val or l2.val property, else make it 0
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;

        //set total to val1 + val2 + carry
        total = val1 + val2 + carry;

        //if total is greater than 9, set carry to 1 and total = total % 10
        if (total > 9) {
            //used for the case of when sum is greater than 10. we carry over 1 to the next list node
            carry = 1;
            total = total % 10;
        } else {
            carry = 0;
        }

        //set the next node to a new ListNode instance with the total
        result.next = new ListNode(total);
        //set the result node to the next node (for the next loop cycle)
        result = result.next

        //move to the next node on l1 or l2
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if(carry !== 0){
        result.next = new ListNode(1);
    }
    //return list starting from listNode.next
    return listNode.next;
};