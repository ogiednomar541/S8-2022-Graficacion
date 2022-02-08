function BresenhamMethod(){
    let dx = 0;
    let dy = 0;
    let x1 = input[0][0], x2 = input[1][0], y1 = input[0][1], y2 = input[1][1];

    //Calcular desplazamientos(diferencias) dx = |x1-x2|    dy = |y1-y2|
    dx =x2 - x1 ;// Math.abs(x1 - x2);
    dy = y2 - y1; //Math.abs(y1 - y2);

    console.log("Data: dx= "+dx+" dy= "+dy);
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

    }else if(dx > dy){
        //decisión inicial
        var p = 2 * dy - dx;
        var last = p;
        var xx = 0, yy = 0;
        if (x1 > x2){
            xx = x2;
            yy = y2;
        }else if (x1 < x2){
            xx = x1;
            yy = y1;        
        }

        for (var k = 0; k < dx - 1; k++){
            if (p>=0){
                drawPoint(xx++,yy++);
                p = last + 2*dy - 2*dx;
                last = p;
            }else{
                drawPoint(xx++,yy);
                p = last + 2*dy;
                last = p;
            }
            console.log(xx +"\t"+yy);
        }
    }else if(dx < dy){
        //decisión inicial
        var p = 2 * dy - dx;
        var last = p;
        var xx = 0, yy = 0;

        if (y1 > y2){
            xx = x2;
            yy = y2;
        }else if (y1 < y2){
            xx = x1;
            yy = y1;        
        }

        for (var k = 0; k < dx - 1; k++){
            if (p>=0){
                drawPoint(xx++,yy++);
                p = last + 2*dy - 2*dx;
                last = p;
            }else{
                drawPoint(xx++,yy);
                p = last + 2*dy;
                last = p;
            }
        }
    }
}