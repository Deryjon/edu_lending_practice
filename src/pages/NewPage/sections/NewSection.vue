<template>
  <section
    class="new min-h-screen relative pb-[100px] lg:mb-[210px] mt-[100px] lg:mt-[200px]"
  >
    <div class="container">
      <thePathLinks>
        Новости
        <template v-slot:mySlotName>
          <!-- <p>{{ newsData[index].name }}</p> -->
        </template>
      </thePathLinks>

      <TheTitle class="text-center mt-[30px]">{{ selectedNewsData.name }}</TheTitle>
      <p class="text-[10px] lg:text-sm mt-[15px]">
       {{selectedNewsData.description}}
      </p>
    </div>
  </section>
</template>
<script>
import thePathLinks from "../../../ui/thePathLinks.vue";
import TheTitle from "../../../ui/theTitle.vue";
import dataNews from "../../../dataNews.js";
export default {
  data: () => ({
    dataNew: dataNews,
  }),
  components: { thePathLinks, TheTitle },
  computed: {
    selectedNewsData() {
      const a = this.dataNew.find((item) => item["id"] == this.$route.params.id);
      return a;
    },
  },
};
</script>
