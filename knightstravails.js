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



    function node(start,end)
    {

      
    }





    console.log(node([0,0], [1,2]))