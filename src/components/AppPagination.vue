<script setup>
import useRickStore from "../stores";

const store = useRickStore();

</script>

<template>
    <div class="flex justify-content-center gap-4 py-4">
        <button class="h-2rem w-7rem text-lg" @click="store.updateData(store.data.info.prev)" :disabled="!store.data.info.prev">Prev Page</button>
        <button class="h-2rem w-7rem text-lg" @click="store.updateData(store.data.info.next)" :disabled="!store.data.info.next">Next Page</button>
    </div>
</template>

<style scoped></style>
