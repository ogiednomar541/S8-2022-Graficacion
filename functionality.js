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

        directMethod();

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


//========================================
// Algoritmos 
//========================================


/*  MÉTODO DIRECTO (BÁSICO) */

function directMethod(){
    let dx = 0;
    let dy = 0;
    let m = 0.0;
    let b = 0.0;
    let x1 = input[0][0], x2 = input[1][0], y1 = input[0][1], y2 = input[1][1];

    //Calcular desplazamientos(diferencias) dx = |x1-x2|    dy = |y1-y2|
    dx = Math.abs(x1 - x2);
    dy = Math.abs(y1 - y2);
    //calcular pendiente m = (y2-y1)/(x2-x1) 
    if (x1 != x2){
        m = (y2 - y1) / (x2 - x1);
        //calcular intersección con abcisas en x = 0
        b = y1 - (m * x1);
    }
    

    console.log("Data: dx= "+dx+" dy= "+dy+" m= "+m+" b= "+b)
    if (dx == 0 && dy == 0){
        alert("LAS COORDENADAS DE LOS PUNTOS SELECCIONADOS COINCIDEN: (" + x1+", "+y1+")")
    }else if (dx == dy){
        /**Se trata de una linea con pendiente = 1    su grafica es  y= x */

        var begin = 0, end = 0;
        if (x1 > x2){
            begin = x2;
            end = x1;
        }else if (x1 < x2){
            begin = x1;
            end = x2;
        }

        for (var x = begin + 1; x < end; x++){
            //calcular cada punto perteneciente a la recta
            var y = Math.round(x);
            //localizar el nuevo punto en el tablero
            drawPoint(x,y);
            //Registrar en consola
            console.log(x + "\t" + y);
        }

    }else if (dx == 0){
       
        //Nos encontramos con una linea vertical
        if (y1 > y2){
            begin = y2;
            end = y1;
        }else if (y1 < y2){
            begin = y1;
            end = y2;
        }

        for (var y = begin + 1; y < end; y++){
            //dado que se trata de una recta vertical, la función de la recta es X = x1
            //por lo que cada punto de y = x
            //localizar el nuevo punto en el tablero
            drawPoint(x1,y);
            //Registrar en consola
            console.log(x1 + "\t" + y);
        }

    }else if (dy == 0){

        //Nos encontramos con una linea horizontal
         if (x1 > x2){
            begin = x2;
            end = x1;
        }else if (x1 < x2){
            begin = x1;
            end = x2;
        }

        for (var x = begin + 1; x < end; x++){
            //dado que se trata de una recta horizotal, la función de la recta es y = y1
            //por lo que cada punto de x = y
            //localizar el nuevo punto en el tablero
            drawPoint(x,y1);
            //Registrar en consola
            console.log(x + "\t" + y1);
        }

    }else if (dx > dy){
        /**Flujo normal     Y = mx + b     - Para cada x se calcula una y  */

        var begin = 0, end = 0;
        if (x1 > x2){
            begin = x2;
            end = x1;
        }else if (x1 < x2){
            begin = x1;
            end = x2;
        }

        for (var x = begin + 1; x < end; x++){
            //calcular cada punto perteneciente a la recta
            var y = Math.round(m * x + b);
            //localizar el nuevo punto en el tablero
            drawPoint(x,y);
            //Registrar en consola
            console.log(x + "\t" + y);
        }

    }else if (dx < dy){
        /**Flujo invertido     X = (y-b)/m     - Para cada y se calcula una x  */

        var begin = 0, end = 0;
        if (x1 > x2){
            begin = x2;
            end = x1;
        }else if (x1 < x2){
            begin = x1;
            end = x2;
        }else{
            
        }

        for (var x = begin + 1; x < end; x++){
            //calcular cada punto perteneciente a la recta
            var y = Math.round(m * x + b);
            //localizar el nuevo punto en el tablero
            drawPoint(x,y);
            //Registrar en consola
            console.log(x + "\t" + y);
        }

    }


}
