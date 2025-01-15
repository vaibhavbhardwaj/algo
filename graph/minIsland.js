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
    let minSize = Infinity
    for (let r=0;r<grid.length;r=r+1){
        for (let c=0;c<grid[0].length;c=c+1){
            const size = explore(r,c,visited,grid)
            if (size > 0 && size < minSize) {
                minSize = size;
              }
        }
            
    }
    return minSize
};
const explore = (r,c,visited,grid)=>{
    //console.log(grid[r][c])
    pos = r + ',' + c
    //console.log(pos)
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return 0;
    if (grid[r][c] === 'W') return 0
    if (visited.has(pos)) return 0
    visited.add(pos)
    let size = 1
    size+=explore(r-1,c,visited,grid)
    size+=explore(r+1,c,visited,grid)
    size+=explore(r,c-1,visited,grid)
    size+=explore(r,c+1,visited,grid)
    return size

    //console.log("1")
    


}

x = islandCount(grid); // -> 3
console.log(x)