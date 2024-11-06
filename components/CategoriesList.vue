<template>
  <ul class="categoriesList">
    <li class="categoriesItem">
      <NuxtLink class="categoriesLink"> Холодные </NuxtLink>
    </li>
    <li class="categoriesItem">
      <NuxtLink class="categoriesLink"> Холодные </NuxtLink>
    </li>
    <li class="categoriesItem">
      <NuxtLink class="categoriesLink"> Холодные </NuxtLink>
    </li>
    <li class="categoriesItem">
      <NuxtLink class="categoriesLink"> Холодные </NuxtLink>
    </li>
    <li class="categoriesItem">
      <NuxtLink class="categoriesLink"> Холодные </NuxtLink>
    </li>
    <li class="categoriesItem">
      <NuxtLink class="categoriesLink"> Холодные </NuxtLink>
    </li>
  </ul>
</template>

<script setup></script>

<style lang="scss">
.categoriesItem {
  width: 150px;

  background: rgba(29, 29, 29, 0.25);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
}

.categoriesLink {
  padding: 10px 20px;
  display: block;
  text-align: center;
}
</style>
