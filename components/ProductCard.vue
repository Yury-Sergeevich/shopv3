<template>
  <div class="productCard">
    <img :src="product.image" alt="product.name" />
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>{{ product.price }} ₽</p>
    <button @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
