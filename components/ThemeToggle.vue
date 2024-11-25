<template>
  <button @click="toggleTheme" class="toggleTheme">
    <nuxt-icon v-if="isDark" name="moon" filled></nuxt-icon>
    <nuxt-icon v-else name="sun" filled></nuxt-icon>
  </button>
</template>

<script setup>
import { useColorMode } from "#imports";

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

function toggleTheme() {
  colorMode.value = isDark.value ? "light" : "dark";
}
</script>

<style lang="scss">
.toggleTheme {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
}

.nuxt-icon svg {
  width: 24px;
  height: 24px;
  display: block;
}

.iconDark {
  width: 24px;
  height: 24px;
}
</style>
