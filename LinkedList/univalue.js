/* Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty. */
class Node {
   constructor(val) {
     this.val = val;
     this.next = null;
   }
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

const isUnivalueList = (head) => {
    // todo
    let current = head
    while (current.next !== null){
        if (current.val !== current.next.val)
            return false
        current = current.next
    }
    return true
};
const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

//isUnivalueList(u); // true 
zz = isUnivalueList(u); // true
console.log(zz)