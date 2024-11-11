<template>
<article ref="dom" class="map">
  <Fullview />
  <img class="horizon" src="./map/en.svg" />
  <div class="memo">實際空拍美化圖</div>

  <div ref="dom_title" class="title_box pointer-events-none">
    南科通勤5分鐘  <br>善化市政正核心
  </div>

  <div ref="dom_hr" class="hr_box pointer-events-none" data-aos="flip-left" data-aos-duration="3000" data-aos-delay="300">
    <HR class="hr" :props-color="sHrColor" />
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
import Fullview from '../components/fullview1.vue';

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
.map
  height: 55.8vw
  position: relative
  overflow: hidden
  z-index: 12

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
  font-size: 2.5vw
  font-weight: 700
  color: #fff
  br
   display: none

.hr_box
  position: absolute
  width: 100%
  display: flex
  justify-content: center
  top: 9vw
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
  .map
    height: 175vw

  .viewbox
    margin: 0vw 0 0
    height: 175vw
  
  .horizon
    width: 72%
    top: 3vw

  .title_box
    top: 12vw
    font-size: 5vw
    br
     display: block

  .hr_box
    top: 30vw
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