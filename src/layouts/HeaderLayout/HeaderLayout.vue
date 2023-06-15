<template>
  <header class="header pt-[30px] w-full transition-all">
    <div class="container flex items-center justify-between">
      <HeaderLogo  />
      <HeaderLinks  />
      <HeaderMenu />
      <HeaderActions @openMenu="toggleMenu" />
      <Transition name="menu"> 
        <HiddenMenu class="z-50"  v-if="isOpen" @closeMenu="toggleMenu"/>
      </Transition> 
    </div>
  </header>
</template>

<script>
import HeaderActions from "./components/HeaderActions.vue";
import HeaderLinks from "./components/HeaderLinks.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderMenu from "./components/HeaderMenu.vue";
import HiddenMenu from "./components/HiddenMenu.vue";

export default {
  components: { HeaderLogo, HeaderLinks, HeaderMenu, HeaderActions, HiddenMenu },
  data() {
    return{
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style>
.menu-enter-active,
.menu-leave-active {
  transition: 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(100%);
}
</style>
