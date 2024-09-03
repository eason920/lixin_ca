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
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif]">
    <S1 />
    <S4 />
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
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
//
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 1500
    });
  };

})
</script>
