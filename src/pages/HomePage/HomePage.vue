<template>
  <div class="home-page min-h-screen min-w-full">
    <HeroSection />
    <WhySection />
    <PhotoStudentSection />
    <QuestionSection />
    <ConnectWithComponent />
    <QuestionComponent />
  </div>
</template>
<script>
import HeroSection from "./sections/HeroSection.vue";
import WhySection from "./sections/WhySection.vue";
import PhotoStudentSection from "./sections/PhotoStudentSection.vue";
import ConnectWithComponent from "../../components/ConnectWithComponent.vue";
import QuestionSection from "./sections/QuestionSection.vue";

import QuestionComponent from "../../components/QuestionComponent.vue";
export default {
  components: {
    HeroSection,
    WhySection,
    PhotoStudentSection,
    QuestionSection,
    ConnectWithComponent,
    QuestionComponent,
  },
};
</script>
