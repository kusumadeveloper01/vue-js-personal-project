<template>
    <div class="mx-auto max-w-[80%] py-14">
        <div class="">
            <h1 class="text-3xl">Keranjang Belanja</h1>
            <ul class="flex flex-col gap-5 mt-5">
                <li v-for="item in cart" :key="item.id" class="bg-white rounded-md shadow-md w-full p-5">
                    <div>
                        {{ item.name }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const cart = ref(JSON.parse(localStorage.getItem('cart_user')) || [])
console.log(cart)
</script>