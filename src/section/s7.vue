<template>
  <article class="s7">
    <img v-if="!isMobile" class="horizon" src="./s7/horizon.svg" />

    <div class="main">
      <div class="main_pic">
        <img src="./s7/pic.png">
        <span>情境示意圖</span>
      </div>
      <div class="main_msg">
        <img class="pic_title" data-aos="fade-up" src="./s7/title.svg" data-aos-delay="100" />
        <p>
          SGS集團為世界上測試、驗證、檢驗服務的領導者，透過全方位的建物認證，確保建物的安全性與合規性。住戶更可獲得「建物生產履歷報告書」，全面掌握家的所有數值。
        </p>

        <img class="pic_logo" src="./s7/logo_ca.svg" />

        <div class="pic_box">
          <img v-for="i in 5" :key="i" :src="`/src/section/s7/${i}.png`" data-aos="fade-up" :data-aos-delay="300 * i" />
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="sass" scoped>
// @import '@/assets/style/function.scss'
@import @/assets/style/public.sass
.s7
  height: 60vw
  position: relative
  background:
    image: url("./public/bg.png")
    repeat: no-repeat
    size: cover
    position: center 0
    color: #f9f9f9

img
  width: 100%
  margin: 0

.horizon
  position: absolute
  width: 30%
  left: 50%
  transform: translateX(-50%)
  top: 30px
  z-index: 1

.main
  display: flex
  height: 80%
  width: 100%
  padding-top: 10%

.main_pic
  width: 50%
  position: relative
  span
    position: absolute
    color: #fff
    right: 2%
    bottom: 2.5%
    font-size: 8px

.main_msg
  width: 50%
  padding: 0 16% 0 10%
p
  font-size: $fs
  margin-top: 3vw
  width: 100%

.pic_logo
  width: 60%
  margin: 5vw 20%
.pic_box
  position: relative
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  width: 130%
  left: 50%
  transform: translateX(-50%)
  img
    width: calc(20% - 5px)
    margin-bottom: 10px

@media screen and (max-width: $bp)
  .s7
    height: auto
    background: none

  .main
    flex-direction: column
    padding-top: 0

  .main_pic
    width: 100%

  .main_msg
    width: 100%
    padding: 5vw 15vw 16vw
    background:
      image: url("./public/bg_m.png")
      size: contain
      repeat: no-repeat
      color: #f9f9f9
  p
    font-size: $fs_m
    margin-top: 7vw
    width: 100%

  .pic_box
    width: 100vw

</style>

<script setup>
import { computed, getCurrentInstance } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

</script>
