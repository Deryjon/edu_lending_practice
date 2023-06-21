<template>
    <div class="slider pb-[100px]" ref="slider" @touchstart="onTouchStart" @touchend="onTouchEnd">
      <div class="slider-track lg:gap-5 gap-3" :style="trackStyles">
        <div class="slider-item bg-white p-[12px] rounded-3xl" v-for="(item, index) in items" :key="index">
         <div class="img w-[246px] h-[163px] ">
            <img src="../../../assets/images/red-square.jpg" alt="" class="w-full h-full rounded-3xl">
         </div>
         <div class="text flex justify-between items-center mt-1">
            <p class="text-sm lg:text-lg lg:font-bold text-gray">Россия</p>
            <p class="text-xs lg:text-sm  text-[#D9D9D9]">15 вузов</p>
         </div>
          
        </div>
      </div>
      <button class="slider-control slider-prev hidden lg:block w-12 h-12 rounded-full border-none p-[5px]" @click="slidePrev">
        <div class="hidden lg:block w-[38px] h-[38px] rounded-full border-none pl-3 pt-3">

            <img src="../../../assets/icons/prev.svg" class="w-[15px] h-[15px] " alt=""/>
        </div>
      </button>
      <button class="slider-control slider-next hidden lg:block w-12 h-12 rounded-full border-none p-[5px]" @click="slideNext">
        <div class="hidden lg:block w-[38px] h-[38px] rounded-full border-none pl-3 pt-3">

            <img src="../../../assets/icons/next.svg" class="w-[15px] h-[15px] " alt="next"/>
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
        items: Array.from({ length: 12 }, (v, i) => i + 1), // Пример блоков в слайдере
        currentIndex: 0, // Текущий индекс активного блока
        blockSize: {
          width: 270,
          height: 224,
        }, // Размер блока в пикселях
        slideAmount: 3, // Количество блоков, отображаемых за раз
        swipeThreshold: 50, // Пороговое значение для определения свайпа
        startX: 0, // Начальная позиция X при свайпе
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
          } else {
            this.slidePrev();
          }
        }
      },
    },
  };
  </script>
  
  <style>
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
    background: linear-gradient(213.88deg, #B1E2FF -67.78%, #68C7FF 175.48%);
    border: 1px solid #ccc;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
  .slider-control:hover {
    background: linear-gradient(213.88deg, #C6EAFF -67.78%, #81D0FF 175.48%);
box-shadow: 0px 0px 25px rgba(146, 214, 255, 0.5);
    
  }
  
  .slider-control div{
    background: linear-gradient(322.12deg, #B1E2FF 1.25%, #68C7FF 89.56%);
    transition: 0.5s;
  }
  .slider-control div:hover{
    background: linear-gradient(322.12deg, #B1E2FF 1.25%, #68C7FF 89.56%);
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
    background-color: #FE0002;
    width: 20px;
    height: 5px;
  }
  </style>
  