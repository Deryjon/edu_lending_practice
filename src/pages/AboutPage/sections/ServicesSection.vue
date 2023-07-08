<template>
  <section class="services min-h-screen">
    <div class="container">
      <theTitle class="text-center">Услуги</theTitle>
      <theSubtitle
        class="text-center w-[254px] lg:w-full ml-auto mr-auto mt-[15px]"
        >Мы предлагаем нашим клиентам следующие услуги:</theSubtitle
      >
      <div
        class="wrapper lg:w-full lg:flex flex-wrap lg:justify-between lg:mt-[50px]"
      >
        <ServicesCard
          v-for="item in servicesCardsData"
          :key="item.text"
          :data="item"
          class="ml-auto mr-auto"
        />
      </div>
    </div>
  </section>
</template>
<script>
import theTitle from "../../../ui/theTitle.vue";
import theSubtitle from "../../../ui/theSubtitle.vue";

import ServicesCard from "../components/ServicesCard.vue";
export default {
  data() {
    return {
      servicesCardsData: [
        {
          image: "src/assets/icons/black-hat.svg",
          text: "Поступление в зарубежные ВУЗы",
        },
        {
          image: "src/assets/icons/book-yellow.svg",
          text: "Оформление всех документов для поступления",
        },
        {
          image: "src/assets/images/passport.png",
          text: "Помощь в оформлении и получении визы",
        },
        {
          image: "src/assets/icons/ticket.svg",
          text: "Организация переезда и размещения студента",
        },

        {
          image: "src/assets/icons/flags-services.svg",
          text: "Организация языковых курсов и туристических поездок",
        },

        {
          image: "src/assets/icons/translate-icon.svg",
          text: "Оформление и перевод документов на иностранный язык",
        },
      ],
    };
  },
  components: { theTitle, theSubtitle, ServicesCard },
};
</script>
<style scoped>
.services {
  background-image: url(../../../assets/images/white-cloud-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
