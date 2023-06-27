<template>
  <section class="questions min-h-screen">
    <div class="container">
      <theTitle class="text-center mb-5">Вопросы и ответы</theTitle>
      <AccardeonQuestions />
    </div>
  </section>
</template>

<script>
import AccardeonQuestions from "../components/AccardeonQuestions.vue";
import theTitle from "../../../ui/theTitle.vue";
export default { components: { AccardeonQuestions, theTitle } };
</script>
<style>
.questions {
  background-image: url("../../../assets/images/univers-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
