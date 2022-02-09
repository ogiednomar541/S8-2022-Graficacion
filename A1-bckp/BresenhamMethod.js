function BresenhamMethod(){
    let x1 = input[0][0], x2 = input[1][0], y1 = input[0][1], y2 = input[1][1];
    var x = x1, y = y1, dx, dy, last, twoDy, twoDyLessTwoDx, xSlp = 1, ySlp = 1;   
    
    //Calcular desplazamientos
    dx = (x2 - x1);
    dy = (y2 - y1);
    //Definir sentido
    if (dx < 0) {     
        dx = -dx;       
        xSlp = -1;
    }

    if (dy < 0) {             
        dy = -dy;                   
        ySlp = -1;
    }

    //Determinar puntos
    if (dx == 0 && dy == 0){
        alert("LAS COORDENADAS DE LOS PUNTOS SELECCIONADOS COINCIDEN: (" + x1+", "+y1+")")
    }else if (dx > dy) { 
        //Flujo normal calcular en base a y
        //Calcular valor inicial
        last = 2 * dy - dx; 
        //Calcular constantes 2dy y 2dy-2dx
        twoDy = 2 * dy; 
        twoDyLessTwoDx = 2 * dy - 2 * dx; 
        //obtener puntos
        while (x != x2) {
            if (last < 0) {      
                //p (k+1) = pk + 2dy
                last += twoDy;  
            } else {
                //se incrementa coordenada en y                 
                y += ySlp;  
                //p (k+1) = pk + (2dy - 2dx)
                last += twoDyLessTwoDx;  
            }
            drawPoint(x,y);
            x += xSlp;     

        }

    } else {  
        //Flujo normal calcular en base a x
        //Calcular valor inicial
        last = 2 * dx - dy; 
        //Calcular constantes 2dx y 2dx-2dy
        twoDy = 2 * dx;       
        twoDyLessTwoDx = 2 * dx - 2 * dy;  
        //obtener puntos
        while (y != y2) {       
            if (last < 0) {
                //p (k+1) = pk + 2dx        
                last += twoDy;  
            } else {         
                //se incrementa coordenada en x    
                x += xSlp;    
                //p (k+1) = pk + (2dx - 2dy)
                last += twoDyLessTwoDx; 
            }
            drawPoint(x,y);
            //coordenada en y incrementa en todos los casos
            y += ySlp;       

        }
    }
}