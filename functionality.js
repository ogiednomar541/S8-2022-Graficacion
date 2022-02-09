//========================================
// Variables
//========================================
//Canvas
let board = document.getElementById('board');
//Coordenadas reales del mouse arreglo bidimensional de 2*2
let input = new Array(2);
input[0] = new Array(2);
input[1] = new Array(2);
//Bandera - se obtienen dos puntos para dibujar una línea
let isPair = false;

//========================================
// Obtener puntos
//========================================
window.onload = function(){
    click();
};

function click() {
    board.addEventListener('mousedown', function(e){
        getPoint(e);
    }, false);
}

function getPoint(event){

    const rect = board.getBoundingClientRect();
    const elementRelativeX = event.clientX - rect.left;
    const elementRelativeY = event.clientY - rect.top;
    const x = Math.round(elementRelativeX * board.width / rect.width);
    const y = Math.round(elementRelativeY * board.height / rect.height);
    console.log("x:" + x + " y:" + y);    

    if (isPair) {
        input[1][0] = x;
        input[1][1] = y;
        console.log("Line: p0("+input[0][0]+","+input[0][1]+")  p1("+input[1][0]+","+input[1][1]+");")
        isPair = false;

        
        if ( document.getElementById('md').checked == true){
            DirectMethod();
        }else if ( document.getElementById('dda').checked == true){
            DDAMethod();
        }else{
            BresenhamMethod();
        }
        

    }else{
        input[0][0] = x;
        input[0][1] = y;
        isPair = true;
    }

    drawPoint(x,y);     
    
}

function drawPoint(x,y){	
    let toBoard = document.getElementById("board").getContext("2d");
    toBoard.fillStyle = "#ff2626"; // Red color
    toBoard.fillRect(x,y,1,1);
}


function clear(){
    let toBoard = document.getElementById("board").getContext("2d");
    toBoard.clearRect(0, 0, board.width, board.height);
    isPair = false
    
}

function startTest(){
    window.alert("Testing");
}

