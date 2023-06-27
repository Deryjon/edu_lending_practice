<template>

  <div
    class="slider pb-[100px]  w-full"
    ref="slider"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="slider-track lg:gap-5 gap-3" :style="trackStyles">
      <div
        class="slider-item w-[270px] lg:w-[367px] h-[186px] lg:h-[304px] mt-[70px] lg:mt-[100px] bg-white p-[12px] rounded-3xl"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="bord w-[252px] lg:w-[343px] h-[168px] lg:h-[280px]">
          <div
            class="icon ml-[75px] lg:ml-[100px] mt-[-80px] lg:mt-[-100px] lg:w-[150px] rounded-full"
          >
            <img
              src="../../../assets/images/reviews-img.jpg "
              alt="icon"
              class=" w-[96px] lg:w-[212px] h-[96px] lg:h-[150px] rounded-full"
            />
          </div>
          <div class="text w-[229px] lg:w-[313px] h-[108px] lg:h-[163px] m-auto mt-4">
            <p class="text-gray text-center text-sm lg:text-lg">Александр Иванов</p>
          <TheSubtitle class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!</TheSubtitle>
          </div>
        </div>
      </div>
    </div>
    <button
      class="slider-control slider-prev hidden lg:block w-12 h-12 rounded-full border-none mt-[-50px] p-[5px]"
      @click="slidePrev"
    >
      <div
        class="hidden lg:block w-[38px] h-[38px] rounded-full border-none pl-3 pt-3"
      >
        <img
          src="../../../assets/icons/prev.svg"
          class="w-[15px] h-[15px]"
          alt=""
        />
      </div>
    </button>
    <button
      class="slider-control slider-next hidden lg:block w-12 h-12 rounded-full border-none mt-[-50px] p-[5px]"
      @click="slideNext"
    >
      <div
        class="hidden lg:block w-[38px] h-[38px] rounded-full border-none pl-3 pt-3"
      >
        <img
          src="../../../assets/icons/next.svg"
          class="w-[15px] h-[15px]"
          alt="next"
        />
      </div>
    </button>

    <div class="slider-indicators flex lg:hidden">
      <span
        class="slider-indicator"
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>

import TheSubtitle from '../../../ui/theSubtitle.vue';
export default {
    data() {
        return {
            items: Array.from({ length: 6 }, (v, i) => i + 1),
            currentIndex: 0,
            blockSize: {
          width: 280,
          height: 224,
        },
            // Размер блока в пикселях
            slideAmount: 1,
            swipeThreshold: 50,
            startX: 0,
            endX: 0, // Конечная позиция X при свайпе
        };
    },
    computed: {
        trackStyles() {
            return {
                transform: `translateX(-${this.currentIndex * this.blockSize.width}px)`,
            };
        },
    },
    methods: {
        slidePrev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        slideNext() {
            if (this.currentIndex < this.items.length - this.slideAmount) {
                this.currentIndex++;
            }
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
        onTouchStart(event) {
            this.startX = event.touches[0].clientX;
        },
        onTouchEnd(event) {
            this.endX = event.changedTouches[0].clientX;
            const deltaX = this.endX - this.startX;
            if (Math.abs(deltaX) > this.swipeThreshold) {
                if (deltaX < 0) {
                    this.slideNext();
                }
                else {
                    this.slidePrev();
                }
            }
        },
    },
    components: { TheSubtitle }
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-item {
  flex-shrink: 0;
}

.slider-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(213.88deg, #b1e2ff -67.78%, #68c7ff 175.48%);
  border: 1px solid #ccc;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.slider-control:hover {
  background: linear-gradient(213.88deg, #c6eaff -67.78%, #81d0ff 175.48%);
  box-shadow: 0px 0px 25px rgba(146, 214, 255, 0.5);
}

.slider-control div {
  background: linear-gradient(322.12deg, #b1e2ff 1.25%, #68c7ff 89.56%);
  transition: 0.5s;
}
.slider-control div:hover {
  background: linear-gradient(322.12deg, #b1e2ff 1.25%, #68c7ff 89.56%);
  border-radius: 25px;
}

.slider-prev {
  left: 10px;
}

.slider-next {
  right: 10px;
}

.slider-indicators {
  justify-content: center;
  margin-top: 10px;
}

.slider-indicator {
  display: inline-block;
  width: 12px;
  height: 3px;
  margin: 0 5px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.slider-indicator.active {
  background-color: #fe0002;
  width: 20px;
  height: 5px;
}
</style>
