<template>
  <header class="header pt-[30px] w-full transition-all">
    <div class="container flex items-center justify-between">
      <HeaderLogo  />
      <HeaderLinks  />
      <HeaderMenu />
      <HeaderActions />
    </div>
  </header>
</template>

<script>
import HeaderActions from "./components/HeaderActions.vue";
import HeaderLinks from "./components/HeaderLinks.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderMenu from "./components/HeaderMenu.vue";

export default {
  components: { HeaderLogo, HeaderLinks, HeaderMenu, HeaderActions },
};
</script>
<style></style>
