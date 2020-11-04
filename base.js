
var modulo=(function () {
    var posicion=0;
    var numpiso=8;
    var puertabierta=true;
 
    function arriba(){
        if(posicion==7){
            return "Ya no hay mas pisos";
        }else{
            console.log(puertacerrar());
            posicion++;
        }    
        console.log(puertaabierta());
        return "Subiste al piso"+ posicion;
    }
    function abajo(){
        if(posicion==0){
            return "Ya no hay mas pisos";
        }else{
            console.log(puertacerrar());
            posicion--;
        }  
        console.log(puertaabierta());  
        return "Bajaste al piso"+ posicion;
    }
  
    function cambiarpiso(destino){
        if(destino<0||destino>7){
         return " Pulsa de 0 al 7 para usar el elevador"  
        
        }else if(destino>posicion){
          console.log(puertacerrar());
        for(i=posicion;i<destino;i++){
            console.log(i);
            posicion++;
        }
        }else{
            console.log(puertacerrar());
            for(i=posicion;i>destino;i--){
                console.log(i);
                posicion--;
            }  
        }
        console.log(puertaabierta());
        return posicion;
    }
    function puertaabierta(){
        puertabierta=true;
    return"Abierta";
    }
    function puertacerrar(){
        puertabierta=false;
        return "Cerrada";

    }

    return { irpiso:cambiarpiso,
             subir:arriba,
             bajar:abajo,
             abrir:puertaabierta,
             cerrar:puertacerrar

           }
 })();
 