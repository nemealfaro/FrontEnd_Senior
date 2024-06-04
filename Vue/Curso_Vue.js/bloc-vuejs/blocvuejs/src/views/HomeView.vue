<template>
  <main>
    <div class="home">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-container">
            <div class="d-flex">
              <img src="../assets/logo.svg" alt="logo vue">
            </div>
            <div>
              <br>
              <h2>Mi blog de Vue.js, Comparte, Comenta y Aprende sobre el desarrollo de Vue</h2>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <CardComponent titulo="Hola Mundo"/>
          <CardComponent titulo="Login"/> <!-- Component que se puede reciclar e indicar que le va a llegar una variable llamada titulo con el valor login (X) -->
          
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
  import CardComponent from '../components/CardComponent.vue';
</script>