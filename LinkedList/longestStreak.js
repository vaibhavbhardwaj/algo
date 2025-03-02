// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const longestStreak = (head) => {
    // todo
    if (head === null) return 0
    let current = head
    let prev_val = current.val
    let max_streak = 0
    let current_streak = 0
    while (current !== null){
         if (current.val === prev_val){
            current_streak = current_streak + 1
            if(current_streak > max_streak) max_streak = current_streak
         }else{
            current_streak = 1
         }
         
        prev_val = current.val
        current = current.next
    }
    console.log(max_streak)
  };

  const a = new Node(4);

  // 4
  
  longestStreak(null); // 0


  longestStreak(a);
  
