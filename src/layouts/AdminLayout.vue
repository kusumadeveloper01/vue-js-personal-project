<template>
    <div class="flex flex-row">
        <aside class="bg-gray-700 w-[20%] h-screen">
            <div class="p-10">
                <h1 class="text-xl font-medium text-white">NetPonsel</h1>
                <ul class="flex flex-col gap-1 mt-5">
                    <router-link to="/admin/products" class="text-white">products</router-link>
                    <router-link to="/admin/orders" class="text-white">orders</router-link>
                    <router-link to="/admin/users" class="text-white">users</router-link>
                </ul>
            </div>
        </aside>

        <div class="w-full p-10">
            <header class="h-[10vh]">
                <div class="w-full flex items-center justify-between">
                    <h1 class="text-2xl font-medium">hello, admin</h1>

                    <i class="ri-account-circle-line text-2xl"></i>
                </div>
            </header>

            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>