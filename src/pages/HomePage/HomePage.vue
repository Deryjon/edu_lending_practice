<template>
  <div class="home-page min-h-screen">
    <HeroSection />
    <WhySection />
    <PhotoStudentSection />
  </div>
</template>
<script>
import HeroSection from "./sections/HeroSection.vue";
import WhySection from "./sections/WhySection.vue";
import PhotoStudentSection from "./sections/PhotoStudentSection.vue";

export default {
  components: {
    HeroSection,
    WhySection,
    PhotoStudentSection,
  },
};
</script>
