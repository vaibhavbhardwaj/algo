const countPaths = (grid) => {
    // todo
    let count =0
    for (let r=0;r<grid.length;r+=1){
        for (let c=0;c<grid[0].length;c+=1){
            count+=explore(r,c,grid)
        }
    }
    return count
  };

const explore = (r=0,c=0,grid,memo={})=>{
    
   pos = r + ',' + c
   let sum  = 0
   if (pos in memo) return memo[pos]
   const rowInbounds = 0 <= r && r < grid.length;
   const colInbounds = 0 <= c && c < grid[0].length;
   if (!rowInbounds || !colInbounds) return 0;
   //console.log(grid[r][c])
   //if (grid[r][c] === 'X') return 0
   sum = sum + grid[r][c]
   if(r === grid.length-1 && c === grid[0].length-1) return grid[r][c]
   const downCount =  sum + explore(r+1,c,grid)
   const rightCount =  sum + explore(r,c+1,grid)
   if (downCount > rightCount){
    return downCount
   }else{
    return rightCount
   }
   //memo[pos] = downCount + rightCount
   //return memo[pos]
   //console.log(downCount + rightCount)
   //return downCount + rightCount
}

const grid = [
    [1, 2, 8, 1],
    [3, 10, 12, 10],
    [4, 0, 6, 3],
  ];

x = explore(0,0,grid); 
console.log(x)