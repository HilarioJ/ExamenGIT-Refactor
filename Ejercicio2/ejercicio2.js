function Ordenar(){
    const array = document.getElementById("cadena").value.split(" ");
      
        
    while(array.length>=1){
        CalculaMayorPalabra(array);
    }
}

function CalculaMayorPalabra(array){
    var mayor = array[0].length;
    var indice;
    for(var i=0;i<array.length;i++){
        if(array[i].length>=mayor){
            mayor=array[i].length;
            indice = i;
        }
    }
    console.log(array[indice])
    array.splice(indice,1);
}