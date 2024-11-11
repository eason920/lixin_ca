<template>
  <article ref="dom" class="s1 overflow-hidden" id="s1">
    <div class="ani_bg">
      <img v-for="i in 7" :key="i" src="./s1/bg_ani.png">
    </div>
    <div class="ani_bottom"></div>
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
  <!--  <div class="bbb"></div>  -->
  </article>
</template>

<script setup>
import { defineProps, defineEmits ,watch ,onMounted, onUnmounted, ref, nextTick, computed, getCurrentInstance } from 'vue';

const dom = ref(null);

const emit = defineEmits({
  el_height: null
});

onMounted(() => {
  // console.log(dom.value.offsetHeight);
  // console.log(dom_title.value.offsetHeight );
  // console.log(dom_hr.value.offsetHeight);
  // console.log(dom_logo.value.offsetHeight);
  // console.log(dom_logo.value.offsetTop);
  setTimeout(()=>{
    emit('sec_height',
      dom.value.offsetHeight
    );
  }, 1000);
});
</script>

<style lang="sass" scoped>
@import @/assets/style/public.sass
.s1
  height: 100vh
  min-height: 46.875vw
  max-height: 56.25vw
  position: relative
  background: #f8f8f8
  img
    width: 100%

// --
.title_box
  @extend %left_center
  z-index: 15
  top: 12%
  width: 38vw

.title_box_main
  margin-bottom: 4vh

// --
.logo_box
  @extend %left_center
  top: calc(50% - 3vw)
  z-index: 15
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
  z-index: 15
  width: 200px
  bottom: 5%

// animate
@keyframes an
  50%
    opacity: 1
    transform: scale(2.6)
    z-index: 5
  60%
    opacity: .7
    transform: scale(2.25)
    z-index: 6
  95%
    opacity: .5
    transform: scale(1)
    z-index: 9
  100%
    opacity: 0
    transform: scale(1)
    z-index: 10

@keyframes an_m
  50%
    opacity: 1
    transform: scale(2.2,2.6)
    z-index: 5
  60%
    opacity: .7
    transform: scale(1.95,2.25)
    z-index: 6
  95%
    opacity: .5
    transform: scale(1)
    z-index: 9
  100%
    opacity: 0
    transform: scale(1)
    z-index: 10
  
.ani_bg
  position: relative
  width: 100%
  height: 100%
  overflow: hidden

  img
    position: absolute
    width: 66%
    top: calc(50% - 23.2vw)
    left: 17%
    opacity: 1
    transform-style: preserve-3d
    transform: scale(5)
    transform-origin: 50% 51%
    z-index: 1

    animation: an 9.1s linear reverse infinite

    &:nth-child(1)
      animation-delay: 0s

    &:nth-child(2)
      animation-delay: 1.3s

    &:nth-child(3)
      animation-delay: 2.6s

    &:nth-child(4)
      animation-delay: 3.9s

    &:nth-child(5)
      animation-delay: 5.2s

    &:nth-child(6)
      animation-delay: 6.5s

    &:nth-child(7)
      animation-delay: 7.8s
       
.ani_bottom
  user-select: none
  pointer-events: none
  position: absolute
  width: 100%
  height: 15%
  bottom: 0
  left: 0
  z-index: 11
  background: linear-gradient(to top, #00A4EA77 0%,#00A4EA22 30%,#00A4EA00 100%)

.ani_gray
  background: url("./s1/bg_gray.png") repeat
  background-size: auto
  opacity: 0.5
  user-select: none
  pointer-events: none
  position: fixed
  // position: absolute
  width: 100%
  height: 100%
  z-index: 12
  top: 0
  left: 0

@media screen and (max-width: $bp)
  .s1
    // height: calc( 100vh - 72px)
    height: calc(100vh - 63px)
    min-height: 161.0666666667vw
    max-height: 200vw
  .title_box
    top: calc(30% - 29vw)
    width: 73vw

  .title_box_main
    margin-bottom: 4vw

  .logo_box
    top: calc(50% - 16vw)
    width: 70vw 

  .logo_build
    width: 46vw
    bottom: auto
    top: calc(60% + 15vw)

  .ani_bg img
    top: calc(50% - 70vw)
    width: 110%
    height: 170vw
    left: -5%
    transform: scale(6,5)
    animation: an_m 9.1s linear reverse infinite
</style>