function ValidaDni(dni){
    const res = /\d{2}\.\d{3}\.\d{3}-[A-Z]$/;
    return res.test(dni);
}
function ValidaNombre(nombre){
  const res = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
  return res.test(nombre);
}
function ValidaApellido(apellido){
    const res = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
    return res.test(apellido);
  }
function ValidaEmail(email)
{
    const res = /\S+@\S+\.\S+/;
    return res.test(email);
}
function ValidaWeb(web){
    const res = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
    return res.test(web)
}
function ValidaContrasena(pass)
{
    let valido = false;
    if(pass.length>=8 && pass.length <=10)
    {
        valido = true;
    }
    return valido;
    
}
 
function creaObjeto(dni, nombre, apellido, email, web, pass){
    this.dni = dni;
    this.nombre = nombre;
    this.apellido=apellido;
    this.email = email;
    this.web = web;
    this.pass = pass;
}

function Validacion(){
    const dni = document.getElementById("dni").value
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const email = document.getElementById("email").value
    const web = document.getElementById("web").value
    const pass = document.getElementById("pass").value
 
    if(!ValidaDni(dni))
    {
        console.log("El DNI no es válido")
    }
    else
    {
        if(!ValidaNombre(nombre))
        {
            console.log("El nombre no es válido")
        }
        else
        {
            if(!ValidaApellido(apellido))
            {
                console.log("El apellido no es válido")
            }
            else
            {
                if(!ValidaEmail(email))
                {
                    console.log("El email no es válido")
                }
                else
                {
                    if(!ValidaWeb(web))
                    {
                        console.log("La dirección web no es válida")
                    }
                    else
                    {
                        if(!ValidaContrasena(pass))
                        {
                            console.log("La contraseña debe tener entre 8 y 10 caracteres")
                        }
                        else
                        {
                            newRegistro = new creaObjeto(dni, nombre, apellido, email, web, pass);
                        }
                    }
                }
            }
        }
    }
}
