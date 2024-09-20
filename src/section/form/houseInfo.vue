<template>
  <!--  -->
  <div class="house z-20 relative">
    <img src="../footer/title.png" />
    <img v-if="!isMobile" src="../public/logo_build.png" />
  </div>

  <div class="footer relative z-20 flex items-center justify-center w-full h-[40px] bg-[#302626]">
    <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50" src="//h65.tw/img/footerLogo.gif"
            alt="立炘數位" srcset=""></a>
    <a href="https://www.h65.tw/admin/test/login" target="_blank" class="text-white text-xs">網頁製作</a>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.displaynone {
    display: none;
}

.house {
  color: #FFF;
  background: #FFF {
    image: url("../footer/bg.png");
    position: center 0;
    size: 95% auto;
    repeat: no-repeat;
  }
  display: flex;
  flex-direction: column;

  img {
    &:nth-child(1) {
      width: 40vw;
      margin: {
        top: 4vw;
        bottom: 3vw;
      }
    }
    &:nth-child(2) {
      width: 12vw;
      margin-bottom: 3vw;
    }
  }
}

@media screen and (max-width:768px) {
  .house {
    background: {
      size: 200% auto;
    }

    img {
      &:nth-child(1) {
        width: 84vw;
        margin: {
          top: 8vw;
          bottom: 10vw;
        }
      }
    }
  }
}
</style>

<script setup>
import info from "@/info"
import { computed, getCurrentInstance } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
</script>