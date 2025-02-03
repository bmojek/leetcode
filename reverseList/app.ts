class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  let next: ListNode | null = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
}

const list1 = new ListNode(1);
const list2 = new ListNode(2);
const list3 = new ListNode(3);
const list4 = new ListNode(4);
const list5 = new ListNode(5);

list1.next = list2;
list2.next = list3;
list3.next = list4;
list4.next = list5;
console.log(reverseList(list1));
