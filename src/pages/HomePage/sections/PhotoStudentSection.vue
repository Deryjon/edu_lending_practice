<template>
  <section class="photo-students lg:mt-[250px] xl:mt-[0px]">
    <div class="container">
      <TheTitle class="text-center">Фотографии наших студентов</TheTitle>
      <SliderStudents />
    </div>
  </section>
</template>
<script>
import TheTitle from "../../../ui/theTitle.vue";
import SliderStudents from "../components/SliderStudents.vue";
export default { components: { TheTitle, SliderStudents } };
</script>
  