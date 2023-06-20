<template>
  <section
    class="hero min-h-screen bg bg-top lg:bg-center flex items-center py-5 xs:items-center"
  >
    <div class="container lg:flex lg:flex-col gap-[300px]">
      <div class="block relative w-[300px] lg:w-[721px] ">
        <div
          class="bg-layer lg:w-[899px] h-[606px] absolute left-0 top-0 bg-[#fff] opacity-50 blur-[150px]"
        ></div>

        <h1
          class="title relative text-lg lg:text-[44px] lg:mt-[200px] w-full leading-5 lg:leading-[60px] text-dark font-bold"
        >
          Грант и контрактное обучение в
          <span
            class="text-lg lg:text-[44px] lg:leading-[60px] text-brand font-bold"
          >
            зарубежных</span
          >
          вузах
        </h1>
        <p class="subtitle relative text-gray text-xs lg:text-lg mt-4 lg:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>

        <TheCallButton class="relative mt-8"></TheCallButton>
      </div>
      <div class="times  lg:ml-[100px] relative lg:items-center lg:gap-10 hidden lg:flex">
        <div class="location flex items-center gap-3" >
        <div class="icon">
          <img src="../../../assets/icons/location-info.svg" alt="" />
        </div>
        <p class="text text-[15px]  font-bold text-dark">г. Город <span class="text-[#7A7A7A]">ул. Улица, 24 (Офис 24)</span></p>
      </div>
        <div
          class="time flex  items-center gap-[10px]  "
        >
          <div class="icon w-[12px] lg:w-[16px] h-[12px] lg:h-[16px]">
            <img
              src="../../../assets/icons/location-time.svg"
              alt=""
              class="w-full h-full"
            />
          </div>
          <p class="text text-[15px]  font-bold text-dark ">
            Пн-Пт 9:00 - 18:00
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheCallButton from "../../../ui/theCallButton.vue";

export default {
  components: { TheCallButton },
};
</script>

<style lang="scss">
.hero {
  background-image: url("../../../assets/images/main-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
