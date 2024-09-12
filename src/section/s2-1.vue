<template>
<article class="s2">
  <div class="memo">情境示意圖</div>
  
  <img class="horizon" src="./s2/horizon.svg" />

  <div class="title_box">
    <img src="./s2/title.svg" data-aos="fade-up" data-aos-duration="600" />
  </div>

  <div class="hr_box" data-aos="flip-left" data-aos-duration="3000" data-aos-delay="300">
    <HR class="hr" :props-color="sHrColor" />
  </div>

  <div class="logo_box">
    <img src="./s2/logo.png" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="700" />
  </div>
  
  <div v-if="bShow" class="svg_box">
    <svgPc v-if="!isMobile" class="svg" />
    <img v-else src="./s2/svg_mb.svg" />
  </div>
  
</article>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick, computed, getCurrentInstance } from 'vue';

// cpn
import svgPc from './s2/svg.vue';
import HR from './public/hr.vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const bShow = ref(false);
const sHrColor = ref(
  !isMobile 
  ? '140,140,140' 
  : '255,255,255'
);

const fnScroll = () => {
  const st = window.scrollY;
  console.log('window.scrollY', st);
  if (st > 500) {
    if (!bShow.value) {
      nextTick();
      bShow.value = true;
    }
  } else {
    bShow.value = false;
  }
};


onMounted(() => {
  window.addEventListener('scroll', fnScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', fnScroll);
});
</script>

<style lang="sass" scoped>
@import @/assets/style/public.sass
.s2
  height: 58vw
  position: relative
  background:
    image: url("./s2/bg.png")
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
  width: 46%
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
  padding-top: 2vw
    
.logo_box
  // padding-top: 1vw
  margin-top: -1vw
  text-align: center
  img
    width: 32vw

.svg_box
  padding:
    top: 5vw
    left: 15vw
  width: 85vw
  .svg
    width: 100%

@media screen and (max-width: $bp)
  .s2
    height: 185vw

  .memo
    font-size: 2vw

  .horizon
    width: 90%

  .title_box
    padding-top: 25vw
    img
      width: 43vw

  .hr_box
    padding-top: 7vw
      
  .logo_box
    margin-top: 5vw
    img
      width: 65vw

  .svg_box
    padding:
      top: 15vw

</style>