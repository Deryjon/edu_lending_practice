<template>
  <section class="consult min-h-screen relative pb-[100px] lg:mb-[210px] mt-[100px] lg:mt-[200px]">
    <div class="container">
      <thePathLink>Новости</thePathLink>
      <theTitle class="text-center mt-[30px]">Новости</theTitle>
      <CardNewsComponents class="ml-auto mr-auto"/>
    </div>
  </section>
</template>
<script>
import thePathLink from "../../../ui/thePathLink.vue";
import theTitle from "../../../ui/theTitle.vue";
export default {
    components:{thePathLink, theTitle}
};
</script>
