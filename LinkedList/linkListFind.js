

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

const linkedListValues = (head,value)=>{
    // console.log(value) 
    // while (head !== null){
    //   console.log(head.val)
    //   if (head.val === value ){
    //     return true
    //   }
    //   head = head.next
        
    // }
    // return false
  if (head === null) { return false }
  if (head.val ===  value) {return true}
  return linkedListValues(head.next,value)

}

console.log(linkedListValues(a,"e"))