<template>
  <header class="header">
    <div class="headerContainer">
      <NuxtLink to="/" class="logotype">
        <span class="supTitle">доставка еды</span>
        <p class="mainTitleText">Наши суши</p>
      </NuxtLink>
      <ThemeToggle />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss">
.headerContainer {
  width: 100%;
  display: flex;
  padding: 10px 0;
  position: relative;
}

.logotype {
  display: block;
  margin: auto;
  padding: 5px 10px;
  border: 1px solid hwb(0 21% 79% / 0.342);
}

.dark .logotype {
  border: 1px solid rgb(67 67 67 / 14%);
  box-shadow: 0px 0px 15px -5px rgb(16 16 16 / 92%);
}

.mainTitleText {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.03%;
  color: #323232;
  text-shadow: 4px 4px 5px #6a6a6a;
}

.dark .mainTitleText {
  color: #ff1a1e;
  text-shadow: 4px 4px 5px #121212;
}

.dark .supTitle {
  color: #ff3a3e;
}

.supTitle {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-align: center;
  margin-bottom: -7px;
  display: block;
  font-size: 10px;
  line-height: 12px;
  font-weight: 300;
  letter-spacing: 0.03%;
  color: #535353;
}
</style>
