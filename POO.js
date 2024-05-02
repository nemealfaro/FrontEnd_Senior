// let Marcas = {
//     dia : 1,
//     mes: '',
//     anno:'',
//     horaEntrada : 700,
//     horaSalida : 500    
// }


// let Personas = {
//     nombre : 'Neme',
//     id : '305090799',
//     marcas : []
// }

// console.log(Marcas)
// console.log(Personas)

//Molde o Constructor de Personas, un reciclado para crear objetos
//Dentro del molde o constructor se pueden tener atributos y funcionaliidades
//Objeto declarativa
function Personas(nombre, apellidos) {
    //Cod Dinamico
    this.nombre = nombre
    this.apellidos = apellidos
    this.getNombreCompleto = function() {
        return `${this.nombre} ${this.apellidos}`
    }

    //Cod Quemado
    //this.nombre = 'Neme'
    //this.apellidos = 'Alfaro Perez'
}
//Creeme en persona una nueva persona 
//Cod Dinamico
const persona = new Personas('Nem','Alfaro Perez')
const persona2 = new Personas('Juan', 'Campbell')
//Cod Quemado
//const persona = new Personas(Neme);

String.prototype.DecirHola = function () {
    return `${this} hola gente`
}


//Impresion de Obj
console.log(persona)
console.log(persona.nombre)
console.log(persona2.getNombreCompleto())
console.log('Juan Campbell G'.DecirHola())


//Otra forma de un constructor
//Objeto literal
class Persona3 {
    constructor(nombres, apellidos){
        this.nombre = nombres
        this.apellidos = apellidos
        this.getName = function () {
            return `${this.nombre} ${this.apellidos}`
        }
    }
}

const personaClase = new Persona3('Laura', 'Perez');
console.log(personaClase)


//Declarar una clase literal y una declarativa de un Objeto Car (marca,modelo,placa,km recorridos) 
//ademas una funcion que devuelva los km recorridos