import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useRickStore = defineStore("RickStore", () => {
  const data = ref(null);
  const filterParams = ref({
    name: "",
    status: ""
  });

  const filterString = computed(() => {
    let str = ""
    if (filterParams.value.name != "") { str += `&name=${filterParams.value.name}` }
    if (filterParams.value.status != "") { str += `&status=${filterParams.value.status}` }

    return str
  })

  async function updateData(url = "https://rickandmortyapi.com/api/character/?") {
    
    const response = await fetch(url + filterString.value);
    const result = await response.json();

    data.value = result;
  }

  return { data, filterParams, updateData };
});

export default useRickStore;
