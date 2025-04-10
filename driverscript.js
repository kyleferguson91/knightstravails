

let starting = "Pick a Square!", ending = "Pick a Square!"
let startnode, endnode
let items = []

// create the squares to go into the board

let board = document.querySelector(".board");

console.log(board)



// this function will output an array of the path we take from start to end..
for (let row =0; row<=8; row++)

  {
    for (let column = 0; column<8;column++)

        {
          //  console.log("row: ", row, " column: ", column)

            let square = document.createElement("div");
            square.id = `${row}${column}`
            
            square.classList.add((row + column) % 2 === 0 ? 'white' : 'black');
             square.classList.add("square")
             board.appendChild(square)

        }

    
  }


  

  function ColorListeners(color)
  {
    //mouseover 
  document.addEventListener("mouseover", (e) => {
  //  console.log(e.target.id)
    if (e.target.classList.contains("square"))
    {
        if (starting == "Pick a Square!" || ending == "Pick a Square!")
        e.target.classList.add(color)
    }
  })

  //mouseout
  document.addEventListener("mouseout", (e) => {
   // console.log(e.target.id)
    if (e.target.classList.contains("square"))
    {
        e.target.classList.remove(color)
    }
  })
  }

  // call red listener, until the red item is picked, then remove the red listeners and call green

function addClick()
{
document.addEventListener("click", squareClickHandle)
}


function removeClick()
{
    document.removeEventListener("click", squareClickHandle)
}

function squareClickHandle(e)

{
if (e.target.classList.contains("square"))
{
    console.log(e.target.id)

    // if starting is undefined, the we add to that first
    if (starting == "Pick a Square!")
    {
        startnode = e.target.id
        
        starting = e.target.id
        startsquare.textContent = `[${e.target.id.split("")}]`
        e.target.classList.add("selected")
        e.target.textContent = "Start!"

    }
    else if (starting != "Pick a Square!")
    {
        ending = `[${e.target.id.split("")}]`
        endnode = e.target.id
        endsquare.textContent = ending
        e.target.classList.add("selectedblue")
          e.target.textContent = "End!"
        removeClick()

        document.querySelector(".findpath").disabled = false;
        addPath()

        // now we can find the path!

         

    }

    // if ending is undefined, we add to that next
}

return e.target.id
}

function addPath()
{
let find = document.querySelector(".findpath")

find.addEventListener("click", (e) => {
  //  console.log("path stuff here", Array.from(startnode), Array.from(endnode))
    let start, end;

   
    start = startnode.toString().split('').map(Number);
   
    end = endnode.toString().split('').map(Number);

console.log(start, end)

   knightMoves(start, end)


   
    for (let i = 0; i<items.length; i++)
    {
     
      //  console.log("swithc id ", items[i][0], items[i][1] )

        // activate each square with a nice color to show the path, ig red..
        let id = items[i].join('')

        let pathlist = document.querySelector(".pathlist")
        pathlist.innerHTML += items[i] + "<br>"
      //  console.log(id)
        document.querySelectorAll(".square").forEach((e) => 

    {

            if (e.id == id)
            {
                console.log("found a square!")
                e.classList.add("red")
            }
    }  
    )

    }
})

}


let startsquare = document.querySelector(".startpos")
let endsquare = document.querySelector(".endpos")


startsquare.textContent = starting

endsquare.textContent = ending


// while starting == "Pick a Square!"


if (starting == "Pick a Square!")

    {
        ColorListeners("red")
        addClick()
      

        
        
        
    }



    


 function knightMoves(start,end)

 {
 // create an info array, to hold distance from root and parent..
 // initialize these values all to null to begin with..
 // later we will set the values of the initial node to be 
 // 0 distance with null parent..
 let i = 0
 let bfsInfo = []
 while (i < 8)
 {   
     bfsInfo[i] = []
 
     i++
 }
 for (let i = 0; i<8;i++)
 {
     for (let j = 0; j<8;j++)
     {
        bfsInfo[i][j] = [null,null]
     }
 }
 
 
     path(start,end)
 
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
 
 
 function path(start,end,queue = [])
     {
 // before we even begin, add our first 'starting' node to the queue
 queue.push(start)
 // set its distance to be 0 as its 0 from the root.. and parent to null
 
 bfsInfo[queue[0][0]][queue[0][1]] = [0,null]
 
 
 while (queue.length > 0)
 {
 // while the queue is not empty, take out the first node..
 let firstnode = queue.shift()
 
 // if the first node is the end node we are done
 if (firstnode.toString() == end.toString()) {
 
     // we know how many steps this node was from the parent..
     // we can check that in our bfs info array..
     // now we must recreate the path..
     let steps = bfsInfo[firstnode[0]][firstnode[1]][0]
    
     let result = []
     let current = firstnode
 while (steps >= 0)
 {
 // push the current node onto results
 
 
 result.push(current)
 // now adjust current to be the parent of current node..
 current = bfsInfo[current[0]][current[1]][1]
 
     steps--
 }
 result = result.reverse()
 //console.log(result)
 // variable that holds number of moves for easier log 
 let movecount = bfsInfo[end[0]][end[1]][0]
 
 console.log(`You made it in ${movecount} moves!  Here's your path:`)
 for (let item of result) 
 {
     console.log(item)
     items.push(item)
 }

 }
 
 //console.log(queue)
 // figure out potential moves we have from that first node..
 
 let movelist = moves(firstnode)
 //console.log(movelist)
 
 // before we queue up each of these nodes to be checked, we want to ensure
 // that they have not been visited before..
 // we do that by checking in our info array if they have a [distance,parent]
 // distance == null if they are unvisited.
 
 // for each potential move.. 
 
 movelist.map((elem,ind,arr) => {
     // this checks to ensure that bfsinfo[nodeindex1][nodeindex2] has a 
     // 0 index of null (which means no distance, we have not visited it yet)
     // we set the values below
     if (bfsInfo[elem[0]][elem[1]][0] == null) {
     
         // so we want to set both the distance from the root node, and the parent node as well..
         // this stores the parent nodes distance currently 
        let parentdistance = bfsInfo[firstnode[0]][firstnode[1]][0]
 
        // so we set the distance (parent distance, plus one, one step forward)
        bfsInfo[elem[0]][elem[1]][0] = parentdistance + 1
        // and we set the parent.. 
        bfsInfo[elem[0]][elem[1]][1] = firstnode
        // and as we have not visited this node already (checked above), now put it into our queue!
        queue.push(elem)
     }
     else {
         // we visited the node already, we do not care..
     }
 })
 
 
 }
 
 
 
 
 
 
 
     }
 }
 
