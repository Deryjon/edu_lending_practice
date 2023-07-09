<template>
    <section class="services min-h-screen pb-[100px] lg:mb-[210px] mt-[100px] lg:mt-[200px]">
        <div class="container">
          <thePathLink>Услуги</thePathLink>
        <theTitle class="text-center mt-[30px]">Услуги</theTitle>
        <div
          class="wrapper lg:w-full lg:flex flex-wrap lg:justify-between lg:mt-[50px]"
        >
          <ServicesCard
            v-for="item in servicesData"
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
  import thePathLink from "../../../ui/thePathLink.vue";
  import ServicesCard from "../../../components/ServicesCard.vue";
  export default {
    data() {
      return {
        servicesData: [
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
            text: "Оформл`ение и перевод документов на иностранный язык",
          },
        ],
      };
    },
    components: { theTitle, theSubtitle, ServicesCard, thePathLink },
  };
  </script>
  <style scoped>
  .services {
    background-image: url(../../../assets/images/white-cloud-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
  </style>
  