<template>
  <main>
    <HeaderLayout />
    <RouterView />
 <FooterLayout />
  </main>
</template>

<script>
import FooterLayout from "./layouts/FooterLayout/FooterLayout.vue";
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout
},
};
</script>