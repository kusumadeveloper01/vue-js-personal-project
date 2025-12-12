<template>
    <ul>
        <li v-for="item in cart">{{ item.name }}</li>
    </ul>
</template>

<script setup>
const cart = JSON.parse(localStorage.getItem('cart_user'))
</script>