<script setup>
import useRickStore from "../stores";

const store = useRickStore();

const applyFilter = async () => {
  await store.updateData();
};
</script>

<template>
  <div class="grid gap-2 justify-content-between px-3 my-3">
    <div class="grid grid-nogutter gap-2 w-full sm:w-auto">
      <input
        class="sm:w-15rem w-full h-2rem text-lg border-round-md px-2"
        type="text"
        v-model="store.filterParams.name"
        placeholder="Фильтр по имени"
      />
      <select
        class="h-2rem w-full sm:w-auto text-lg border-round-md px-2"
        v-model="store.filterParams.status"
      >
        <option value="">Без фильтра</option>
        <option value="alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
    <div class="w-full sm:w-auto">
      <button @click="applyFilter" class="h-2rem w-full text-lg px-4" type="button">
        Применить
      </button>
    </div>
  </div>
</template>

<style scoped></style>
