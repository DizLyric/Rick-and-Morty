<script setup>
import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue';
import AppFilter from './components/AppFilter.vue';
import AppPagination from './components/AppPagination.vue';
import { onMounted, ref } from 'vue';
import useRickStore from './stores'

const store = useRickStore()

onMounted(async () => {
  await store.updateData()
})
</script>

<template>
  <AppHeader />

  <div class="px-4" v-if="store.data">
    <AppFilter />
    <div class="cards grid">
      <div class="col-12 xl:col-6" v-for="(char) in store.data.results" :key="char.id" >
        <AppCard :char="char" />
      </div>
    </div>
    <AppPagination />
  </div>

  <div v-else class="loader flex justify-content-center align-items-center h-30rem">
    <h1 class="text-white">Загрузка...</h1>
  </div>

  
</template>

<style scoped>
  
</style>