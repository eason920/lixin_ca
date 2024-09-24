<template>
<article ref="dom" class="s3">
  <div class="memo">情境示意圖</div>
  
  <img class="horizon" src="./s3/horizon.svg" />

  <div ref="dom_title" class="title_box">
    <img src="./s3/title.svg" data-aos="fade-up" data-aos-duration="600" />
  </div>

  <div ref="dom_hr" class="hr_box" data-aos="flip-left" data-aos-duration="3000" data-aos-delay="300">
    <HR class="hr" :props-color="sHrColor" />
  </div>

  <div v-if="props.propsShow" class="svg_box">
    <svgPc v-if="!isMobile" class="svg" />
    <svgMb v-else class="svg" />
  </div>
  
</article>
</template>

<script setup>
import { defineProps, onMounted, onUnmounted, ref, nextTick, computed, getCurrentInstance } from 'vue';

// cpn
import svgPc from './s3/svg.vue';
import svgMb from './s3/svg_mb.vue';
import HR from './public/hr.vue';

const dom = ref(null);
const dom_title = ref(null);
const dom_hr = ref(null);

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
.s3
  height: 58vw
  position: relative
  z-index: 12
  background:
    image: url("./s3/bg.webp")
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
  img, .svg
    width: 76%
    margin: auto

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
    img, .svg
      width: 84%

</style>