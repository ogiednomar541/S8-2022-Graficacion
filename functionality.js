//========================================
// Variables
//========================================
let board = document.getElementById('board');


let input = new Array(2);
input[0] = new Array(2);
input[1] = new Array(2);

let dx = 0;
let dy = 0;
let m = 0.0;
let b = 0.0;

let isPair = false;
window.onload = function(){
    click();
};

function click() {
    board.addEventListener('click', function(e){
        getPoint(e);
    }, false);
}

let pointSize = 1;

function getPoint(event){

    let rect = board.getBoundingClientRect();
    if (isPair) {
        input[1][0] = event.clientX - rect.left;
        input[1][1] = event.clientY - rect.top;
        drawPoint(input[1][0], input[1][1]);
    }else{
        input[0][0] = event.clientX - rect.left;
        input[0][1] = event.clientY - rect.top;
        isPair = true;
        drawPoint(input[0][0], input[0][1]);
    }
    
       
    
}

function drawPoint(x,y){	
    let toBoard = document.getElementById("board").getContext("2d");
    toBoard.fillStyle = "#ff2626"; // Red color

    toBoard.beginPath();
    toBoard.arc(x, y, pointSize, 0, Math.PI * 2, true);
    toBoard.fill();
}
