/* Write a function, maxPathSum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.

You can assume that all numbers are non-negative. */


const explore = (r=0,c=0,grid,memo={})=>{
    
    pos = r + ',' + c
    let sum  = 0
    if (pos in memo) return memo[pos]
    const rowInbounds = 0 <= r && r < grid.length 
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return  -Infinity;
    //console.log(grid[r][c])
    //if (grid[r][c] === 'X') return 0
    sum = sum + grid[r][c]
    if(r === grid.length-1 && c === grid[0].length-1) return grid[r][c]
    const downCount =  sum + explore(r+1,c,grid,memo)
    const rightCount =  sum + explore(r,c+1,grid,memo)
   
    if (downCount > rightCount){
        memo[pos] = downCount
        return memo[pos]
    }else{
        memo[pos] = rightCount
        return memo[pos]
    }
    //memo[pos] = downCount + rightCount
    //return memo[pos]
    //console.log(downCount + rightCount)
    //return downCount + rightCount
 }

 const grid = [
    [1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 6, 1, 1, 5, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 42, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
x = explore(0,0,grid)
console.log(x)