<template>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="#">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">About</RouterLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
</template>