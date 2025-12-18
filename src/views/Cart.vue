<template>
    <div class="mx-auto max-w-[80%] py-14">
        <div class="">
            <h1 class="text-3xl">Keranjang Belanja</h1>
            <ul class="flex flex-col gap-5 mt-5">
                <li v-for="(item, index) in cart" :key="index" class="bg-white rounded-md shadow-md w-full p-5">
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
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cart = ref([])

onMounted(() => {
    const data = localStorage.getItem('cart_user')

    cart.value = data ? JSON.parse(data) : []
})

const remove = (id) => {
    cart.value = cart.value.filter(i => i.id !== id);
    localStorage.setItem('cart_user', JSON.stringify(cart.value));
}



</script>