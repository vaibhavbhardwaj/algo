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
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
// a -> b -> c -> d -> e -> f

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

const zipperLists = (head1, head2) => {
    // todo
    const headorg = head1
    while (head1!==null && head2 !==null){
        //console.log(head1.val,head2.val)
        head1Next = head1.next
        head2Next = head2.next
        head1.next = head2
        if (head1Next !== null){
            head2.next = head1Next
        }
        
        //console.log("after",head1.next.val,head2.next.val)

        head1 = head1Next
        head2 = head2Next
    }
    return headorg
  };
  v = zipperLists(x,a)
  const listtravel= (head)=>{
    while (head !==null){
        console.log(head.val)
        head = head.next
    }

  }

  console.log(v)
listtravel(v)
