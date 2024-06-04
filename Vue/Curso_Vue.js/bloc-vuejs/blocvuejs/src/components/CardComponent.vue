<template>
<div class="card">
  <div class="card-body">
    <h5 class="card-title">{{ titulo }}</h5>
    <p class="card-text">{{ parrafo }}</p>
    <slot>
        <!-- Permite entender que se le va a enviar html -->
    </slot>
    <a href="#" class="btn btn-primary">{{ textoBtn }}</a>
  </div>
</div>
</template>

<script setup>
// Javascript

//Definir Props variable a reciclar y el tipo | Es un Objeti
defineProps({
    //titulo : String,
    titulo :{
        type:String,
        required:false
    },
    parrafo: {
        type:String,
        required:true
    },
    textoBtn:{
        type:String,
        required:true
    }
});
 
</script>