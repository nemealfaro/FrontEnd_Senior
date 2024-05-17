//Sacar objetos de una libreria como tal destructurin
const {createApp, ref} = Vue;

//Crear una aplicacion y pasar un objeto
createApp({
    // Monta toda la funcionalidad de Vue
    setup(){
        //ref hace que la variable sea reactiva y reaccione de una vez al cambio en el html
        const titulo = ref("MI GYM");
        const nuevaTarea = ref('');
        const nuevaDescripcion = ref('');
        const tiempoTarea = ref(0);
        const tareas = ref([]);

        //Creo una constante y se retorna
        const agregarTarea =() =>{
            // console.log(nuevaTarea)
            // console.log(nuevaDescripcion)

            // nuevaTarea.value = 'Este valor fue cambiado  desde el metodo' //Imprime este valor dentro de la caja de descripcion
            // nuevaDescripcion.value = 'Estoy aprendiendo Vue'

            //Mediante el push va a insertar un objeto en la variable tareas
            if(nuevaTarea.value !== '' && nuevaDescripcion.value !== '' && tiempoTarea.value !== ''){
            tareas.value.push({
                name: nuevaTarea.value,
                descripcion: nuevaDescripcion.value,
                tiempo: tiempoTarea.value,
                estado: null
            }); };

            //Despues de obtener los valores, se limpian las variables
            nuevaTarea.value = '';
            nuevaDescripcion.value = '';
            tiempoTarea.value = 0;

            //Imprimo las tareas
            console.log(tareas);

        }

        const editarTarea = (index,estado) =>{ //index es la posicion en la que esta la tarea en el array y estado pues el estado en que esta
            tareas.value[index].estado = estado; //va a editar el estado de la tarea que este en X posicion con el nuevo estado
        }

        const eliminarTarea = tarea =>{
            tareas.value.pop(tarea); // del arreglo tareas tomamos el valor y con el metodo pop eliminamos la tarea
        }

        //Todo lo creado se debe retornar
    return{
        titulo,
        nuevaTarea,
        nuevaDescripcion,
        tiempoTarea,
        tareas,
        agregarTarea,
        editarTarea,
        eliminarTarea
    }
    }
}).mount('#app'); //Ese .mountes para montar el codigo sobre html y el #app es como se llama el div en html donde se asigna la app