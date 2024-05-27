<script setup>
import { defineProps } from 'vue';

const props = defineProps(["char"]);
</script>

<template>
  <div class="card-item grid grid-nogutter border-round-xl shadow-4 sm:h-14rem">
    <img class="sm:border-round-left-xl sm:border-noround-top border-round-top-xl h-full w-full sm:w-auto" :src="props.char.image" alt="" />
    <div class="flex flex-column justify-content-between text-white py-2 px-2">
      <div>
        <h2 class="text-2xl line-height-1 my-1" id="name">{{ props.char.name }}</h2>
        <p class="flex align-items-center my-1" id="status">
          <span
            class="status_icon"
            :class="`status_${props.char.status}`"
          ></span>
          <span>{{ props.char.status }} - {{ props.char.species }}</span>
        </p>
      </div>
      <div>
        <p class="my-1 text-gray-500">Last known location:</p>
        <p class="my-1" id="last_location">Citadel of Ricks</p>
      </div>

      <div>
        <p class="my-1 text-gray-500">First seen in:</p>
        <p class="my-1" id="first_seen">Pilot</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-item {
  background-color: #3c3e44;
}

.status_icon {
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;
}

.status_Alive {
    background: #55cc44;
}

.status_Dead {
    background: #d63d2e;
}

.status_unknown {
    background: #9e9e9e;
}
</style>
