function Grupo (codigo, horario) {
    this.codigo = codigo;
    this.horario = horario;
    this.alumnos = [];
    
    this.matricular = function matricular (dni, nombre, nota) {
    this.alumnos.push (Crea (dni, nombre, nota));
    }
    
    function Crea(dni, nombre, nota) {
        this.dni = dni;
        this.nombre = nombre;
        this.nota = nota;
        return alum;
    }
    
    grupo.num = function Alumnos () {
         var num = this.alumnos.length;
         return num;
    };
    
    grupo.media = function Media () {
         var suma = 0;
         for (let i=0; i < this.alumnos.length; i++ ){
               suma += this.alumnos[i].nota;
          }
          return (suma/ this.alumnos.length);
    };
    
    return grupo;
    };
    
    var asir1 = Grupo("ASIR1", "tarde");
    
    asir1.matricular("2345", "pepe", 7.8);
    asir1.matricular("4545", "juan", 9.8);
     