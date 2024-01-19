<template>
    <div>

        <router-link to="/products">Back</router-link>

        <div v-if="product">
            <img :src="product.thumbnail" :alt="product.title" style="max-height:200px;" />
            <h1>Name: {{ product.title }}</h1>
            <p>Price: ${{ product.price }}</p>
            <p>Description: {{ product.description }}</p>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

const route = useRoute()

const product = ref(null)

onMounted(async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/${route.params.slug}`)
    product.value = data

    console.log(data)
})
</script>