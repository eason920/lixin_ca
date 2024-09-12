<template>
<article class="s4">
  <div class="memo">實際空拍美化圖</div>

  <img class="horizon" src="./s4/horizon.svg" />

  <div class="title_box">
    <img src="./s4/title.svg" data-aos="fade-up" data-aos-duration="600" />
  </div>

  <div class="hr_box" data-aos="flip-left" data-aos-duration="3000" data-aos-delay="300">
    <HR class="hr" :props-color="sHrColor" />
  </div>

  <div v-if="bShow" class="svg_box">
    <img v-if="!isMobile" src="./s4/svg.svg" />
    <img v-else src="./s4/svg_mb.svg" />
  </div>

  <div class="city_box" data-aos="fade-up">
    <img src="./s4/city.svg" />
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
.s4
  height: 58vw
  position: relative
  background:
    image: url("./s4/bg.png")
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
  width: 40%
  left: 50%
  transform: translateX(-50%)
  top: 30px
  // mix-blend-mode: multiply

.title_box
  padding-top: 6vw
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
    top: 1vw
  text-align: center
  img
    width: 70%

.city_box
  padding-top: 4vw
  text-align: center
  img
    width: 30vw

@media screen and (max-width: $bp)
  .s4
    height: 185vw

  
  .horizon
    width: 72%

  .title_box
    padding-top: 17vw
    img
      width: 43vw

  .hr_box
    padding-top: 6vw
    .hr
      width: 70vw
      
  .svg_box
    padding:
      top: 0vw
    img
      width: 70%

  .city_box
    padding-top: 11vw
    img
      width: 70vw
</style>