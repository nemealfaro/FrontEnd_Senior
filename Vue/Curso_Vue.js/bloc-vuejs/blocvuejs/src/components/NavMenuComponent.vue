<template>
   <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container justify-content-evenly">
          <RouterLink class="nav-link active" aria-current="page" to="/"><span class="material-icons-round">home</span></RouterLink>
          <RouterLink class="nav-link" aria-current="page" to="/about"><span class="material-icons-round">info</span></RouterLink>
  </div>
</nav>
</template>

<style scoped>
/* Inicio del CSS */

.material-icons-round{
  color: white;
  font-size: 1.5em;
  background-color: rgb(52, 72, 94);
  padding: 0.3em;
  border-radius: 50%;
  margin: 0.1em;
}

</style>