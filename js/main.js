/*----- constants -----*/
var reset;
var playerX = "X";
var playerO = "O";
var firstButton;

/*----- app's state (variables) -----*/
var checkForWin;
var first; //who goes first
var xSquaresClicked = [];
var oSquaresClicked = [];
var gameOver;


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
board = document.getElementById('board');

//win possibilites
// var leftWin =  document.getElementsByClassName('leftWin');
// var midWin = document.getElementsByClassName('midWin');
// var rightWin = document.getElementsByClassName('righWin')
// var topWin = document.getElementsByClassName('topWin');


var board = [topLeft, topMid, topRight, midLeft, midMid, midRight,lowLeft, lowMid, lowRight];

/*----- event listeners -----*/



//reset button
    //resets the board
             //reset..addEventListener('click',resetGame);   make resetGame function
//no winner game

/*----- functions -----*/

//determine who goes first
    //randomizer between 1 and 0 (x and o)
    //math.random()
function goesFirst(){
    let whoseFirst = document.createElement('p');
    leftSpace.appendChild(whoseFirst);
    let num = Math.random();

    if(num > 0.5){
        whoseFirst.textContent = "X";
        first = "X";
        console.log("Player X is first!"); 
    }else if(num < 0.5){
        whoseFirst.textContent = "O";  
        first = playerO;
        console.log("Player O is first!");
    }else{
        alert("Please decide who goes first");
    }

    firstButton.removeEventListener('click', goesFirst);

}


firstButton.addEventListener('click',goesFirst);


//alternate between printing an x and o (toggle)
    //dependent upon who is first
        //add each clicked square to squares clicked array

function printXOrO(event){
    if(first === "X"){
        event.target.textContent = "X";
        xSquaresClicked.push(event.target.parentNode.id);

    }else if(first === "O"){
        event.target.textContent = "O";
        oSquaresClicked.push(event.target.parentNode.id);

    }

}
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

// when clicking on each square an x or o is printed
    //manipulate the <p> for each node


//Check for 8 possible win matches
    //includes() method
function match(x){
    if(x.includes('top-left'&&'top-mid'&&'top-right')||('mid-left'&&'mid-mid'&&'mid-right')
    ||('low-left'&&'low-mid'&&'low-right')||('top-left'&&'mid-left'&&'low-left')
    ||('top-right'&&'mid-right'&&'low-right')||('top-mid'&&'mid-mid'&&'low-mid')
    ||('top-left'&&'mid-mid'&&'low-right')||('top-right'&&'mid-mid'&&'low-left'
    )){
        return true;
    }else{
        return false;
    }
}
    //highlight each square in win scenario
    //print who wins on right side
function checkForWin(){
    let winner = document.createElement('p');
    rightSpace.appendChild(winner);

    if(xSquaresClicked.length >= 3 || oSquaresClicked.length >= 3){
        if(match(xSquaresClicked)){
            winner.textContent = "X WINS!";
            console.log("Player X wins!");
        }else if(match(oSquaresClicked)){
            winner.textContent = "O WINS!"
            console.log("Player O wins!");
        }else{
            console.log("Stalemate!");
            win.textContent = "TIE"
        }
    }

}
checkForWin();
    //highlight each square in win scenario
    //print who wins on right side

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





