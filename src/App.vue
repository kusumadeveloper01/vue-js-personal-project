<template>
  <div class="h-screen grid grid-cols-2 w-full max-w-[80%] mx-auto py-14">
    <div class="">

    </div>

    <div>
      <h1 class="text-2xl font-medium">To do</h1>
      <div class="border-[0.5px] border-b mt-5 w-full"></div>
      <ul class="flex flex-col gap-5 mt-5">
        <li v-for="item in data" class="flex items-center w-full justify-between" :key="item.id">
          <div class="flex items-center gap-2">
            <input checked="" class="check" type="checkbox">
            <p>
              {{ item.title }}
            </p>
          </div>

          <div class="flex items-center gap-2">
            <i class="ri-edit-line cursor-pointer text-blue-500" @click="edit(item)"></i>
            <i class="ri-delete-bin-5-line cursor-pointer text-red-500" @click="remove(item.id)"></i>
          </div>
        </li>
      </ul>

      <small class="text-red-500">{{ errorMsg }}</small>
      <div class="flex flex-row items-center justify-between w-full mt-5">
        <input placeholder="add new task..." class="placeholder:text-gray-500 outline-none py-2" type="text"
          v-model="title">

        <div>
          <button type="submit" v-if="!isEdit" @click="create">Add</button>
          <button type="submit" v-else @click="update">Update</button>
        </div>
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

<style scoped>
/* From Uiverse.io by ke1221 */
.check {
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 2px;
  appearance: none;
  background-color: #bbb;
  transition: all .3s;
}

.check::before {
  content: '';
  position: absolute;
  border: solid #fff;
  display: block;
  width: .3em;
  height: .6em;
  border-width: 0 .2em .2em 0;
  z-index: 1;
  opacity: 0;
  right: calc(60% - .3em);
  top: calc(80% - .6em);
  transform: rotate(0deg);
  transition: all .3s;
  transform-origin: center center;
}

.check:checked {
  animation: a .3s ease-in forwards;
  background-color: rgb(120, 190, 120);
}

.check:checked::before {
  opacity: 1;
  transform: rotate(405deg);
}

@keyframes a {
  0% {
    opacity: 1;
    transform: scale(1) rotateY(0deg);
  }

  50% {
    opacity: 0;
    transform: scale(.8) rotateY(180deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotateY(360deg);
  }
}
</style>
