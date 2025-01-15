class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const linkedListValues = (head)=>{
    list = []
    while (head !== null){
        console.log(head.val)
        list.push(head.val)
        head = head.next
    }
    return list
}

console.log(linkedListValues(a))