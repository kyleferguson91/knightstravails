console.log("driver script")
let starting = "Pick a Square!", ending = "Pick a Square!"


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
        starting = e.target.id
        startsquare.textContent = `[${e.target.id.split("")}]`
        e.target.classList.add("selected")
        e.target.textContent = "Start!"

    }
    else if (starting != "Pick a Square!")
    {
        ending = `[${e.target.id.split("")}]`
        endsquare.textContent = ending
        e.target.classList.add("selectedblue")
          e.target.textContent = "End!"
        removeClick()
        ColorListeners("transparent")
        document.querySelector(".findpath").disabled = false;
    }

    // if ending is undefined, we add to that next
}

return e.target.id
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