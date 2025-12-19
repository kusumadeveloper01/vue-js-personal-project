<template>
    <div class="mx-auto max-w-[40%] py-14">
        <div class="">
            <h1 class="text-3xl">Checkout</h1>
            <div class="bg-white p-3 rounded-md shadow-md mt-5">
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-2">
                        <div class="w-[100px] h-[100px]">
                            <img :src="item.image" alt="" class="w-full h-full object-contain">
                        </div>
                        {{ item.name }}
                    </div>

                    <div class="flex items-center gap-2">
                        <button class="w-full h-full bg-blue-500 text-white p-2 rounded-md">checkout</button>
                        <button @click="remove(item.id)"
                            class="w-full h-full bg-red-500 text-white p-2 rounded-md">delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const id = Number(route.params.id)
const data = JSON.parse(localStorage.getItem('cart_user')) || []

const item = data.find(i => i.id === id);
console.log(item);
</script>