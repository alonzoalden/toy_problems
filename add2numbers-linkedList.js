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

    while (l1 || l2) {
        var val1;
        var val2;
        var total;

        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;
        total = val1 + val2 + carry;

        if (total > 9) {
            carry = 1;
            total = total % 10;
        } else {
            carry = 0;
        }

        result.next = new ListNode(total);
        result = result.next

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if(carry !== 0){
        result.next = new ListNode(1);
    }
    return listNode.next;
};