<template>
  <main>
    <div class="home">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-container">
            <div class="d-flex">
              <img src="../assets/logo.svg" alt="logo vue" style="height: 350px;" />
            </div>
            <div>
              <br />
              <h2>
                Mi blog de Vue.js, Comparte, Comenta y Aprende sobre el
                desarrollo de Vue
              </h2>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <!-- <CardComponent titulo="Login" parrafo="Prueba de" textoBtn="Hola2"/> -->
          <!-- Component que se puede reciclar e indicar que le va a llegar una variable llamada titulo con el valor login (X) -->
          <card-component class="card-component" textoBtn="Login">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su correo"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingrese su contraseña"/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              </div>
            </form>
          </card-component>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import CardComponent from "../components/CardComponent.vue";
</script>

<style scoped>
img{
  margin: 1em auto 0 auto;
}

.home{
  max-width: 895px;
  margin: auto;
  padding-top: 150px;
}

@media screen and (max-width:992px){
  .home{
  max-width: 895px;
  margin: auto;
  padding-top: 20px;
}
}

.img-container{
  display: flex;
  flex-direction: column;
}

.card-component{
  max-width: 550px;
  margin-top: 4em;
}

</style>