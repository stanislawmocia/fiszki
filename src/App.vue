<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar /> <!-- Tu już dodałem ten navbar z navigacją, tylko musicie go wypełnic w pliku Navbar.vue -->
  <font-awesome-icon icon="fa-solid fa-minus" />
  <RouterView /> <!-- To musi zostać bo odpowiada za wyswietlenie widoku -->
</template>

<style scoped></style>
