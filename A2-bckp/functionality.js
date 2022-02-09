//========================================
// Variables
//========================================
//Canvas
let board = document.getElementById('board');
//Coordenadas reales del mouse arreglo bidimensional de 2*2
let input = new Array(2);
input[0] = new Array(2);
input[1] = new Array(2);
//Bandera - se obtienen dos puntos para dibuiar una línea
let isPair = false;

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
    var invested = false
    if ( document.getElementById('md').checked == true){
        console.time('DirectMethod_T');

        for (var i = 2; i < 1000; i+= 2){
            if (!invested){
                //Vertical NS 
                DirectMethod(i,0,i,1000);
                //Horizontal ID
                DirectMethod(0,i,1000,i);
                //d1
                DirectMethod(0,i,i,0);
                //d2
                DirectMethod(1000-i,0,1000,i);
                //d3
                DirectMethod(1000,1000-i,1000-i,1000);
                //d4
                DirectMethod(i, 1000,0,1000-i);
                invested = true;
            }else{
                //vertical invertida
                DirectMethod(i, 1000, i, 0); 
                //Horizontal
                DirectMethod(1000, i, 0, i); 
                //d1
                DirectMethod(i, 0, 0, i);                 
                //d2         
                DirectMethod(1000,i,1000-i,0);             
                //d3 
                DirectMethod(1000-i, 1000, 1000, 1000-i);   
                //d4                     
                DirectMethod(0,1000-i,i,1000);         
                invested = false;
            }
        
        }
        console.timeEnd('DirectMethod_T');
        alert("Test completado");
        
    }else if ( document.getElementById('dda').checked == true){
        console.time('DDAMethod_T');

        for (var i = 2; i < 1000; i+= 2){
            if (!invested){
                //Vertical NS 
                DDAMethod(i,0,i,1000);
                //Horizontal ID
                DDAMethod(0,i,1000,i);
                //d1
                DDAMethod(0,i,i,0);
                //d2
                DDAMethod(1000-i,0,1000,i);
                //d3
                DDAMethod(1000,1000-i,1000-i,1000);
                //d4
                DDAMethod(i, 1000,0,1000-i);
                invested = true;
            }else{
                //vertical invertida
                DDAMethod(i, 1000, i, 0); 
                //Horizontal
                DDAMethod(1000, i, 0, i); 
                //d1
                DDAMethod(i, 0, 0, i);                 
                //d2         
                DDAMethod(1000,i,1000-i,0);             
                //d3 
                DDAMethod(1000-i, 1000, 1000, 1000-i);   
                //d4                     
                DDAMethod(0,1000-i,i,1000);         
                invested = false;
            }
        
        }
        console.timeEnd('DDAMethod_T');
        alert("Test completado");
    }else{
        console.time('BresenhamMethod_T');

        for (var i = 2; i < 1000; i+= 2){
            if (!invested){
                //Vertical NS 
                BresenhamMethod(i,0,i,1000);
                //Horizontal ID
                BresenhamMethod(0,i,1000,i);
                //d1
                BresenhamMethod(0,i,i,0);
                //d2
                BresenhamMethod(1000-i,0,1000,i);
                //d3
                BresenhamMethod(1000,1000-i,1000-i,1000);
                //d4
                BresenhamMethod(i, 1000,0,1000-i);
                invested = true;
            }else{
                //vertical invertida
                BresenhamMethod(i, 1000, i, 0); 
                //Horizontal
                BresenhamMethod(1000, i, 0, i); 
                //d1
                BresenhamMethod(i, 0, 0, i);                 
                //d2         
                BresenhamMethod(1000,i,1000-i,0);             
                //d3 
                BresenhamMethod(1000-i, 1000, 1000, 1000-i);   
                //d4                     
                BresenhamMethod(0,1000-i,i,1000);         
                invested = false;
            }
        
        }
        console.timeEnd('BresenhamMethod_T');
        alert("Test completado");
    }
    
}

