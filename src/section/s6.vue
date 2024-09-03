<template>
  <article class="s6">
    <div class="bg"><span></span></div>
    <img class="horizon" src="./s6/horizon.svg" />
    <div class="main">
      <div class="main_pic">
        <img src="./s6/pic.jpg">
        <span>情境示意圖</span>
        <img v-if="!isMobile" class="is_float" src="./s6/pic_float.svg" />
      </div>
      <div class="main_msg">
        <img class="pic_title" data-aos="fade-up" src="./s6/title.svg" data-aos-delay="100" />
        <p data-aos="fade-up" data-aos-delay="300">
          一個健康的居住環境，不該只是疊加建材與設備，城安透過遵循美國fitwel認證的嚴謹指標，作為選地與規劃方向，讓建築具備健康宅基因。
          <br /><br />
          fitwel認證由美國CDC與聯邦總務署GSA聯合推動，綜整超過 5,600件文獻、訂定70個以上評估項目，達到「健康人居，世界共享」的理想。
        </p>
        <ul class="pic_box">
          <li data-aos="fade-up" data-aos-delay="0">
            <img src="./s6/1.svg" />
            <span>{{ json[0].ch }}</span>
            <span class="is_en">{{ json[0].en }}</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="300">
            <img src="./s6/2.svg" />
            <span>{{ json[1].ch }}</span>
            <span class="is_en">{{ json[1].en }}</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="600">
            <img src="./s6/3.svg" />
            <span>{{ json[2].ch }}</span>
            <span class="is_en">{{ json[2].en }}</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            <img src="./s6/4.svg" />
            <span>{{ json[3].ch }}</span>
            <span class="is_en">{{ json[3].en }}</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="1200">
            <img src="./s6/5.svg" />
            <span>{{ json[4].ch }}</span>
            <span class="is_en">{{ json[4].en }}</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="1500">
            <img src="./s6/6.svg" />
            <span>{{ json[5].ch }}</span>
            <span class="is_en">{{ json[5].en }}</span>
          </li>
          <li data-aos="fade-up" data-aos-delay="1800">
            <img src="./s6/7.svg" />
            <span>{{ json[6].ch }}</span>
            <span class="is_en">{{ json[6].en }}</span>
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
  
.bg
  position: absolute
  top: 0
  width: 100%
  transform: scaleX(-1)
  &::before
    content: ""
    display: block
    width: 100%
    height: 5vw
    background: linear-gradient(90deg, rgba(0, 192, 255, 0.66) 0%, rgba(0, 166, 255, 0.37) 25%, rgba(0, 136, 255, 0.20) 49.76%, rgba(0, 136, 255, 0.00) 90%)
  span
    width: 100%
    display: block
    height: 4.6vw
    background: linear-gradient(90deg, rgba(0, 153, 255, 0.66) 0%, rgba(0, 144, 255, 0.42) 19.76%, rgba(0, 136, 255, 0.23) 45.1%, rgba(0, 136, 255, 0.00) 90%)

  &::after
    content: ""
    width: 100%
    display: block
    height: 7.7vw
    background: linear-gradient(90deg, rgba(0, 119, 238, 0.52) 0%, rgba(0, 126, 245, 0.29) 26.26%, rgba(0, 133, 252, 0.10) 58.76%, rgba(0, 136, 255, 0.00) 93.26%)

img
  width: 100%
  margin: 0

.horizon
  position: absolute
  width: 33%
  left: 50%
  transform: translateX(-50%)
  top: 30px
  z-index: 15
  opacity: .6
  mix-blend-mode: multiply

.main
  position: relative
  display: flex
  height: 78%
  width: 100%
  padding-top: 9vw
  z-index: 15

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
  .bg
    top: 76vw
    transform: scaleX(1)
    &::before
      display: none
    span
      height: 9vw
    &::after
      height: 15.5vw

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

