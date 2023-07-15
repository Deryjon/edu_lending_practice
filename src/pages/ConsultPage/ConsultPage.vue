<template>
  <div class="consult-page">
    <ConsultSection />
    <!-- <ConnectWithComponents />
    <QuestionComponent /> -->
  </div>
</template>

<script>
import ConsultSection from "./sections/ConsultSection.vue";
// import ConnectWithComponents from "../../components/ConnectWithComponent.vue";
// import QuestionComponent from "../../components/QuestionComponent.vue";
export default {
  components: {
    ConnectWithComponents,
    QuestionComponent,
    ConsultSection,
  },
};
</script>
