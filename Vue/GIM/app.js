//Sacar objetos de una libreria como tal destructurin
const {createApp,ref} = Vue;

//Crear una aplicacion y pasar un objeto
createApp({
    // Monta toda la funcionalidad de Vue
    setup(){
        //ref hace que la variable sea reactiva y reaccione de una vez al cambio en el html
        const titulo = ref("MI GIM")

        //Todo lo creado se debe retornar
    return{
        titulo
    }
    }
}).mount('#app') //Ese .mountes para montar el codigo sobre html y el #app es como se llama el div en html donde se asigna la app