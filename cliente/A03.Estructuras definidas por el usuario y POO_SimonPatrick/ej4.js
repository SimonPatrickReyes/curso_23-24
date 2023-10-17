const cursos=["1º","2º","3º","4º"]
const grupos=["A","B","C","D"]
const modulos=["DAW","DIW","DWEC","DWES"]
const niveles=[1,2,3,4]

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    getInfo() {
        alert(`Nombre: ${this.nombre}, edad: ${this.edad}, genero: ${this.genero}`);
    }
};

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    matriculado() {
        this.curso = cursos[Math.round(Math.random()*3)];
        this.grupo = grupos[Math.round(Math.random()*3)];
    }

}

class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre, edad, genero)
        this.modulo = modulo
        this.nivel = nivel
    }
    imparte() {
        this.modulo = modulos[Math.round(Math.random()*3)];
        this.nivel = niveles[Math.round(Math.random()*4)];
    }

}

const persona1 = new Persona("jose", 41, "hombre");
const profesor1 = new Profesor("paco",43,"hombre");
const estudiante1 = new Estudiante("hector",21,"hombre");

persona1.getInfo()
estudiante1.matriculado()
profesor1.imparte()

estudiante1.getInfo()
profesor1.getInfo()








