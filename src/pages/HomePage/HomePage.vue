<template>
  <div class="home-page min-h-screen">
    <HeroSection />
    <WhySection />
  </div>
</template>
<script>
import HeroSection from "./sections/HeroSection.vue";
import WhySection from "./sections/WhySection.vue";
export default {
  components: {
    HeroSection,
    WhySection,
  },
};
</script>
