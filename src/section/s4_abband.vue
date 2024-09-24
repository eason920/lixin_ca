<template>
  <article class="s4a">
    <img class="horizon" src="./s4_abband/horizon.svg" />
    <div class="logo_box">
      <div class="overflow-hidden">
        <img data-aos="fade-up" src="./s4_abband/logo.svg" data-aos-delay="100" />
      </div>
      
      <div class="overflow-hidden">
        <div data-aos="fade-down">
          <img class="shadow" src="./s4_abband/logo.svg" data-aos-delay="0" />
        </div>
      </div>
    </div>

    <div class="txt_box">
      <img data-aos="fade-up" src="./s4_abband/title.svg" data-aos-delay="300" />
      <HR :props-color="'52, 168, 222'" class="hr" />
      <p data-aos="fade-up" data-aos-delay="300">
        理性務實家都知道：看不見的更重要！建築如同人體，養成先天好體質，就不必日後苦當藥罐子，便能健康快活。
        <br /><br />
        透過美國fitwel健康建築認證，加上瑞士SGS建物生產履歷，讓您的建築具備好基因，更有全透明的健檢報告。
      </p>
    </div>
  </article>
</template>

<style lang="sass" scoped>
// @import '@/assets/style/function.scss'
@import @/assets/style/public.sass
.s4a
  height: 60vw
  position: relative
  background:
    //image: url("./s4_abband/bg.jpg")
    repeat: no-repeat
    size: cover
    position: center 0
    // color: #f9f9f9

img
  width: 100%

.horizon
  position: absolute
  width: 46%
  left: 27%
  top: 30px
  mix-blend-mode: multiply

.logo_box
  position: absolute
  width: 100%
  left: 0%
  top: 0
  text-align: center
  img
    width: 46%
  .overflow-hidden
    &:nth-child(1)
      padding-top: 14.5vw
      background: radial-gradient(60% 92% at 50% 100%, #0069E5 0%, rgba(0, 105, 229, 0.00) 100%)
    &:nth-child(2)
      background: linear-gradient(175deg, rgba(0, 117, 255, 0.50) 0%, rgba(0, 153, 255, 0.20) 14.54%, rgba(0, 153, 255, 0.00) 47.65%)
      padding-bottom: 15vw

.shadow
  transform: rotateX(-180deg) scale(1, .5)
  transform-origin: 0 34%
  opacity: .3

.txt_box
  position: absolute
  width: 32%
  left: 34%
  top: 30vw
  z-index: 15

.hr
  margin: 2vw 0

p
  font-size: $fs

@media screen and (max-width: $bp)
  .s4a
    height: 185vw
  .horizon
    width: 90%
    left: 5%

  .logo_box
    img
      width: 90%
    .overflow-hidden
      &:nth-child(1)
        padding-top: 45vw
        background: radial-gradient(80% 92% at 50% 100%, #0069E5 0%, rgba(0, 105, 229, 0.00) 100%)
      &:nth-child(2)
        padding-bottom: 30vw

  .txt_box
    width: 80%
    left: 10%
    top: 90vw

  .hr
    margin: 6vw 0

  p
    font-size: $fs_m
</style>

<script setup>
import HR from './public/hr.vue'
</script>

