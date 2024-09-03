<template>
  <article class="s5">
    <div class="bg"><span></span></div>
    <img class="horizon" src="./s5/horizon.svg" />

    <div class="main">
      <div class="main_pic">
        <img src="./s5/pic.jpg">
        <span>情境示意圖</span>
      </div>
      <div class="main_msg">
        <img class="pic_title" data-aos="fade-up" src="./s5/title.svg" data-aos-delay="100" />
        <p data-aos="fade-up" data-aos-delay="300">
          SGS集團為世界上測試、驗證、檢驗服務的領導者，透過全方位的建物認證，確保建物的安全性與合規性。住戶更可獲得「建物生產履歷報告書」，全面掌握家的所有數值。
        </p>
        <div class="pic_box">
          <img src="./s5/01.png" data-aos="fade-up" />
          <img src="./s5/02.png" data-aos="fade-up" data-aos-delay="300" />
          <img src="./s5/03.png" data-aos="fade-up" data-aos-delay="600" />
          <img src="./s5/04.png" data-aos="fade-up" data-aos-delay="900" />
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="sass" scoped>
// @import '@/assets/style/function.scss'
@import @/assets/style/public.sass
.s5
  height: 60vw
  position: relative
.bg
  position: absolute
  top: 0
  width: 100%
  &::before
    content: ""
    display: block
    width: 100%
    height: 5vw
    background: linear-gradient(90deg, rgba(0, 192, 255, 0.66) 0%, rgba(0, 166, 255, 0.37) 25%, rgba(0, 136, 255, 0.20) 49.76%, rgba(0, 136, 255, 0.00) 90%)
  span
    width: 100%
    display: block
    height: 4.6vw
    background: linear-gradient(90deg, rgba(0, 153, 255, 0.66) 0%, rgba(0, 144, 255, 0.42) 19.76%, rgba(0, 136, 255, 0.23) 45.1%, rgba(0, 136, 255, 0.00) 90%)

  &::after
    content: ""
    width: 100%
    display: block
    height: 7.7vw
    background: linear-gradient(90deg, rgba(0, 119, 238, 0.52) 0%, rgba(0, 126, 245, 0.29) 26.26%, rgba(0, 133, 252, 0.10) 58.76%, rgba(0, 136, 255, 0.00) 93.26%)

img
  width: 100%
  margin: 0

.horizon
  position: absolute
  width: 68%
  left: 50%
  transform: translateX(-50%)
  top: 30px
  z-index: 1
  opacity: .7
  mix-blend-mode: multiply

.main
  position: relative
  display: flex
  height: 80%
  width: 100%
  padding-top: 10%
  z-index: 15

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
  width: 130%

$g: 12%
.pic_box
  position: relative
  padding: $g
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  margin-top: 3vw
  &:after, &:before
    content: ''
    position: absolute
    background-color: #aaa
  &:after
    width: 1px
    height: 100%
    top: 0
    right: calc($g - 3px)
  &:before
    width: 100%
    height: 1px
    left: 0
    bottom: calc($g + 5px)
  img
    width: calc(50% - 5px)
    &:nth-child(1), &:nth-child(2)
      margin-bottom: 10px

@media screen and (max-width: $bp)
  .s5
    height: auto
    background: none
  .bg
    top: 76vw
    transform: scaleX(-1)
    &::before
      display: none
    span
      height: 9vw
    &::after
      height: 15.5vw

  .horizon
    width: 96%
    top: 20px
    mix-blend-mode: screen
    opacity: 1
    filter: brightness(0) invert(1)

  .main
    flex-direction: column
    padding-top: 0

  .main_pic
    width: 100%

  .main_msg
    width: 100%
    padding: 5vw 15vw 8vw
  p
    font-size: $fs_m
    margin-top: 7vw
    width: 100%

</style>

<script setup>
</script>
