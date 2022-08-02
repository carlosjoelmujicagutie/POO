class Estudiante {
    nombre = "carlos joel mujica"
    asignaturas = ["javascript", "html", "css"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignatura: this.asignaturas
        }
    }
}

const estudiante = new Estudiante();
console.log(estudiante.obtenDatos());