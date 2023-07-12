<template>
  <div class="students-page min-h-screen">
    <StudentsSection />
    <ConnectWithComponents/>
    <QuestionComponent/>
  </div>
</template>
<script>
import StudentsSection from "./sections/StudentsSection.vue";
import ConnectWithComponents from "../../components/ConnectWithComponent.vue";
import QuestionComponent from "../../components/QuestionComponent.vue";
export default { components: { StudentsSection, ConnectWithComponents, QuestionComponent } };
</script>
