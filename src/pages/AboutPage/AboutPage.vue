<template>
  <div class="about-page min-h-screen">
    <AboutSection />
    <ServicesSection />
     <ConnectWithComponents />
    <QuestionComponent  /> 
  </div>
</template>

<script>
import AboutSection from "./sections/AboutSection.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import ConnectWithComponents from "../../components/ConnectWithComponent.vue";
import QuestionComponent from "../../components/QuestionComponent.vue";
export default {
  components: {
    AboutSection,
    ServicesSection,
    ConnectWithComponents,
    QuestionComponent,
  },
};
</script>
