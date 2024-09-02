<template>
  <article class="s6">
    <img v-if="!isMobile" class="is_bg" src="./public/bg.png" />
    <img class="horizon" src="./s6/horizon.svg" />

    <div class="main">
      <div class="main_pic">
        <img src="./s6/pic.jpg">
        <span>情境示意圖</span>
        <img v-if="!isMobile" class="is_float" src="./s6/pic_float.svg" />
      </div>
      <div class="main_msg">
        <img v-if="isMobile" class="is_bg" src="./public/bg_m.png" />
        <img class="pic_title" data-aos="fade-up" src="./s6/title.svg" data-aos-delay="100" />
        <p data-aos="fade-up" data-aos-delay="300">
          一個健康的居住環境，不該只是疊加建材與設備，城安透過遵循美國fitwel認證的嚴謹指標，作為選地與規劃方向，讓建築具備健康宅基因。
          <br /><br />
          fitwel認證由美國CDC與聯邦總務署GSA聯合推動，綜整超過 5,600件文獻、訂定70個以上評估項目，達到「健康人居，世界共享」的理想。
        </p>
        <ul class="pic_box">
          <li v-for="(item, i) in json" :key="i" data-aos="fade-up" :data-aos-delay="300 * i">
            <img :src="`/src/section/s6/${i + 1}.svg`" />
            <span>{{ item.ch }}</span>
            <span class="is_en">{{ item.en }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style lang="sass" scoped>
// @import '@/assets/style/function.scss'
@import @/assets/style/public.sass
.s6
  height: 60vw
  position: relative
  background:
    // image: url("./s6/bg.png")
    repeat: no-repeat
    size: cover
    position: center 0
    color: #f9f9f9

img
  width: 100%
  margin: 0

.is_bg
  position: absolute
  top: 0
  left: 0
  transform: rotateY(180deg)
  width: 100%

.horizon
  position: absolute
  width: 33%
  left: 50%
  transform: translateX(-50%)
  top: 30px
  z-index: 2
  opacity: .6
  mix-blend-mode: multiply

.main
  display: flex
  height: 78%
  width: 100%
  padding-top: 9vw

.main_pic
  order: 2
  width: 50%
  position: relative
  z-index: 1
  span
    position: absolute
    color: #fff
    right: 2%
    bottom: 2.5%
    font-size: 8px
  .is_float
    position: absolute
    left: 50%
    transform: translateX(-50%)
    bottom: 3vw
    width: 50%

.main_msg
  order: 1
  width: 50%
  padding: 0 7% 0 16%
p
  font-size: $fs
  margin-top: 3vw
  width: 110%
  position: relative
  z-index: 1

$g: 4.5vw
.pic_box
  position: relative
  display: flex
  flex-wrap: wrap
  margin-top: 3vw

  li
    width: calc(100%/4 - $g * 3 / 4 )
    margin:
      right: $g
      bottom: calc($g / 2)
    text-align: center
    font:
      size: .8vw
      weight: bold
    position: relative
    padding-bottom: 1vw
    img
      margin-bottom: 1vw
    span
      display: block
    .is_en
      font-size: .6vw
      width: 8vw
      bottom: .25vw
      position: absolute
      left: 50%
      transform: translateX(-50%)
    &:nth-child(4n)
      margin-right: 0

@media screen and (max-width: $bp)
  $g: 10vw
  .s6
    height: auto
    background: none

  .horizon
    width: 80%
    top: 20px
    mix-blend-mode: screen
    opacity: 1
    filter: brightness(0) invert(1)

  .main
    flex-direction: column
    padding-top: 0

  .main_pic
    order: 1
    width: 100%

  .main_msg
    order: 2
    position: relative
    z-index: 1
    width: 100%
    padding: 5vw 15vw 18vw
    background:
      // image: url("./s6/bg_m.png")
      size: contain
      repeat: no-repeat
      color: #f9f9f9
  p
    font-size: $fs_m
    margin-top: 11vw
    width: 100%

  .pic_box
    position: relative
    display: flex
    flex-wrap: wrap
    margin-top: 8vw

    li
      width: calc(100%/4 - $g * 3 / 4 )
      margin:
        right: $g
        bottom: calc($g / 2)
      font:
        size: 2.5vw
        weight: bold
      position: relative
      padding-bottom: 2.5vw
      img
        margin-bottom: 1vw
      span
        display: block
      .is_en
        font-size: 1.6vw
        width: 25vw
        bottom: .25vw

</style>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

const json = ref([
  {
    ch: '總體營造',
    en: 'Community Health'
  },
  {
    ch: '除菌防疫',
    en: 'Morbidity & Absenteeism'
  },
  {
    ch: '平等無礙',
    en: 'Social Equity'
  },
  {
    ch: '身心平衡',
    en: 'Well-being'
  },
  {
    ch: '近取淨食',
    en: 'Healthy Food'
  },
  {
    ch: '降低風險',
    en: 'Occupant Safety'
  },
  {
    ch: '適切運動',
    en: 'Physical Activity'
  }
])
</script>

