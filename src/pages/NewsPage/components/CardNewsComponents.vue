<template>
  <v-card
    class="card lg:flex lg:gap-5 card w-[300px] lg:w-[850px] h-[390px] lg:h-[200px] bg-[rgba(255, 255, 255, 1)] mt-6 mx-auto rounded-[20px] p-[9px] lg:p-[12px] cursor-pointer"
    v-for="(commentIndex, index) in commentsToShow"
    :key="index"
    v-show="index < newsData.length"
    @click="goToNews(newsData[index].id)"
  >
    <v-img class="card-img w-[282px] h-[182px] rounded-[20px]">
      <img
        :src="newsData[index].image"
        alt="card-img-student"
        class="w-full h-full"
      />
    </v-img>
    <div class="text">
      <p class="text-gray font-bold text-sm lg:text-lg mt-[10px]">
        {{ newsData[index].name }} {{ newsData[index].id }}
      </p>
      <p class="text-[10px] lg:text-xs text-gray mt-1 lg:mt-[6px]">
        {{ newsData[index].description }}
      </p>
      <div class="university flex gap-2 mt-[6px] lg:mt-[10px]">
        <div class="icon">
          <img src="../../../assets/icons/time-icon-news.svg" alt="" />
        </div>
        <p class="text-gray text-[10px] lg:text-xs">
          Время чтения:
          <span class="font-bold">
            {{ newsData[index].time }}
          </span>
        </p>
      </div>
    </div>
  </v-card>
  <div class="action" v-show="commentsToShow < newsData.length">
    <theMoreButton
      @click="commentsToShow += 3"
      class="mx-auto mt-[20px] lg:mt-[30px]"
    />
  </div>
</template>
<script>
import theMoreButton from "../../../ui/theMoreButton.vue";
import dataNews from '../../../dataNews.js'
export default {
  components: { theMoreButton },
  data: () => ({
    selectedNewsData: null,
    totalComments: 0,
    commentsToShow: 3,
    newsData: dataNews
  }),

  methods: {
    // loadMore() {
    //   // this.studentsData = this.studentsData.concat(newItems);
    //   // this.currentPage++;
    // },
    goToNews(id) {
      this.selectedNews = id;
      this.$router.push({ name: "new", params: { id: id } });
      console.log();
    },
  },
  mounted() {
    this.totalComments = this.newsData.length;
    console.log(this.newsData.length);
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.05);
}
</style>
