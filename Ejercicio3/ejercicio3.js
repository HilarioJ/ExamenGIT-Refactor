function grupo (codigo, horario) {
    this.codigo = codigo;
    this.horario = horario;
    this.alumnos = [];
    this.numeroAlumnos = this.alumnos.length;        
    this.matricularAlumno = function matricular(dni, nombre, nota){
         this.alumnos.push (alumno (dni, nombre, nota))
    }
    
    this.media = function media() {
     let suma = 0;
     for (let i=0; i < this.numeroAlumnos; i++ ){
           suma += this.alumnos[i].nota;
      }
      return (suma/ this.numeroAlumnos);
    }
      
    
    function alumno(dni, nombre, nota) {
        this.dni = dni;
        this.nombre = nombre;
        this.nota = nota;
    }
    
       let asir1 = grupo("ASIR1", "tarde".matricularAlumno("2345","pepe", 7.8).matricularAlumnos("4545", "juan", 9.8));

}