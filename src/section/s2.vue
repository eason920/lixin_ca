<template>
<article class="s2" ref="dom">
  <div class="memo">情境示意圖</div>
  
  <img class="horizon" src="./s2/horizon.svg" />

  <div ref="dom_title" class="title_box">
    <img src="./s2/title.svg" data-aos="fade-up" data-aos-duration="600" />
  </div>

  <div ref="dom_hr" class="hr_box" data-aos="flip-left" data-aos-duration="3000" data-aos-delay="300">
    <HR class="hr" :props-color="sHrColor" />
  </div>

  <div ref="dom_logo" class="logo_box">
    <img src="./s2/logo2.svg" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="700" />
  </div>
  
  <div v-if="props.propsShow" class="svg_box relative">
    <svgPc v-if="!isMobile" class="svg" />
    <svgMb v-else class="svg" />
  </div>
  
</article>
</template>

<script setup>
import { defineProps, defineEmits ,watch ,onMounted, onUnmounted, ref, nextTick, computed, getCurrentInstance } from 'vue';

// cpn
import svgPc from './s2/svg.vue';
import svgMb from './s2/svg_mb.vue';
import HR from './public/hr.vue';

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
      dom_hr.value.offsetHeight +
      dom_logo.value.offsetHeight
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
.s2
  height: 58vw
  position: relative
  z-index: 12
  background:
    image: url("./s2/bg.webp")
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
  margin-top: 0
  text-align: center
  img
    width: 56vw

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
    margin-top: 10vw
    img
      width: 90vw

  .svg_box
    padding:
      top: 15vw
    img
      top: 15vw
      width: calc(100% - 15vw)
      opacity: 0.3

</style>