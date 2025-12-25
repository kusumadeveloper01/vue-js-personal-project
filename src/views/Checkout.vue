<template>
    <div class="mx-auto max-w-[40%] py-14">
        <div class="">
            <h1 class="text-3xl">Checkout</h1>
            <div class="flex items-end justify-between mt-5">
                <div class="flex items-center gap-1">
                    <img src="https://www.digimap.co.id/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN_f6ce08d5-9f3b-410a-ac13-eea4ea815a98.jpg?v=1717740735&width=1445"
                        alt="" class="h-[100px] w-[100px] object-contain">
                    <div class="flex flex-col">
                        <p>Iphone 11</p>
                        <small>qty: 1</small>
                    </div>
                </div>

                <h5>Rp. 1.000.000</h5>
            </div>

            <div class="border-b border-gray-400 mt-5 w-full"></div>

            <div class="flex mt-5 items-center justify-between w-full">
                <h5 class="text-2xl">Total</h5>
                <h5>Rp. 1.000.000</h5>
            </div>

            <button class="w-full h-full bg-blue-500 text-white p-2 rounded-md mt-5">checkout</button>
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