<template>
  <div class="accordion-wrapper flex w-full flex-wrap md:justify-between">
    <div
      v-for="(item, index) in items"
      :key="index"
      @click="toggleAccordion(index)"
      :class="{ active: activeIndex === index }"
      class="accordion-item lg:mt-7 w-full md:w-[350px] lg:w-[600px] lg:h-[106px] h-[90px] "
      :style="{ height: activeIndex === index ? '316px' : '106px' }"
    >
      <div class="text flex items-center">
        <div class="accordion-header text-gray rounded-2xl text-xs lg:text-lg">
          {{ item.title }}
        </div>
        <button
          class="slider-control-2 slider-prev w-10 h-10 rounded-full border-none p-[3px] mt-10 absolute ml-[280px] lg:ml-[580px]"
          v-if="activeIndex === index"
        >
          <div class="w-[32px] h-[32px] rounded-full border-none pl-3 pt-3">
            <img
              src="../../../assets/icons/accardion-minus.svg"
              class="w-[10px] h-[10px]"
              alt=""
            />
          </div>
        </button>

        <button
          class="slider-control slider-prev w-10 h-10 rounded-full border-none p-[3px] mt-10 absolute ml-[280px] lg:ml-[580px]"
          v-else
        >
          <div class="w-[32px] h-[32px] rounded-full border-none pl-3 pt-3">
            <img
              src="../../../assets/icons/accardion-plus.svg"
              class="w-[10px] h-[10px]"
              alt=""
            />
          </div>
        </button>
      </div>
      <div
        class="accordion-content rounded-2xl text-[10px] lg:text-[14px] text-gray" 
        v-if="activeIndex === index"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      items: [
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
        },

        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
        },

        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
        },

        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.accordion-header {
  cursor: pointer;
  background-color: #fff;
  padding: 10px;
  border: 1px solid rgba(236, 246, 252, 1);
}

.accordion-content {
  padding: 10px;
  background-color: #fff;
  border: 1px solid rgba(236, 246, 252, 1);
}

.accordion-item {
  transition: height 0.3s ease;
}

.accordion-item.active {
  height: 316px;
}

.active .accordion-header {
  background-color: #fff;
}
.slider-control {
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


.slider-control-2 {
  transform: translateY(-50%);
  background: rgba(238, 239, 239, 1);
  border: 1px solid #ccc;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.slider-control-2:hover {
  background: rgb(228, 221, 221);
  box-shadow: 0px 0px 25px rgba(114, 121, 126, 0.5);
}

.slider-control-2 div { 
  background:(255, 255, 255, 0.5)
;
  transition: 0.5s;
}
.slider-control-2 div:hover {
  background: rgba(238, 239, 239, 0.797);
  border-radius: 25px;
}
</style>
