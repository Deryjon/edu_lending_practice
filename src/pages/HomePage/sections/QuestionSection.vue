<template>
  <section class="questions lg:bg-center min-h-screen">
    <div class="container">
      <theTitle class="text-center py-10  lg:py-20">Вопросы и ответы</theTitle>
      <AccardeonQuestions/>

    </div>
  </section>
  <img src="../../../assets/icons/question-box.svg" alt="" class="hidden xl:flex  relative  xl:bottom-[740px]"> 
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
