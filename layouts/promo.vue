<template>
  <section class="promo">
    <video autoplay loop muted playsinline class="videoBackground">
      <source src="/public/videos/video_2024-11-06_06-03-38.mp4" type="video/mp4" />
    </video>
    <div class="promoContainer">
      <div class="logo">
        <img src="../public/img/logo/exportedLayer (2).png" width="180" height="150" class="logoA" alt="" />
        <div class="logoTextWrapper">
          <h2 class="titlePromo">Наши Суши</h2>
          <p class="textPromo">доставка еды</p>
        </div>
        <img src="../public/img/logo/exportedLayer (2).png" width="180" height="150" class="logoA" alt="" />
      </div>
      <NuxtLink to="/categories" class="button">МЕНЮ</NuxtLink>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.promo {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;

  padding: 0 15px;
  margin-bottom: 5px;
}

.videoBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.promoContainer {
  padding: 30px 0;
  width: 100%;
}

.logo {
  background: rgba(29, 29, 29, 0.25);
  box-shadow: 0px 5px 5px 0px #12121273;
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  margin-bottom: 20px;
}

.logoA {
  display: block;
  width: 180px;
  height: 170px;
  margin: auto;
}

.logoTextWrapper {
  border-top: 1px solid #212020;
  border-bottom: 1px solid #212020;

  width: 80%;
  margin: auto;
  padding: 5px 20px;
  border-top: 1px solid #6a6a6a;
  border-bottom: 1px solid #6a6a6a;
}

.titlePromo {
  font-size: 28px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.05em;
  color: #d9090d;
  text-align: center;
  margin-bottom: 5px;
}

.textPromo {
  font-size: 12px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0.03em;
  color: rgba(255, 18, 22, 0.854);
  text-align: center;
}

.button {
  display: block;
  text-align: center;
  color: #ffffff;
  width: 70%;
  padding: 15px 20px;
  margin: auto;
  background: rgba(255, 18, 22, 0.854);
}
</style>
