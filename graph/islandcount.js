const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

const islandCount = (grid) => {
    // todo
    const visited = new Set()
    let count = 0
    for (let r=0;r<grid.length;r=r+1){
        for (let c=0;c<grid[0].length;c=c+1){
           if ( explore(r,c,visited,grid)===true) count+=1
        }
            
    }
    return count
};
const explore = (r,c,visited,grid)=>{
    //console.log(grid[r][c])
    pos = r + ',' + c
    //console.log(pos)
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return false;
    if (grid[r][c] === 'W') return false
    if (visited.has(pos)) return false
    visited.add(pos)
    //console.log("1")
    explore(r-1,c,visited,grid)
    explore(r+1,c,visited,grid)
    explore(r,c-1,visited,grid)
    explore(r,c+1,visited,grid)
    return true


}

x = islandCount(grid); // -> 3
console.log(x)