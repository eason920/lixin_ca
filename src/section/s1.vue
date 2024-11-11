<template>
  <article ref="dom" class="s1 overflow-hidden" id="s1">
    <div class="ani_gray"></div>
   <!--  <img src="./s1/01m.png" class="t0"> -->

    <img src="./s1/logo.svg" class="logo" data-aos="fade" data-aos-delay="400" data-aos-duration="2000" />
    <img src="./s1/t.svg" class="txt" data-aos="fade" data-aos-delay="700" data-aos-duration="2000" />
    <div class="box" data-aos="fade" data-aos-delay="0">
      <img src="./s1/img.png" data-aos="zoom-in" data-aos-delay="1500" />
    </div>
    <img src="./s1/slogo.svg" class="slogo" data-aos="zoom-in" data-aos-delay="1500" />
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
  background: linear-gradient(90deg, #FC4C02 0%, #FF7D00 100%)

.t0
  position: absolute
  top: 0
  left: 0
  width: 100%

.logo
  position: absolute
  width: calc(100vw * 687 / 1920)
  top: calc(50% + (100vw * (250 - (1080 *.5)) / 1920))
  right: calc(100vw  * 205 / 1920)
  z-index: 15

.slogo
  position: absolute
  width: calc(100vw * 309 / 1920)
  bottom: calc(20% + (100vw * (60 - (1080 *.2)) / 1920))
  right: 0
  left: 0
  margin: auto
  z-index: 15

.txt
  position: absolute
  width: calc(100vw * 687 / 1920)
  top: calc(50% + (100vw * (495 - (1080 *.5)) / 1920))
  right: calc(100vw  * 205 / 1920)
  z-index: 15
.box
  position: absolute
  width: calc(100vw * 890 / 1920)
  height: calc(100vw * 580 / 1920)
  top: calc(50% + (100vw * (250 - (1080 *.5)) / 1920))
  left: 0
  background: #fff
  text-align: right
  transform: translateX(-50%)
  img
   height: 100%
   transform-origin: 100% 100%

  

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
    height: 100vh
    min-height: calc(100vw * 667 / 375)
    max-height: calc(100vw * 812 / 375)
  
  .logo
    width: calc(100vw * 260 / 375)
    top: calc(50% + (100vw * (100 - (604 *.5)) / 375))
    right: 0
    left: 0
    margin: auto
    transform: translateX(-30%)

    
  .slogo
    width: calc(100vw * 120 / 375)
    bottom: calc(50% + (100vw * (215 - (604 *.5)) / 375))

  .txt
    width: calc(100vw * 260 / 375)
    top: calc(50% + (100vw * (210 - (604 *.5)) / 375))
    right: 0
    left: 0
    margin: auto
    transform: translateX(-30%)
  .box
    width: calc(100vw * 275 / 375)
    height: calc(100vw * 105 / 375)
    top: calc(50% + (100vw * (420 - (604 *.5)) / 375))
    right: 0
    left: 0
    margin: auto
    overflow: hidden
    img
      height: 130%


</style>