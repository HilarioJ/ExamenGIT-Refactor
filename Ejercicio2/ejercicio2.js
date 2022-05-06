function Ordenar(){
    const array = document.getElementById("cadena").value.split(" ");
           
    while(array.length>=1){
         let indice = CalculaMayorPalabra(array);
         console.log(array[indice])
         array.splice(indice, 1)
    }
}

function CalculaMayorPalabra(array){
    let mayor = array[0].length;
    let indice;
    for(let i=0;i<array.length;i++){
        if(array[i].length >= mayor){
            mayor=array[i].length;
            indice = i;
        }
    }
        return indice;
}