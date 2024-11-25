<template>
  <main class="main">
    <div class="inner">
      <video autoplay loop muted playsinline class="videoBackground">
        <source src="/public/videos/video_2024-11-06_06-03-38.mp4" type="video/mp4" />
      </video>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss">
.main {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  margin-top: 60px;
}

.inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.videoBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
