<script setup>
// Inicio del Javascript
import {ref} from 'vue'
const nombre = ref('Nem');
const holaMundo = ref('Hola Mundo');
</script>

<template>
<!-- Inicio del HTML -->
<!-- Aca se puede pegar toda la tarea GYM ya hecha -->
<div>
    <p>Mi primer componente en Vue.js</p>
    <button id="btn">{{nombre}}</button>

    <label>{{holaMundo}}</label>
</div>
</template>

<style scoped>
/* Inicio del Style */
#btn{
    background-color: lightblue;
}
</style>