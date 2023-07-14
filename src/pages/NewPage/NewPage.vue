<template>
  <div class="new-page min-h-screen">
    <NewSection />
		<ConnectWithComponent/>
		<QuestionComponent/>
  </div>
</template>
<script>
import NewSection from "./sections/NewSection.vue";
import ConnectWithComponent from '../../components/ConnectWithComponent.vue'
import QuestionComponent from '../../components/QuestionComponent.vue'
export default { components: { NewSection, ConnectWithComponent, QuestionComponent } };
</script>
