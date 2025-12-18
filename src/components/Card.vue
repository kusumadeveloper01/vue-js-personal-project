<template>
    <div class="flex flex-col gap-5 p-4 rounded-md bg-white shadow-lg">
        <div class="w-full h-[200px]">
            <img :src="image" alt="" class="w-full h-full object-cover">
        </div>

        <div class="flex flex-col gap-1">
            <h1 class="text-xl font-semibold text-black">{{ name }}</h1>
            <p class="text-lg font-medium">{{ price }}$</p>
            <div class="flex items-center gap-2">
                <a :href="id" class="w-full">
                    <button class="bg-blue-500 w-full text-white py-2 rounded-sm">beli</button>
                </a>
                <a @click.prevent="saveToLocalStorage(id, image, name, price)" class="w-full">
                    <button class="bg-blue-500 w-full text-white py-2 rounded-sm">add cart</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    id: Number,
    image: String,
    name: String,
    price: Number
})

function saveToLocalStorage(image, name, price) {
    const newProduct = {
        id,
        image,
        name,
        price
    }

    let cart = JSON.parse(localStorage.getItem('cart_user')) || []

    cart.push(newProduct);

    localStorage.setItem('cart_user', JSON.stringify(cart))

    alert('produk berhasil ditambahkan ke keranjang')
}
</script>