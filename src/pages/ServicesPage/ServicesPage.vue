<template>
  <div class="services-page min-h-screen">
    <ServiceSection />

    <ConnectWithComponents />
    <QuestionComponent />
  </div>
</template>
<script>
import ServiceSection from "./sections/ServiceSection.vue";
import ConnectWithComponents from "../../components/ConnectWithComponent.vue";
import QuestionComponent from "../../components/QuestionComponent.vue";
export default {
  components: { ServiceSection, ConnectWithComponents, QuestionComponent },
};
</script>
