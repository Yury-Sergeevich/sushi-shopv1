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
  background: url("../public/img/background/categories.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
