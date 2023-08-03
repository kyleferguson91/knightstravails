
// function shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.


function knightMoves(coorda = [0,0], coordb)
{
    let arr = []
    
    // put together a game board 
    for (let i = 0; i < 8; i++)
    {
        arr[i] = []
        for (let j = 0; j < 8; j++)
        {
      arr[i].push(0)
   
        }
    }
  
  // create a kight
  
  let knight = 1;
  arr[coorda[0]][coorda[1]] = knight
  
  // knight can move +2i or -2i(+ or - 1 on j)
  // or +2j -2j and +1 -1 i
  // we cannot go below 0 on either and we cannot go above 8..
  
  
  
  arr[coorda[0]+2][coorda[1]+1] = knight
  
  
  
return arr
}

console.log(knightMoves())