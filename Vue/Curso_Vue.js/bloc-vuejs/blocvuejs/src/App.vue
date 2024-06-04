<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavMenuComponent from "./components/NavMenuComponent.vue";
</script>

<template>
  <NavMenuComponent/>
  <header>
      <nav>

      </nav>
  </header>

  <RouterView />
</template>
