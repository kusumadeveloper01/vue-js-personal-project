<template>
    <div
        class="flex flex-col gap-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out bg-white rounded-2xl p-5">
        <div class="w-full h-[200px]">
            <img :src="image" alt="" class="w-full h-full object-contain">
        </div>

        <div class="flex flex-col gap-1">
            <h1 class="text-lg text-black font-urbanist font-semibold">{{ name }}</h1>
            <div class="flex items-center gap-3">
                <div class="flex items-center gap-1">
                    <Icon icon="material-symbols:star" width="20" height="20" style="color: #fbc000" />
                    <Icon icon="material-symbols:star" width="20" height="20" style="color: #fbc000" />
                    <Icon icon="material-symbols:star" width="20" height="20" style="color: #fbc000" />
                    <Icon icon="material-symbols:star" width="20" height="20" style="color: #fbc000" />
                </div>

                <p class="text-sm font-urbanist font-medium text-black">
                    4.0
                    <span class="opacity-[60%]">
                        /5
                    </span>
                </p>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <p class="text-lg font-medium font-urbanist">${{ price }}</p>
                    <p class="text-sm font-medium font-urbanist opacity-[60%] line-through">${{ price }}</p>
                </div>

                <div
                    class="w-fit font-medium py-1 px-2 rounded-2xl bg-red-500 bg-opacity-[12%] text-red-500 font-urbanist text-sm">
                    10% OFF
                </div>
            </div>
        </div>
    </div>


    <!-- <div class="flex items-center gap-2">
        <router-link :to="{ name: 'checkout', params: { id } }" class="w-full">
            <button class="bg-blue-500 w-full text-white py-2 rounded-sm">beli</button>
        </router-link>
        <a @click.prevent="saveToLocalStorage(id, image, name, price)" class="w-full">
            <button class="bg-blue-500 w-full text-white py-2 rounded-sm">add cart</button>
        </a>
    </div> -->

</template>

<script setup>
import { defineProps } from 'vue';
import { Icon } from "@iconify/vue";

defineProps({
    id: Number,
    image: String,
    name: String,
    price: Number
})

function saveToLocalStorage(id, image, name, price) {
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