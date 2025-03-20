<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { routes } from './router/routes'
</script>

<template>
  <header>
    <div class="wrapper p-4">
      <nav class="flex flex-wrap gap-x-4 gap-y-2">
        <RouterLink 
          v-for="route in routes" 
          class="capitalize is-[.router-link-active]:(text-blue-500 underline) fw-500"
          :key="route.path" 
          :to="route.path">
            {{ route.name }}
          </RouterLink>
      </nav>
    </div>
  </header>
  <hr />
  <main class="p-4">
    <RouterView />
  </main>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  text-underline-offset: 0.2em;
}
</style>