<template>
  <div
    class="hidden-menu bg-[#F8FCFF] fixed left-0 top-0 w-full h-full p-5 flex flex-col "
  >
    <div class="wrapper ">
      <div class="head flex items-center justify-between pt-3">
        <HeaderLinks />
        <HeaderLogo @click="$emit('closeMenu')" class="order-2" />
        <button
          class="close-btn  w-7 h-7 flex justify-center items-center order-3"
          @click="$emit('closeMenu')"
        >
          <img src="../../../assets/icons/times.svg" alt="times-icon" />
        </button>
      </div>
      <div class="menu-list ml-auto pt-5">
        <ul class="menu">
          <li
            class="mt-5 text-dark font-medium text-center text-sm"
            v-for="item in menuItems"
            :key="item"
            @click="$emit('closeMenu')"
          >
            <RouterLink :to="{ name: item.link }">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="action mt-12 flex justify-center">
        <button class="btn w-[215px] h-[48px] rounded-3xl flex">
          <div
            class="img w-[38px] h-[38px] rounded-3xl m-[5px] flex items-center"
          >
            <img src="../../../assets/icons/chat.svg " class="p-3" alt="" />
          </div>
          <p
            class="flex py-3 ml-4 lg:ml-[16px] text-brand text-sm font-bold lg:text-[16px]"
          >
            Оставить заявку
          </p>
        </button>
      </div>
    </div>
    <div class="location-info mt-[150px]">
      <div class="time flex items-center gap-2">
        <div class="icon">
          <img src="../../../assets/icons/location-time.svg" alt="" />
        </div>
        <p class="text text-base font-medium text-[#313131]">Пн-Пт 9:00 - 18:00</p>
      </div>
      <div class="location flex items-center gap-3" >
        <div class="icon">
          <img src="../../../assets/icons/location-info.svg" alt="" />
        </div>
        <p class="text text-base font-medium text-[#313131]">г. Город <span class="text-[#7A7A7A]">ул. Улица, 24 (Офис 24)</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import meniList from "../menuList";
import HeaderLinks from "./HeaderLinks.vue";
import HeaderLogo from "./HeaderLogo.vue";

export default {
  components: { HeaderLogo, HeaderLinks },
  data() {
    return {
      menuItems: meniList,
    };
  },
};
</script>
<style lang="scss" scoped>
.btn {
  background: #ffff;
  .img {
    background: linear-gradient(322.12deg, #b1e2ff 1.25%, #68c7ff 89.56%);
  }
}
</style>
