<template>
    <section class="question min-h-screen mt-[-200px] lg:mt-[-150px]">
      <div class="container">
        <div
          class="map w-[268px] lg:w-[367px] h-[143px] lg:h-[280px] rounded-[20px] p-[9px] lg:p-[12px] ml-auto mr-auto mt-10"
        >
          <div class="bord w-[250px] lg:w-[343px] h-[125px] lg:h-[256px] rounded-[20px] p-[12px] lg:p-[30px]">
            <div class="phone">
              <div class="top flex items-center gap-[6px]">
                <div class="icon w-[13px] lg:w-[16px] h-[13px] lg:h-[16px]">
                  <img
                    src="../assets/icons/call-icon.svg"
                    alt=""
                    class="w-full h-full"
                  />
                </div>
                <div class="title text-sm lg:text-base font-bold">Телефоны</div>
              </div>
              <div class="numbers pl-5">
                <p class="text-gray text-xs lg:text-sm">+998 (99) 878-63-99</p>
                <p class="text-gray text-xs lg:text-sm">+998 (99) 878-63-99</p>
              </div>
            </div>
            <div class="time mt-[10px] lg:mt-[15px]">
              <div class="top flex items-center gap-[6px]">
                <div class="icon w-[13px] lg:w-[16px] h-[13px] lg:h-[16px]">
                  <img
                    src="../assets/icons/location-time.svg"
                    alt=""
                    class="w-full h-full"
                  />
                </div>
                <div class="title text-sm lg:text-base font-bold">Время работы</div>
              </div>
              <div class="weekend pl-5">
                <p class="text-gray text-xs lg:text-sm">Пн-Пт 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
        <theCallButton class="ml-auto mr-auto mt-[30px] lg:mt-0" />
      </div>
    </section>
  </template>
  <script>
  import theTitle from "../ui/theTitle.vue";
  import theSubtitle from "../ui/theSubtitle.vue";
  import theCallButton from "../ui/theCallButton.vue";
  export default {
    components: { theTitle, theSubtitle, theCallButton },
  };
  </script>
  <style scoped>
  .question {
    background-image: url(../assets/images/bg-question-component.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top 50px;
  }
  .bord {
    border: 2px dashed rgb(231, 230, 230);
  }
  .map {
    box-shadow: 0px 0px 40px 0px rgba(119, 205, 255, 0.3);
    background: rgba(255, 255, 255, 1);
  }
  
  @media (min-width: 780px) {
    .question {
    background-image: url(../assets/images/bg-question-component.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
  }
  }
  </style>
  