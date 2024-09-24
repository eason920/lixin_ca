<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h65.tw/img/loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#ffffff]">
    <S1
      @sec_height="fnS1SecH"
    />
    <S2
      :props-show="bShow2" 
      @sec_height="fnS2SecH"
      @el_height="fnS2ElH"
     />
    <S3
      :props-show="bShow3"
      @sec_height="fnS3SecH"
      @el_height="fnS3ElH"
    />
    <S4 
      :props-show="bShow4"
      @sec_height="fnS4SecH"
      @el_height="fnS4ElH"
    />
    <S4_1 />
    <S5 />
    <S6 />
    <S7 />
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

body {
  background: #f8f8f8 url("@/section/s4/bg.png") fixed;
  background-size: auto;
}

@keyframes an1 {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}



.txt {
  position: relative;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 1.85;
  width: 100%;

  .desc {}
}

@media screen and (max-width: 767px) {}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S4_1 from "@/section/s4_abband.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
//
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, onUnmounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true);
const gtmNoScript = ref('');
//
const bShow2 = ref(false);
const bShow3 = ref(false);
const bShow4 = ref(false);
//
let nS1SecH = ref(null);
const fnS1SecH = (h) => {
  console.log('s1 sech', h);
  nS1SecH = h;
}
//
let nS2SecH = ref(null);
let nS2ElH = ref(null);
const fnS2SecH = (h) => {
  console.log('s2 sech', h);
  nS2SecH = h;
}
const fnS2ElH = (h) => {
  console.log('s2 elh', h);
  nS2ElH = h;
}
//
let nS3SecH = ref(null);
let nS3ElH = ref(null);
const fnS3SecH = (h) => {
  console.log('s3 sech', h);
  nS3SecH = h;
}
const fnS3ElH = (h) => {
  console.log('s3 elh', h);
  nS3ElH = h;
}
//
let nS4SecH = ref(null);
let nS4ElH = ref(null);
const fnS4SecH = (h) => {
  console.log('s4 sech', h);
  nS4SecH = h;
}
const fnS4ElH = (h) => {
  console.log('s4 elh', h);
  nS4ElH = h;
}

let wh = window.innerHeight;

onMounted(() => {
  console.log('wh is', wh);
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 1500
    });

    window.addEventListener('scroll', fnScroll);
    fnScroll();
  };

});

const fnScroll = () => {
  const st = window.scrollY;
  // console.log('window.scrollY', st);
  // S2
  // console.log('nS1SecH + nS2ElH - wh', nS1SecH + nS2ElH - wh)
  if (st > nS1SecH + nS2ElH - wh &&
      st < nS1SecH + nS2SecH
  ) {
    if (!bShow2.value) {
      // nextTick();
      bShow2.value = true;
    }
  } else {
    bShow2.value = false;
  }

  // S3
  // console.log('nS1SecH + nS2SecH + nS3ElH - wh', nS1SecH + nS2SecH + nS3ElH - wh)
  if (st > nS1SecH + nS2SecH + nS3ElH - wh + 200 && 
      st < nS1SecH + nS2SecH + nS3SecH
  ) {
    if (!bShow3.value) {
      // nextTick();
      bShow3.value = true;
    }
  } else {
    bShow3.value = false;
  }

  // S4
  // console.log('nS1SecH + nS2SecH + nS3SecH + nS4ElH - wh', nS1SecH + nS2SecH + nS3SecH + nS4ElH - wh)
  if (st > nS1SecH + nS2SecH + nS3SecH + nS4ElH - wh + 200  &&
      st < nS1SecH + nS2SecH + nS3SecH + nS4SecH
  ) {
    if (!bShow4.value) {
      // nextTick();
      bShow4.value = true;
    }
  } else {
    bShow4.value = false;
  }
};

onUnmounted(() => {
  window.removeEventListener('scroll', fnScroll);
});
</script>
