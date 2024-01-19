<template>
    <div>
        <h1>Products</h1>
        <router-link to="/">Home</router-link>
        <div>
            <ul>
                <li v-for="product in products" :key="product.id">
                    <nuxt-link :to="`/products/${product.id}`">
                        {{ product.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>


    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

const route = useRoute()

const products = ref([])

onMounted(async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`)
    products.value = data.products
})
</script>