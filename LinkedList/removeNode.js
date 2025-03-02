class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}


const removeNode = (head, targetVal) => {
    // todo
    current_head = head
    current = head
    if (head.val === target){
        current_head = head.next
        return current_head
    }
    prev_head = current
    while(current!==null){
        if(current.val === targetVal){
            prev_head.next = current.next
        }

        prev_head = current
        current = current.next
    }
    return current_head
    
  };