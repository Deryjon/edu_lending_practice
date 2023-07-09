<template>
  <section class="about min-h-screen mt-[100px] lg:mt-[200px]">
    <div class="container">
      <ThePathLink>Услуги</ThePathLink>
      <theTitle class="text-center mt-[30px]">О нас</theTitle>
      <div class="wrapper flex justify-between mt-[15px]  lg:mt-[25px] ">

        <div class="text lg:w-[650px]">
          <p class="pt-[15px] text-[10px] lg:text-[14px] text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
  
          <p class="pt-[15px] text-[10px] lg:text-[14px] text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore.
          </p>
          <p class="pt-[15px] text-[10px] lg:text-[14px] text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
        </div>
        <div class="img hidden lg:flex">
          <img src="../../../assets/images/img-about.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import theTitle from "../../../ui/theTitle.vue";

import ThePathLink from "../../../ui/thePathLink.vue";
export default {
  components: { theTitle, ThePathLink },
};
</script>
