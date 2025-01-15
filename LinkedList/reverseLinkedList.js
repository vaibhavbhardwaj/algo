//Write a function, reverseList, that takes in the head of a linked list as an argument. 
// The function should reverse the order of the nodes in the linked list in-place and return the new head of 
// the reversed linked list.

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
const a = new Node(2);
const b = new Node(3);
const c = new Node(4);
const d = new Node(5);
  
a.next = b;
b.next = c;
c.next = d;

const reverseList = (head) => {
    // todo
    let current = head
    let prev = null
    while (current !== null){
        console.log(current.val)
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
  };
  
  console.log(reverseList(a))