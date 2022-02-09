//========================================
// MÉTODO DIRECTO (BÁSICO)  
//========================================

function DirectMethod(x1, x2, y1, y2){
    let dx = 0;
    let dy = 0;
    let m = 0.0;
    let b = 0.0;

    //Calcular desplazamientos(diferencias) dx = |x1-x2|    dy = |y1-y2|
    dx = Math.abs(x1 - x2);
    dy = Math.abs(y1 - y2);
    //calcular pendiente m = (y2-y1)/(x2-x1) 
    if (x1 != x2){
        m = (y2 - y1) / (x2 - x1);
        //calcular intersección con abcisas en x = 0
        b = y1 - (m * x1);
    }
    

    //console.log("Data: dx= "+dx+" dy= "+dy+" m= "+m+" b= "+b)
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
            //console.log(x + "\t" + y);
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
            //console.log(x1 + "\t" + y);
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
            //console.log(x + "\t" + y1);
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
            //console.log(x + "\t" + y);
        }

    }else if (dx < dy){
        /**Flujo invertido     X = (y-b)/m     - Para cada y se calcula una x  */

        var begin = 0, end = 0;
        if (y1 > y2){
            begin = y2;
            end = y1;
        }else if (y1 < y2){
            begin = y1;
            end = y2;
        }

        for (var y = begin + 1; y < end; y++){
            //calcular cada punto perteneciente a la recta
            var x = Math.round((y -b) / m);
            //localizar el nuevo punto en el tablero
            drawPoint(x,y);
            //Registrar en consola
            //console.log(x + "\t" + y);
        }

    }
    

}