<template>
  <div class="wrapperApp">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup></script>

<style lang="scss">
.wrapperApp {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
</style>
