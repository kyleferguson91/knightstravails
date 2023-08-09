
function knightMoves(start = [0, 0], end = [1, 2], root = null) {





}





function checkboard()
{
  let arr = []
  for (let i = 0; i<8;i++)
  {
    arr[i] = []
    for (let j = 0; j<8;j++)
    {
      arr[i][j] = null
    }
  }

  return arr
}

let board = checkboard()
//console.log(board)


// this function fills in the board of how many steps it takes to reach each position..


function node(start,end,prior = [], movecount = 0,visited = [], queuevisit = [], path = [])
{
//console.log(visited,'visited')

  // start is our current node..
//console.log(start)

// if this node is equal to our end node we are done..
if (start.toString() == end.toString()) {
  console.log('WE ARE DONE YO', 'moves:', movecount, visited.length, path)
  board[end[0]][end[1]] = movecount

  return;
}

// push this node onto visited now
visited.push(start)
//console.log(visited)
console.log(start)
// we can set the distance to this node from wherever we came from..
board[start[0]][start[1]] = movecount

// update move count by 1
movecount++

// generate a list of possible other squares we can move to from here..

let movelist = moves(start)
//console.log(movelist,'movelist')

// check if movelist contains anything that is in visited, as well as the final value..
visited.map((elem,ind,arr) => {

movelist.map((elem2,ind2,arr) => {
  // remove anything already visited..
if (elem.toString() == elem2.toString()) {movelist.splice(ind2,1)}
})


})

//console.log(movelist,'aftersplice', visited)
// perform the function again, until we reach a point 
  movelist.forEach((elem,indm,arr) => {
    node(elem, end,prior,movecount,visited,queuevisit, path)
  })



}
(node([3,3],[4,3]))

// we correctly get the number of steps from start to end by this, but now how do we find the path.. we can count up on the board..

// so... 


// we have.. 

//console.log(board)

// this function returns an array of two element arrays of all possible moves! (could be up to 8!)
function moves(array) {
if (!array) {return}
  // pass in the position[0] and position at 1, eg [0,0] = 0, 0 for starting and eacch other point

  let arr = []
  let i
  let j
  i = array[0]
  j = array[1]
  // case 1: i + 2 && j -1 
  if (i + 2 <= 7 && j - 1 >= 0) {
    // continue with case 1.
    arr.push([i + 2, j - 1])
  }

  // case 2 : i + 2 && j + 1
  if (i + 2 <= 7 && j + 1 <= 7) {
    // continue with case 2.
    arr.push([i + 2, j + 1])
  }


  // case 3 : i - 2 && j - 1
  if (i - 2 >= 0 && j - 1 >= 0) {
    // continue with case 3.
    arr.push([i - 2, j - 1])
  }


  // case 4 : i - 2 && j + 1
  if (i - 2 >= 0 && j + 1 <= 7) {
    // continue with case 4..
    arr.push([i - 2, j + 1])
  }

  // case 5 : j + 2 && i + 1
  if (j + 2 <= 7 && i + 1 <= 7) {
    // continue with case 5..
    arr.push([i + 1, j + 2])
  }

  // case 6 : j + 2 && i - 1
  if (j + 2 <= 7 && i - 1 >= 0) {
    // continue with case 6..
    arr.push([i - 1, j + 2])
  }

  // case 7 : j - 2 && i + 1
  if (j - 2 >= 0 && i + 1 <= 7) {
    // continue with case 7..
    arr.push([i + 1, j - 2])
  }


  // case 8 : j - 2 && i - 1
  if (j - 2 >= 0 && i - 1 >= 0) {
    // continue with case 8..
    arr.push([i - 1, j - 2])
  }

  return arr

}


function findpath(board, start, end)
{
// this function will output an array of the path we take from start to end..


}
console.log(findpath())


