<template>
  <div class="h-screen grid grid-cols-2 w-full max-w-[80%] mx-auto py-14">
    <div class="">

    </div>

    <div>
      <ul class="flex flex-col gap-5">
        <li v-for="item in data" :key="item.id">
          {{ item.title }}
        </li>
      </ul>

      <div class="flex flex-col items-start gap-2 mt-5">
        <small class="text-red-500">{{ errorMsg }}</small>
        <input class="border border-black" type="text" v-model="title">
        <button type="submit" @click="create">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let title = ref('');

let data = ref(JSON.parse(localStorage.getItem('data')) || []);

let errorMsg = ref('');

const create = () => {
  if (!title.value) {
    errorMsg.value = 'Please enter a title';
    return
  };

  data.value.push({
    id: data.value.length + 1,
    title: title.value
  })

  title.value = '';
  errorMsg.value = '';

  localStorage.setItem('data', JSON.stringify(data.value));
}


</script>

<style scoped></style>
