// let nombre = "Nem Alfaro"
// let edad = 17
// //char
// let estado = "A" 

// //let edad = prompt("Ingrese su edad: ")

// //Programa que defina si la persona es mayor de edad 18
// //=== sign igual | > sign mayor | > sign menor
// //Metodo
// function CalcularMayoEdad() {
//     if (edad >= 18) {
//         console.log(`${nombre} es mayor de edad`)
//     } else {
//         console.log(`${nombre} es menor de edad`)
//     }
// }

// //Funcion
// function Funcion_CalcularMayoEdad() {
//     if (edad >= 18) {
//        return `${nombre} es mayor de edad`;
//     } else {
//         return `${nombre} es menor de edad`;
//     }
// }

// CalcularMayoEdad();
// let respuesta = Funcion_CalcularMayoEdad();
// console.log(respuesta) // o console.log(Funcion_CalcularMayoEdad())

// // Suma + | Resta - | Div / | Multi *
// function Suma(numero1, numero2) {
//     let num1 = 22;
//     let num2 = 22;

//     let resul = num1 + num2;
//     return resul;
// }

// console.log(Suma())
// console.log(Suma(22,120))


// let ArrayPersonas = ["Nem","Cam","Lau","Jas"]
// console.log(ArrayPersonas)

//Funcion que valide si esta o no una persona
//function ExistePersona(nombre) {
    //let existe = false;
    //      Inicio            Parada          Aumenta
   // for (let i = 0; i < ArrayPersonas.length; i++) {
        //console.log(ArrayPersonas[i])
        
        //if (ArrayPersonas[i] === nombre) {
          ///  existe = true;
       // }
   // }
    // ArrayPersonas.forEach(x => {
    //     console.log(x)
    // })
   // return existe;
//}

// console.log(ExistePersona("Pedro"))

// console.log("Probando cambios2")


//Hacer una funcion que determine si es par o impar, pasar como parametro el # (devuelve)

function Par_Impar(num) {
    resultado = num % 2
    if (resultado === 0) {
        return `El num ${num} es Par`;
    }else{
        return `El num ${num} es Impar`;
    }

}
console.log(Par_Impar(3))

//Hacer un metodo que calcule la edad con la fecha de nacimiento y lo imprima
//Es importante colocar los datos igual que los parametros el orden
 function Calcular_Edad(AnnActual, AnnNac) {

     let edad = AnnActual - AnnNac
     return `La edad es de ${edad} años`
 }

console.log(Calcular_Edad(2024,1998))


//Otra forma de realizar es 
let AnnActual = 2024
let AnnNac = 1998

function Calcular_Edad2(AnnActual, AnnNac) {

    let edad = AnnActual - AnnNac
    return `La edad es de ${edad} años`
}

console.log(Calcular_Edad2(AnnActual,AnnNac))
