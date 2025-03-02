// insert node
// Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const insertNode = (head, value, index) => {
    // todo
    if(index === 0){
        newNode = new Node(value)
        newNode.next = head
        return newNode
    }
    current = head
    headNew = head
    let i = 0
    while(current !== null){
        if (i === index - 1){
            newNode = new Node(value)
            next = current.next
            current.next = newNode
            newNode.next = next
            break
        }
        i = i+1
        current = current.next
    }
    return headNew
  };