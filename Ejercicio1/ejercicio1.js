function Calcular() {

    const sueldo = parseInt(document.getElementById('sueldo').value);
    const antiguedad = parseInt(document.getElementById('antiguedad').value);
     let aumento = CalcularAumento(sueldo, antiguedad);
     resultado.innerHTML = "El sueldo es " + aumento + "€";

}

function CalcularAumento(sueldo, antiguedad){
    let aumento = 0;
    let porcentaje;
    if (sueldo < 1000) {
        if (antiguedad > 10) {
             porcentaje = 1.20;
            
        }
        else {
            if (antiguedad > 5) {
                porcentaje =  1.15;
            }
            else {
                porcentaje =  1.10;
            }
        }
    }
    else {
        if (antiguedad > 10) {
            porcentaje =  1.10;
        }
        else {
            if (antiguedad > 5) {
                porcentaje =  1.05;
            }
            else {
                porcentaje =  1.01;
            }
        }
    }
    
    aumento = sueldo * porcentaje;

    return aumento;   

}