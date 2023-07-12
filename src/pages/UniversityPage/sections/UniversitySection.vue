<template>
  <section
    class="universities min-h-screen pb-[100px] lg:mb-[210px] mt-[100px] lg:mt-[200px]"
  >
    <div class="container">
      <thePathLink>Университеты</thePathLink>
      <theTitle class="text-center mt-[30px]">Университеты</theTitle>
    </div>
  </section>
</template>
<script>
import thePathLink from "../../../ui/thePathLink.vue";
import theTitle from "../../../ui/theTitle.vue";
export default {
  components: {
    thePathLink,
    theTitle
  },
};
</script>
