/*----- constants -----*/
var reset;
var playerX = "X";
var playerO = "O";
var firstButton;
    //win possibilites
var leftWin = ['top-left','mid-left','low-left'];
var vertMidWin = ['top-mid','mid-mid', 'low-mid'];
var rightWin = ['top-right', 'mid-right','low-right'];
var topWin = ['top-left', 'top-mid', 'top-right'];
var horMidWin = ['mid-left', 'mid-mid', 'mid-right'];
var lowWin = ['low-left','low-mid', 'low-right'];
var rightLeftCrossWin = ['top-right', 'mid-mid','low-left'];
var leftRightCrossWin = ['top-left', 'mid-mid', 'low-right'];
var winCombos = [leftWin, vertMidWin, rightWin, topWin, horMidWin, lowWin, rightLeftCrossWin, rightLeftCrossWin];

/*----- app's state (variables) -----*/
var checkForWin;
var first; //who goes first
var xSquaresClicked = [];
var oSquaresClicked = [];
var squaresClicked = [];
var gameOver;
var whoseFirst = document.createElement('p');



/*----- cached element references -----*/
//who goes first button
//reset button
    //each square
var leftSpace = document.getElementById('left-space');
var rightSpace = document.getElementById('right-space');

var topLeft = document.getElementById('top-left');
var topMid = document.getElementById('top-mid');
var topRight = document.getElementById('top-right');
var midLeft = document.getElementById('mid-left');
var midMid = document.getElementById('mid-mid');
var midRight = document.getElementById('mid-right');
var lowLeft = document.getElementById('low-left');
var lowMid = document.getElementById('low-mid');
var lowRight = document.getElementById('low-right');

firstButton = document.getElementById('first');
reset = document.getElementById('reset');
var gameBoard = document.querySelectorAll('board');




/*----- event listeners -----*/
firstButton.addEventListener('click',goesFirst);
reset.addEventListener('click',resetGame);
//when a square is clicked
topLeft.addEventListener('click',printXOrO);
topMid.addEventListener('click',printXOrO);
topRight.addEventListener('click',printXOrO);
midLeft.addEventListener('click',printXOrO);
midMid.addEventListener('click',printXOrO);
midRight.addEventListener('click',printXOrO);
lowLeft.addEventListener('click',printXOrO);
lowMid.addEventListener('click',printXOrO);
lowRight.addEventListener('click',printXOrO);
/*----- functions -----*/

function resetGame(){
    squaresClicked = null;
    xSquaresClicked = null;
    oSquaresClicked = null;
    leftSpace.lastChild.textContent = null;
    rightSpace.lastChild.textContent = null;
    topLeft.lastChild.textContent = "~";
    topMid.lastChild.textContent = "~";
    topRight.lastChild.textContent = "~";
    midLeft.lastChild.textContent = "~";
    midMid.lastChild.textContent = "~";
    midRight.lastChild.textContent = "~";
    lowLeft.lastChild.textContent = "~";
    lowMid.lastChild.textContent = "~";
    lowRight.lastChild.textContent = "~";
    firstButton.addEventListener('click',goesFirst);
    goesFirst();
    board.lastChild.style.color = "red orange";
    topLeft.addEventListener('click',printXOrO);
    topMid.addEventListener('click',printXOrO);
    topRight.addEventListener('click',printXOrO);
    midLeft.addEventListener('click',printXOrO);
    midMid.addEventListener('click',printXOrO);
    midRight.addEventListener('click',printXOrO);
    lowLeft.addEventListener('click',printXOrO);
    lowMid.addEventListener('click',printXOrO);
    lowRight.addEventListener('click',printXOrO);


}

//determine who goes first
    //randomizer between 1 and 0 (x and o)
    //math.random()
function goesFirst(){
    leftSpace.appendChild(whoseFirst);
    let num = Math.random();

    if(num > 0.5){
        whoseFirst.textContent = "X";
        first = "X";
        console.log("Player X is first!"); 
    }else if(num < 0.5){
        whoseFirst.textContent = "O";  
        first = "O";
        console.log("Player O is first!");
    }else{
        alert("Please decide who goes first");
    }
    firstButton.removeEventListener('click', goesFirst);

}


function printXOrO(){
    if(first === "X"){
        event.target.style.color = "blueviolet";
        event.target.textContent = "X";
        xSquaresClicked.push(event.target.parentNode.id);
        squaresClicked.push(event.target.parentNode.id);
        //alternate between printing an x and o (toggle)
        first = "O";
            checkForWin();
        }else if(first === "O"){
        event.target.style.color = "rgb(128, 211, 5)";
        event.target.textContent = "O";
        oSquaresClicked.push(event.target.parentNode.id);
        squaresClicked.push(event.target.parentNode.id);
        //alternate between printing an x and o (toggle)
        first = "X";
            checkForWin();
    }

}

       

// when clicking on each square an x or o is printed
    //manipulate the <p> for each node

//turn off click after game is won
function removeClick(event){
    
    topMid.removeEventListener('click',printXOrO);
    topRight.removeEventListener('click',printXOrO);
    midLeft.removeEventListener('click',printXOrO);
    midMid.removeEventListener('click',printXOrO);
    midRight.removeEventListener('click',printXOrO);
    lowLeft.removeEventListener('click',printXOrO);
    lowMid.removeEventListener('click',printXOrO);
    lowRight.removeEventListener('click',printXOrO);
}

//Check for 8 possible win matches
    //includes() method
// function winMatch(arr){
//      if(arr.indexOf(winCombos (leftWin[0,1,2]) || (vertMidWin[0,1,2]) || (rightWin[0,1,2]) || (topWin[0,1,2]) || (horMidWin[0,1,2]) || (lowWin[0,1,2] )||
//         (rightLeftCrossWin[0,1,2]) || (leftRightCrossWin[0,1,2]))){
//             console.log("yes");}
//                 }
//loop through array of win combinations
// function winComboLoop(x){
//     for(let i = 0; i < winCombos.length; i++){
//       if(x.includes[[i]]){;
//         return true;
//      }
//     }   
// }  

//print who wins on right side  
function checkForWin(){
    let winner = document.createElement('p');
    rightSpace.appendChild(winner);
    if((oSquaresClicked.length>=3)||(xSquaresClicked.length>=3)){
        if(oSquaresClicked.indexOf(leftWin[0,1,2]|| vertMidWin[0,1,2]|| rightWin[0,1,2]|| topWin[0,1,2]|| horMidWin[0,1,2]|| lowWin[0,1,2]|| rightLeftCrossWin[0,1,2]|| rightLeftCrossWin)>-1){
            winner.textContent = "O WINS!";
            console.log("Player O wins!");
                target.removeEventListener('click',printXOrO, false);
            }
        }else if(xSquaresClicked.indexOf(leftWin[0,1,2]|| vertMidWin[0,1,2]|| rightWin[0,1,2]|| topWin[0,1,2]|| horMidWin[0,1,2]|| lowWin[0,1,2]|| rightLeftCrossWin[0,1,2]|| rightLeftCrossWin)>-1){
            winner.textContent = "X WINS!"
            console.log("Player X wins!");
                target.removeEventListener('click',printXOrO, false);
                    }else if(squaresClicked.length === 9){
            //no winner game
            console.log("Stalemate!");
            winner.textContent = "TIE";
            target.removeEventListener('click',printXOrO, false);
                   }
    }






document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
        // topLeft = document.getElementById('top-left');
        // topMid = document.getElementById('top-mid');
        // topRight = document.getElementById('top-right');
        // midLeft = document.getElementById('mid-left');
        // midMid = document.getElementById('mid-mid');
        // midRight = document.getElementById('mid-right');
        // lowLeft = document.getElementById('low-left');
        // lowMid = document.getElementById('low-mid');
        // lowRight = document.getElementById('low-right');

        // firstButton = document.getElementById('first');
        // reset = document.getElementById('reset');
        // board = document.getElementById('board');
    })





