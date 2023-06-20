<template>
    <div class="card  w-full lg:w-[367px] h-[122px] lg:h-[180px] mt-[55px] p-[11px] ">
        <div class="bord w-[290px] lg:w-[343px] h-[104px] lg:h-[156px] ">
        <div class="icon ml-[100px] mt-[-60px] lg:mt-[-70px]  lg:w-[150px] ">
          <img :src="`${data.image}`" alt="icon" class="lg:w-full"/>
        </div>
      <div class="text w-[247px] h-[36px] m-auto  mt-4">
        <TheSubtitle class="text-center lg:w-[270px]">{{ data.text }}</TheSubtitle>
      </div>
    </div>
  </div>
</template>
<script>
import TheSubtitle from "../../../ui/theSubtitle.vue";
export default {
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
  components: { TheSubtitle },
};
</script>
<style scoped>
.card {
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}
.bord {
  border: 1px dashed #ecf6fc;
  border-radius: 20px;
}
</style>
