<template>
  <div class="h-screen grid grid-cols-2 w-full max-w-[80%] mx-auto py-14">
    <div class="">

    </div>

    <div>
      <ul class="flex flex-col gap-5">
        <li v-for="item in data" class="flex items-center gap-2" :key="item.id">
          {{ item.title }}

          <button @click="edit(item)">edit</button>
          <button @click="remove(item.id)">delete</button>
        </li>
      </ul>

      <div class="flex flex-col items-start gap-2 mt-5">
        <small class="text-red-500">{{ errorMsg }}</small>
        <input class="border border-black" type="text" v-model="title">
        <button type="submit" v-if="!isEdit" @click="create">Add</button>
        <button type="submit" v-else @click="update">Update</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let title = ref('');
let data = ref(JSON.parse(localStorage.getItem('data')) || []);
let errorMsg = ref('');
let isEdit = ref(false);
let editId = ref(null);

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

const edit = (item) => {
  title.value = item.title
  editId.value = item.id
  isEdit.value = true
  errorMsg.value = ''
}

const update = () => {
  if (!title.value) {
    errorMsg.value = 'Please enter a title';
    return
  };

  const index = data.value.findIndex(i => i.id === editId.value)

  if (index !== -1) {
    data.value[index].title = title.value;
    localStorage.setItem('data', JSON.stringify(data.value));
  }

  title.value = '';
  errorMsg.value = '';
  isEdit.value = false;
  editId.value = null;
}

const remove = (id) => {
  data.value = data.value.filter(i => i.id !== id);
  localStorage.setItem('data', JSON.stringify(data.value));
}

</script>

<style scoped></style>
