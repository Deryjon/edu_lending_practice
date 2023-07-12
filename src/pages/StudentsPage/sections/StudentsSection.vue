<template>
  <section
    class="students min-h-screen pb-[100px] lg:mb-[210px] mt-[100px] lg:mt-[200px]"
  >
    <div class="container">
      <thePathLink>Студенты</thePathLink>
      <theTitle class="text-center mt-[30px]">Студенты</theTitle>
      <CardStudentsComponent
        v-for="item in studentsData"
        :key="item.text"
        :data="item"
        class="ml-auto mr-auto"
      />

        <v-card
          class="card lg:flex lg:gap-5 card w-[300px] lg:w-[850px] h-[390px] lg:h-[200px] bg-[rgba(255, 255, 255, 1)] mt-6 mx-auto rounded-[20px] p-[9px] lg:p-[12px]"
          v-for="item in studentsData"
          :key="item.name"
        >
          <v-img class="card-img w-[282px] h-[182px] bg-brand rounded-[20px]">
            <img :src="item.image" alt="card-img-student" class="ml-[60px]" />
          </v-img>
          <div class="text">
            <p class="text-gray font-bold text-sm lg:text-lg mt-[10px]">
              {{ item.name }}
            </p>
            <p class="text-[10px] lg:text-xs text-gray mt-1 lg:mt-[6px]">
              {{ item.description }}
            </p>
            <div class="university flex gap-2 mt-[6px] lg:mt-[10px]">
              <div class="icon">
                <img src="../../../assets/icons/university-icon.svg" alt="" />
              </div>
              <p class="text-gray text-[10px] lg:text-xs">
                {{ item.university }}
              </p>
            </div>
          </div>
        </v-card>
      </div>

    <theMoreButton @click="loadMore" class="mx-auto mt-[20px] lg:mt-[30px]"/>
  </section>
</template>
<script>
import theTitle from "../../../ui/theTitle.vue";
import thePathLink from "../../../ui/thePathLink.vue";
import CardStudentsComponent from "../components/CardStudentsComponent.vue";
import theMoreButton from "../../../ui/theMoreButton.vue";
export default {
  components: { theTitle, thePathLink, CardStudentsComponent, theMoreButton },

  data: () => ({
    currentPage: 1,
    pageSize: 2 ,
    studentsData: [
      {
        image: "src/assets/icons/man-students.svg",
        name: "Александр Иванов",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "Название университета",
      },
      {
        image: "src/assets/icons/man-students.svg",
        name: "Александр Иванов",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "Название университета",
      },
      {
        image: "src/assets/icons/man-students.svg",
        name: "Александр Иванов",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "Название университета",
      },
     
    ],
  }),
  methods: {
    loadMore() {
      const newItems = Array.from({ length: this.pageSize }, () => ({
        image: "src/assets/icons/man-students.svg",
        name: "Александр Иванов",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!",
        university: "Название университета",
      }));

      this.studentsData = this.studentsData.concat(newItems);
      this.currentPage++;
    },
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.05);
}
</style>