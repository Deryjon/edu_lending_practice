<template>
  <v-card
    class="lg:flex lg:gap-5 card w-[300px] lg:w-[850px] h-[390px] lg:h-[200px] bg-[rgba(255, 255, 255, 1)] mt-6 mx-auto rounded-[20px] p-[9px] lg:p-[12px]"
  >
    <v-img class="card-img w-[282px] h-[182px] bg-brand rounded-[20px]">
      <img :src="data.image" alt="card-img-student" class="ml-[60px]" />
    </v-img>
    <div class="text">
      <p class="text-gray font-bold text-sm lg:text-lg mt-[10px]">{{ data.name }}</p>
      <p class="text-[10px] lg:text-xs text-gray mt-1 lg:mt-[6px]">{{ data.description }}</p>
      <div class="university flex gap-2 mt-[6px] lg:mt-[10px]">
        <div class="icon">
          <img src="../../../assets/icons/university-icon.svg" alt="" />
        </div>
        <p class="text-gray text-[10px] lg:text-xs">{{ data.university }}</p>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  data: () => ({}),
};
</script>
<style scoped>
.card {
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.05);
}
</style>
