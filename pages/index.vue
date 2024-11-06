<template>
  <main class="main backgroundMain">
    <Categories />
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
}

.backgroundMain {
  background-image: url("../public/img/background/mainBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
