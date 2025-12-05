<template>
    <div class="flex flex-col gap-5 p-4 rounded-md bg-white shadow-lg">
        <div class="w-full h-[200px]">
            <img :src="image" alt="" class="w-full h-full object-cover">
        </div>

        <div class="flex flex-col gap-1">
            <h1 class="text-xl font-semibold text-black">{{ name }}</h1>
            <p class="text-lg font-medium">{{ price }}$</p>
            <a :href="id" class="w-full">
                <button class="bg-blue-500 w-full text-white py-2 rounded-sm">beli</button>
            </a>
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
</script>