<template>

  <div class="news-page min-h-screen">
    <NewsSection/>
		<ConnectWithComponent/>
		<QuestionComponent/>
  </div>
</template>
<script>
import NewsSection from './sections/NewsSection.vue';
import ConnectWithComponent from '../../components/ConnectWithComponent.vue'
import QuestionComponent from '../../components/QuestionComponent.vue'
export default { components: { NewsSection, ConnectWithComponent, QuestionComponent } };
</script>
