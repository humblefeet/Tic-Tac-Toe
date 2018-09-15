/*----- constants -----*/
var reset;
var playerX = "X";
var playerO = "O";
var firstButton;

/*----- app's state (variables) -----*/
var winner;
var first; //who goes first
var squaresClicked = [];
var gameOver;


/*----- cached element references -----*/
//who goes first button
//reset button
    //each square
var leftSpace = document.getElementById('left-space');

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

var board = [topLeft, topMid, topRight, midLeft, midMid, midRight,lowLeft, lowMid, lowRight];

/*----- event listeners -----*/

//when a square is clicked
    //
                                        // topLeft.addEventListener('click',)
//reset button
    //resets the board
//no winner game

/*----- functions -----*/

//determine who goes first
    //randomizer between 1 and 0 (x and o)
    //math.random()
function goesFirst(){
    let whoseFirst = document.createElement('p');
    leftSpace.appendChild(whoseFirst);


    if(Math.random() > 0.5){
        whoseFirst.textContent = "X";
        if(whoseFirst.textContent = "X"){
            first = playerX;
            console.log("Player X is first!");
        }
    }else{
        whoseFirst.textContent = "O";
        if(whoseFirst.textContent = "O"){
            first = playerO;
            console.log("Player O is first!");
        }
    };
    firstButton.removeEventListener('click', goesFirst);

}


firstButton.addEventListener('click',goesFirst);


//alternate between printing an x and o (toggle)
    //dependent upon who is first
function printXOrO(){
    if(first = playerX){

    }else{}
}

//Check for 8 possible win matches


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




//determine 3 in a row
    //predetermine possible wins
        //8 possible wins
    //highlight each square in win scenario
    //print who wins on right side
