<template>
  <section
    class="new min-h-screen  pb-[100px] lg:mb-[300px] mt-[100px] lg:mt-[200px] "
  >
    <div class="container">
      <thePathLinks>
        Новости
        <template v-slot:mySlotName>
          <p>{{ selectedNewsData.name }}</p>
        </template>
      </thePathLinks>



      <TheTitle class="text-center mt-[30px]">{{ selectedNewsData.name }}</TheTitle>
      <div class="img w-[1000px] h-[200px] mr-auto ml-auto lg:h-[400px]  rounded-3xl bg-red-500 mt-[15px] hidden lg:flex" ></div>
      <p class="text-[10px] lg:text-sm mt-[15px] lg:w-[1000px] text-gray mr-auto ml-auto" >
       {{selectedNewsData.description}}
      </p>
      <div class="img w-full h-[200px] lg:h-[400px] rounded-3xl bg-red-500 mt-[15px] lg:hidden" >

        <!-- <img :src="`${selectedNewsData.image}`" alt=""> -->
      </div>
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
