<template>
  <button @click="toggleTheme" class="toggleTheme">
    <span v-if="isDark" class="iconDark"></span>
    <span v-else class="iconLight"></span>
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

.iconDark,
.iconLight {
  display: block;
  width: 24px;
  height: 24px;
}

.iconDark {
  background: yellow;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.iconLight {
  background: orangered;
}
</style>
