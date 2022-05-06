function Calcular() {

    const sueldo = parseInt(document.getElementById('sueldo').value);
    const antiguedad = parseInt(document.getElementById('antiguedad').value);
     let aumento = CalcularSueldo(sueldo, antiguedad);
     resultado.innerHTML = "El sueldo es " + aumento + "€";

}
/
function CalcularSueldo(sueldo, antiguedad){
    let aumento = 0;
    if (sueldo < 1000) {
        if (antiguedad > 10) {
             aumento = sueldo * 1.20;
            
        }
        else {
            if (antiguedad > 5) {
                aumento = sueldo * 1.15;
            }
            else {
                aumento = sueldo * 1.10;
            }
        }
    }
    else {
        if (antiguedad > 10) {
            aumento = sueldo * 1.10;
        }
        else {
            if (antiguedad > 5) {
                aumento = sueldo * 1.05;
            }
            else {
                aumento = sueldo * 1.01;
            }
        }
    }

    return aumento;
   
}