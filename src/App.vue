<template>
  <Header></Header>

  <div class="grid grid-cols-4 gap-5 p-10">
    <Card v-for="hp in phones" :key="hp.name" :id="hp.id" :image="hp.image" :name="hp.name" :price="hp.price"></Card>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import { ref, onMounted } from 'vue';

const phones = ref([]);

onMounted(() => {
  fetch('/phones.json')
    .then(res => res.json())
    .then(data => {
      phones.value = data
    })
})

</script>

<style scoped></style>


<!-- Mini E-Commerce Cart

Fitur:

-List produk (dummy JSON)

-Add to cart

-transaksi -->