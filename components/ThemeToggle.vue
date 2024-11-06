<template>
  <button @click="toggleTheme" class="toggleTheme">
    <img v-if="isDark" src="/public/icons/moon_lpyqlab1362n.svg" width="24" height="24" class="iconLight" alt="Темная тема" />
    <img v-else src="/public/icons/sun.svg" width="24" height="24" class="iconDark" alt="Светлая тема" />
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
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 10px;
  top: 0;
  bottom: 0;

  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
}

.iconDark,
.iconLight {
  display: block;
  width: 24px;
  height: 24px;
}
</style>
