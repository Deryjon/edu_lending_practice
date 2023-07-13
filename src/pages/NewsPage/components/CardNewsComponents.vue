<template>
  <v-card
    class="card lg:flex lg:gap-5 card w-[300px] lg:w-[850px] h-[390px] lg:h-[200px] bg-[rgba(255, 255, 255, 1)] mt-6 mx-auto rounded-[20px] p-[9px] lg:p-[12px]"
    v-for="(commentIndex, index) in commentsToShow"
    :key="index"
    v-show="index < studentsData.length"
  >
    <v-img class="card-img w-[282px] h-[182px]  rounded-[20px]">
      <img
        :src="studentsData[index].image"
        alt="card-img-student"
        class="w-full h-full"
      />
    </v-img>
    <div class="text">
      <p class="text-gray font-bold text-sm lg:text-lg mt-[10px]">
        {{ studentsData[index].name }} {{ index + 1 }}
      </p>
      <p class="text-[10px] lg:text-xs text-gray mt-1 lg:mt-[6px]">
        {{ studentsData[index].description }}
      </p>
      <div class="university flex gap-2 mt-[6px] lg:mt-[10px]">
        <div class="icon">
          <img src="../../../assets/icons/university-icon.svg" alt="" />
        </div>
        <p class="text-gray text-[10px] lg:text-xs">
          {{ studentsData[index].university }}
        </p>
      </div>
    </div>
  </v-card>
  <div class="action" v-show="commentsToShow < studentsData.length">
    <theMoreButton
      @click="commentsToShow += 3"
      class="mx-auto mt-[20px] lg:mt-[30px]"
    />
  </div>
</template>
<script>

import theMoreButton from "../../../ui/theMoreButton.vue";
export default {
    components: {theMoreButton},
    data: () => ({
    totalComments: 0,
    commentsToShow: 3,
    studentsData: [
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "10 минут",
      },
      {
        image: "src/assets/images/red-square.jpg",
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        time: "10 минут",
      },
    ],
  }),
  methods: {
    // loadMore() {
    //   // const newItems = Array.from({ length: this.pageSize }, () => ({
    //   //   image: "src/assets/icons/man-students.svg",
    //   //   name: "Александр Иванов",
    //   //   description:
    //   //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
    //   //   university: "Название университета",
    //   // }));
    //   // this.studentsData = this.studentsData.concat(newItems);
    //   // this.currentPage++;
    // },
  },
  mounted() {
    this.totalComments = this.studentsData.length;
    console.log(this.studentsData.length);
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.05);
}
</style>
