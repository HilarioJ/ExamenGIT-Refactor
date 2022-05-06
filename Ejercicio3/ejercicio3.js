function Grupo (codigo, horario) {
    this.codigo = codigo;
    this.horario = horario;
    this.alumnos = [];
    this.numeroAlumnos = this.alumnos.length;
        
    this.matricular = function matricularAlumno (dni, nombre, nota) {
    this.alumnos.push (Alumno (dni, nombre, nota))}
    
    this.media = function media() {
     let suma = 0;
     for (let i=0; i < this.alumnos.length; i++ ){
           suma += this.alumnos[i].nota;
      }
      return (suma/ this.alumnos.length);
    }
    
    
    function Alumno(dni, nombre, nota) {
        this.dni = dni;
        this.nombre = nombre;
        this.nota = nota;
    }
       let asir1 = Grupo("ASIR1", "tarde".matricular("2345","pepe", 7.8).matricular("4545", "juan", 9.8));

}