<template>
<article ref="dom" class="s4">
  <Fullview />
  <img class="horizon" src="./s4/horizon.svg" />
  <div class="memo">實際空拍美化圖</div>

  <div ref="dom_title" class="title_box pointer-events-none">
    <img src="./s4/title.svg" data-aos="fade-up" data-aos-duration="600" />
  </div>

  <div ref="dom_hr" class="hr_box pointer-events-none" data-aos="flip-left" data-aos-duration="3000" data-aos-delay="300">
    <HR class="hr" :props-color="sHrColor" />
  </div>

  <div v-if="props.propsShow" class="svg_box pointer-events-none">
    <svgPc v-if="!isMobile" class="svg" />
    <svgMb v-else class="svg" />
  </div>

  <div class="city_box pointer-events-none" data-aos="fade-up">
    <img src="./s4/city.svg" />
  </div>
  <div class="finger absolute md:block pointer-events-none">
    <img src="@/components/fullview/finger.png" alt="" srcset="">
  </div>
  <!-- 
  <img src="./s4/03.png" class="absolute top-0 left-0 right-0 opacity-80" />
  -->
</article>
</template>

<script setup>
import { defineProps, onMounted, onUnmounted, ref, nextTick, computed, getCurrentInstance } from 'vue';

// cpn
import HR from './public/hr.vue';
import svgPc from './s4/svg.vue';
import svgMb from './s4/svg_mb.vue';
import Fullview from '../components/fullview.vue';

const dom = ref(null);
const dom_title = ref(null);
const dom_hr = ref(null);
const dom_logo = ref(null);

const props = defineProps({
  propsShow: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits({
  sec_height: null,
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
    
    emit('el_height', 
      dom_title.value.offsetHeight + 
      dom_hr.value.offsetHeight
    );
  }, 1000);
});

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const sHrColor = ref(
  !isMobile 
  ? '140,140,140' 
  : '255,255,255'
);

</script>

<style lang="sass" scoped>
@import @/assets/style/public.sass
.s4
  height: 55.8vw
  position: relative
  overflow: hidden

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
  width: 33%
  left: 50%
  transform: translateX(-50%)
  top: 1.1vw
  // mix-blend-mode: multiply

.title_box
  position: absolute
  top: 4vw
  left: 0
  right: 0
  text-align: center
  z-index: 5
  img
    width: 24vw

.hr_box
  position: absolute
  width: 100%
  display: flex
  justify-content: center
  top: 12.5vw
  .hr
    width: 45vw

$w_svgpc: 77vw
.svg_box
  position: absolute
  z-index: 5
  top: 15.4vw
  left: 0
  right: 0
  text-align: center
  img, .svg
    width: $w_svgpc
    margin: auto

.city_box
  position: absolute
  top: calc( 17.6vw + $w_svgpc * 0.233)
  width: 100%
  text-align: center
  img
    width: 34vw
@media screen and (max-width: $bp)
  .s4
    height: 175vw

  .viewbox
    margin: -25vw 0 0
    height: 200vw
  
  .horizon
    width: 72%
    top: 3vw

  .title_box
    top: 14vw
    img
      width: 43vw

  .hr_box
    top: 32vw
    .hr
      width: 70vw
      
  .svg_box
    top: 36vw
    img, .svg
      width: 70%

  .city_box
    top: 110vw
    img
      width: 70vw
      
  .finger
    width: 95%
    top: 110vw
    left: 0
    right: 0
    margin: auto
</style>