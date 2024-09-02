<template>
  <article class="s4">
    <img class="horizon" src="./s4/horizon.svg" />
    <div class="logo_box">
      <div class="overflow-hidden">
        <img data-aos="fade-up" src="./s4/logo.svg" data-aos-delay="100" />
      </div>
      
      <div class="overflow-hidden">
        <div data-aos="fade-down">
          <img class="shadow" src="./s4/logo.svg" data-aos-delay="0" />
        </div>
      </div>
    </div>

    <div class="txt_box">
      <img data-aos="fade-up" src="./s4/title.svg" data-aos-delay="300" />
      <hr :props-color="'52, 168, 222'" class="hr" />
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
.s4
  height: 60vw
  position: relative
  background:
    image: url("./s4/bg.jpg")
    repeat: no-repeat
    size: cover
    position: center 0
    color: #f9f9f9

img
  width: 100%

.horizon
  position: absolute
  width: 46%
  left: 27%
  top: 30px

.logo_box
  position: absolute
  width: 46%
  left: 27%
  top: 14.5vw
.shadow
  transform: rotateX(-180deg) scale(1, .5)
  transform-origin: 0 34%
  opacity: .3

.txt_box
  position: absolute
  width: 32%
  left: 34%
  top: 30vw

.hr
  margin: 2vw 0

p
  font-size: $fs

@media screen and (max-width: $bp)
  .s4
    height: 185vw
    background:
      image: url("./s4/bg_m.jpg")
      size: contain
  .horizon
    width: 80%
    left: 10%

  .logo_box
    width: 90%
    left: 5%
    top: 45vw

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

