<template>
  <section class="questions lg:bg-center min-h-screen">
    <div class="container">
      <theTitle class="text-center py-10 ">Вопросы и ответы</theTitle>
      <AccardeonQuestions />

    </div>
  </section>
  <img src="../../../assets/icons/question-box.svg" alt="" class="hidden lg:flex relative bottom-[840px]"> 
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
