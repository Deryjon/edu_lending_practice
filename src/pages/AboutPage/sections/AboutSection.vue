<template>
  <section class="about min-h-screen mt-[100px] lg:mt-[200px]">
    <div class="container">
      <div class="path-sections flex items-center">
        <div class="icon w-[10px] h-[10px]">
          <img
            src="../../../assets/icons/home-path-icon.svg"
            alt="home-path-icon"
            class="w-full h-full"
          />
        </div>
        <p class="ml-[6px] text-xs text-[#D9D9D9]">Главная</p>
        <div class="icon-prev ml-[10px]">
          <img
            src="../../../assets/icons/path-svg-link.svg"
            alt="path-svg-link"
          />
        </div>
        <p class="about-path-link text-xs text-[#7A7A7A] ml-[10px]">О нас</p>
      </div>
      <theTitle class="text-center mt-[30px]">О нас</theTitle>
      <p class="pt-[15px] text-[10px] text-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p class="pt-[20px] text-[10px] text-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore.
      </p>
      <p class="pt-[20px] text-[10px] text-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut.
      </p>
    </div>
  </section>
</template>
<script>
import theTitle from "../../../ui/theTitle.vue";
export default {
  components: { theTitle },
};
</script>
