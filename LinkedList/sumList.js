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

//   const sumList = (head) => {
//     // todo
//     let sum = 0
//     while (head !== null){
//         console.log(head.val)
//         sum += head.val
//         head = head.next
//     }
//     return sum
//   };

const sumList = (head) => {
    // todo
    if (head === null) {
        return 0
    }
    return head.val + sumList(head.next)
  };


  console.log(sumList(a))