<template>
  <article class="s1" id="s1">
    <div class="ani_bg">
      <img v-for="i in 7" :key="i" src="./s1/bg_ani.png">
    </div>
    <div class="ani_gray"></div>

    <div class="title_box">
      <img src="./s1/t.png" class="title_box_main" data-aos="fade-up" data-aos-delay="600">
      <img src="./s1/subt.png" class="title_box_" data-aos="fade-up" data-aos-delay="900">
    </div>

    <div class="logo_box">
      <img src="./s1/logo_t.png" class="logo_main" data-aos="fade-up" data-aos-delay="1300">
      <div class="logo_hr" data-aos="fade-up" data-aos-delay="1400"></div>
      <img src="./s1/logo_subt.png" class="logo_sub" data-aos="fade-up" data-aos-delay="1500">
    </div>

    <div class="logo_build">
      <img src="./public/logo_build.png" data-aos="fade-up" data-aos-delay="1500">
    </div>
  </article>
</template>

<style lang="sass" scoped>
@import @/assets/style/public.sass
.s1
  height: 100vh
  position: relative
  img
    width: 100%

// --
.title_box
  @extend %left_center
  z-index: 10
  top: 12vh
  width: 38vw

.title_box_main
  margin-bottom: 4vh

// --
.logo_box
  @extend %left_center
  top: 49vh
  z-index: 10
  width: 23vw 

.logo_main
  margin-bottom: 2vh

.logo_hr
  width: 100%
  height: 1px
  background-color: #000

.logo_sub
  margin-top: 2vh

// --
.logo_build
  @extend %left_center
  z-index: 10
  width: 200px
  bottom: 5vh

// animate
@keyframes an
  to
    opacity: .5
    transform: scale(.9)
    z-index: 10

@keyframes an_m
  to
    opacity: .7
    transform: scale(1.3, 2.3)
    z-index: 10
  
.ani_bg
  position: relative
  width: 100%
  height: 100%
  overflow: hidden

  img
    position: absolute
    width: 66%
    top: 10vw
    left: 17%
    opacity: 1
    transform-style: preserve-3d
    transform: scale(5)
    transform-origin: 50% 51%
    z-index: 1

    animation: an 7s linear reverse infinite

    &:nth-child(1)
      animation-delay: 0s

    &:nth-child(2)
      animation-delay: 1s

    &:nth-child(3)
      animation-delay: 2s

    &:nth-child(4)
      animation-delay: 3s

    &:nth-child(5)
      animation-delay: 4s

    &:nth-child(6)
      animation-delay: 5s

    &:nth-child(7)
      animation-delay: 6s
       
.ani_gray
  background: url("./s1/bg_gray.png") repeat
  background-size: auto
  opacity: 0.8
  user-select: none
  pointer-events: none
  position: absolute
  width: 100%
  height: 100%
  z-index: 10
  top: 0
  left: 0

@media screen and (max-width: $bp)
  .s1
    height: calc( 100vh - 72px)
  .title_box
    top: 14vh
    width: 73vw

  .title_box_main
    margin-bottom: 4vw

  .logo_box
    top: 34vh
    width: 70vw 

  .logo_build
    width: 30vw
    bottom: auto
    top: 59vh

  .ani_bg img
    top: auto
    bottom: 0
    transform-origin: 50% 100%
    transform: scale(5, 6)
    animation: an_m 7s linear reverse infinite
</style>