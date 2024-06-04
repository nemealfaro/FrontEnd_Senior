<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavMenuComponent from "./components/NavMenuComponent.vue";
</script>

<template>
  <NavMenuComponent/>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>
