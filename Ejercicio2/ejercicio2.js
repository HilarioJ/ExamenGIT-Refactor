function Ordenar(){
    const array = document.getElementById("cadena").value.split(" ");
      
        
    while(array.length>=1){
        CalculaMayorPalabra(array);
    }
}

function CalculaMayorPalabra(array){
    let mayor = array[0].length;
    let indice;
    for(let i=0;i<array.length;i++){
        if(array[i].length>=mayor){
            mayor=array[i].length;
            indice = i;
        }
    }
    console.log(array[indice])
    array.splice(indice,1);
}