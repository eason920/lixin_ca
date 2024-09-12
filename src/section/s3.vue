<template>
<article class="s3">
  <div class="memo">情境示意圖</div>
  
  <img class="horizon" src="./s3/horizon.svg" />

  <div class="title_box">
    <img src="./s3/title.svg" data-aos="fade-up" data-aos-duration="600" />
  </div>

  <div class="hr_box" data-aos="flip-left" data-aos-duration="3000" data-aos-delay="300">
    <HR class="hr" :props-color="sHrColor" />
  </div>

  <div v-if="bShow" class="svg_box">
    <img v-if="!isMobile" src="./s3/svg.svg" />
    <img v-else src="./s3/svg_mb.svg" />
  </div>
  
</article>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick, computed, getCurrentInstance } from 'vue';

// cpn
import HR from './public/hr.vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const bShow = ref(true);
const sHrColor = ref(
  !isMobile 
  ? '140,140,140' 
  : '255,255,255'
);

</script>

<style lang="sass" scoped>
@import @/assets/style/public.sass
.s3
  height: 58vw
  position: relative
  background:
    image: url("./s3/bg.png")
    repeat: no-repeat
    size: cover
    position: center 0

img
  width: 100%

.memo
  position: absolute
  color: #fff
  letter-spacing: 1px
  bottom: 1vw
  right: 2vw
  font-size: .7vw

.horizon
  position: absolute
  width: 62%
  left: 50%
  transform: translateX(-50%)
  top: 0
  // mix-blend-mode: multiply

.title_box
  padding-top: 8vw
  text-align: center
  img
    width: 24vw

.hr_box
  width: 100%
  display: flex
  justify-content: center
  padding-top: 3vw
  .hr
    width: 45vw
    
.svg_box
  padding:
    top: 2vw
  text-align: center
  img
    width: 76%

@media screen and (max-width: $bp)
  .s3
    height: 185vw
  
  
  .horizon
    width: 100%

  .title_box
    padding-top: 19vw
    img
      width: 43vw

  .hr_box
    padding-top: 7vw
    .hr
      width: 86vw
      
  .svg_box
    padding:
      top: 7vw
    img
      width: 84%

</style>