<template>
  <section class="connect lg:min-h-screen mt-20 lg:mt-[150px] xl:mt-[-200px] mb-[50px] ">
    <div class="img">
      <img
        src="../assets/icons/pen-connect.svg"
        class="absolute right-0  bottom-[-2900px]  lg:w-[290px] lg:h-[290px]"
        alt=""
      />
    </div>
    
    <div class="container lg:relative ">
      <div class="img hidden xl:flex lg:absolute lg:left-[350px] lg:top-[-80px]">
        <img src="../assets/icons/text-text.svg" alt="">
      </div>
     <div class="flag-img hidden xl:flex lg:absolute lg:left-[-20px] lg:top-[-80px]">
      <img src="../assets/icons/flag-connect.svg" alt="">
     </div>
      <div class="img-girl hidden xl:flex lg:absolute lg:bottom-[-550px] lg:left-[150px]">
        <img src="../assets/icons/girl-connect.svg" alt="">
      </div>
      <div class="img-girl-niz hidden xl:flex lg:absolute lg:top-[480px] lg:left-[130px]">
        <img src="../assets/icons/girl-niz.svg" alt="">
      </div>
      <form class="w-[300px] lg:w-[560px] h-[278px] lg:h-[400px] rounded-[20px] bg-[#fff] pt-2 lg:pt-3 ml-auto mr-auto xl:absolute xl:left-[700px] 2xl:left-[900px]  lg:top-[30px]">
        <div class="bord w-[282px] lg:w-[536px] h-[260px] lg:h-[376px] rounded-[20px] mx-2 lg:mx-3">
          <div class="text mt-2 lg:mt-6  lg:w-[331px] lg:ml-auto lg:mr-auto">
            <h3 class="title text-lg lg:text-2xl font-bold text-center">
              Связаться с нами
            </h3>
            <p class="subtitle lg:mt-3 text-[10px] lg:text-[14px] text-gray text-center">
              Оставьте свои данные и наш специалист обязательно свяжемся с Вами
              в течение дня
            </p>
          </div>
          <div class="inputs flex flex-col gap-2 items-center mt-2">
            <div
              class="name w-[264px] lg:w-[440px] h-[30px] lg:h-[48px] flex items-center gap-2 p-3 bg-[rgba(248,252,255,255)] rounded-lg"
            >
              <div class="icon w-[10px] lg:w-[14px] h-[10px] lg:h-[14px]">
                <img
                  src="../assets/icons/input-name.svg"
                  class="w-full h-full"
                  alt="input-name-icon"
                />
              </div>
              <input
                type="text"
                placeholder="Ваше имя"
                class="bg-[rgba(248,252,255,255)] mt-[2px] outline-none text-[10px] lg:text-sm text-[rgba(189,210,222,255)]"
              />
            </div>
            <!-- number -->
            <div
              class="number w-[264px] lg:w-[440px] h-[30px] lg:h-[48px] flex items-center gap-2 p-3 bg-[rgba(248,252,255,255)] rounded-lg"
            >
              <div class="icon w-[10px] lg:w-[14px] h-[10px] lg:h-[14px]">
                <img
                  src="../assets/icons/input-phone.svg"
                  class="w-full h-full"
                  alt="input-name-icon"
                />
              </div>
              <input
                type="text"
                placeholder="+998 (___) __ - __ - __"
                class="bg-[rgba(248,252,255,255)] mt-[2px] outline-none text-[10px] lg:text-sm text-[rgba(189,210,222,255)]"
                id="phone"
                v-model="formattedPhone"
                @input="formatInput"
              />
            </div>
            <!-- comment -->
            <div
              class="comment w-[264px] lg:w-[440px] h-[80px] lg:h-[100px] flex items-center gap-2 p-3 bg-[rgba(248,252,255,255)] rounded-lg"
            >
              <div class="icon w-[10px] lg:w-[14px] h-[10px] lg:h-[14px] mb-auto">
                <img
                  src="../assets/icons/input-comment.svg"
                  class="w-full h-full"
                  alt="input-name-icon"
                />
              </div>
              <textarea rows="5" cols="30"
                type="text"
                placeholder="Дополнительные комментарии"
                class="bg-[rgba(248,252,255,255)] outline-none text-[10px] lg:text-sm text-[rgba(189,210,222,255)] w-[200px] lg:w-[400px] mt-[15px] lg:mt-[18px]"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="send-button-container">
          <theSendButton class="send-button lg:mr-auto lg:ml-auto" />
        </div>
      </form>
    </div>
    <div class="bg-img min-h-screen w-full lg:hidden">
      <div class="icon-tree pt-20">
        <img src="../assets/icons/tree-icon.svg" alt="">
      </div>
    </div>
  </section>
</template>
<script>
import theSendButton from "../ui/theSendButton.vue";
export default {
  components: { theSendButton },
  data() {
    return {
      formattedPhone: "",
    };
  },
  computed: {
    placeholderText() {
      return "+998 (___) __ - __";
    },
  },
  methods: {
    setInitialValue() {
      this.formattedPhone = "+998 ";
    },
    formatInput() {
      // Удаляем все символы, кроме цифр, после "+998"
      let digits = this.formattedPhone.substr(5).replace(/\D/g, "");

      // Ограничиваем ввод до 9 цифр
      digits = digits.slice(0, 9);

      // Добавляем пробелы в указанном формате
      let formattedNumber = "+998 ";
      for (let i = 0; i < digits.length; i++) {
        if (i === 2 || i === 5 || i === 7) {
          formattedNumber += " ";
        }
        formattedNumber += digits[i];
      }

      this.formattedPhone = formattedNumber;
    },
  },
};
</script>
<style scoped>
form {
  box-shadow: 0px 0px 40px 0px rgba(119, 205, 255, 0.3);

}
.bord {
  border: 2px dashed gray;
}
::placeholder {
  color: rgba(189, 210, 222, 255);
}
.send-button-container {
  margin-top: -20px;
  display: flex;
  justify-content: flex-end;
  padding-right: auto;
}

.send-button {
  margin-top: 8px;
}

@media screen and (max-width: 640px) {
  .bg-img {
    background-image: url(../assets/images/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 330px;

  }
}

 @media screen and (min-width: 641px) {
  .connect {
    background-image: url(../assets/images/bg-desktope.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 100px;
    box-shadow: 0px 0px 40px 0px rgba(119, 205, 255, 0.3);
  }
 }

</style>
