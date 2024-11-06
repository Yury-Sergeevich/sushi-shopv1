<template>
  <header class="header">
    <div class="headerContainer">
      <div class="logotype">
        <span class="supTitle">доставка еды</span>
        <p class="mainTitleText">Наши суши</p>
      </div>
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
  color: #dadada;
  text-shadow: 4px 4px 5px #2e2e2e;
}

.dark .supTitle {
  color: #c4c4c4;
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
  text-shadow: 0 -1px #6a6a6a;
}
</style>
