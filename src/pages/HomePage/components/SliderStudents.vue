<template>
     <div
    class="slider pb-[100px]  w-full"
    ref="slider"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="slider-track lg:gap-5 gap-3" :style="trackStyles">
      <div
        class="slider-item w-[140px] lg:w-[270px] h-[140px] lg:h-[270px] bg-top mt-[20px] lg:mt-[100px]  p-[12px] rounded-3xl"
        v-for="(item, index) in items"
        :key="index"
      >
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
      class="slider-control slider-next hidden lg:block lg:w-12 lg:h-12 lg:rounded-full lg:border-none mt-[-50px] p-[5px]"
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

    <div class="slider-indicators lg:hidden">
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
export default {
    data() {
        return {
            items: Array.from({ length: 6 }, (v, i) => i + 1),
            currentIndex: 0,
            blockSize: {
          width: 120,
          height: 224,
        },
            slideAmount: 1,
            swipeThreshold: 50,
            startX: 0,
            endX: 0, 
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
  background-image: url(../../../assets/images/students-photo.jpg);
  background-repeat: no-repeat;
  object-fit: cover;
}

.slider-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(213.88deg, #b1e2ff -67.78%, #68c7ff 175.48%);
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
  display: flex;
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
