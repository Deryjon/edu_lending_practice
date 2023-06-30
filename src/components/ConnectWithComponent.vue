<template>
  <section class="connect mt-20 mb-[50px]">
    <div class="container">
      <div class="img">
        <img
          src="../assets/icons/pen-connect.svg"
          class="absolute right-0 bottom-[-2880px]"
          alt=""
        />
      </div>
      <form class="w-[300px] h-[278px] rounded-[20px] bg-[#fff] pt-2 m-auto ">
        <div class="bord w-[282px] h-[260px] rounded-[20px] mx-2">
          <div class="text mt-2">
            <h3 class="title text-lg font-bold text-center">
              Связаться с нами
            </h3>
            <p class="subtitle text-[10px] text-gray text-center">
              Оставьте свои данные и наш специалист обязательно свяжемся с Вами
              в течение дня
            </p>
          </div>
          <div class="inputs flex flex-col gap-2 items-center mt-2">
            <div
              class="name w-[264px] h-[30px] flex items-center gap-2 p-3 bg-[rgba(248,252,255,255)] rounded-lg"
            >
              <div class="icon w-[10px] h-[10px]">
                <img
                  src="../assets/icons/input-name.svg"
                  class="w-full h-full"
                  alt="input-name-icon"
                />
              </div>
              <input
                type="text"
                placeholder="Ваше имя"
                class="bg-[rgba(248,252,255,255)] mt-[2px] outline-none text-[10px] text-[rgba(189,210,222,255)]"
              />
            </div>
            <!-- number -->
            <div
              class="number w-[264px] h-[30px] flex items-center gap-2 p-3 bg-[rgba(248,252,255,255)] rounded-lg"
            >
              <div class="icon w-[10px] h-[10px]">
                <img
                  src="../assets/icons/input-phone.svg"
                  class="w-full h-full"
                  alt="input-name-icon"
                />
              </div>
              <input
                type="text"
                placeholder="+998 (___) __ - __ - __"
                class="bg-[rgba(248,252,255,255)] mt-[2px] outline-none text-[10px] text-[rgba(189,210,222,255)]"
                id="phone"
                v-model="formattedPhone"
                @input="formatInput"
              />
            </div>
            <!-- comment -->
            <div
              class="comment w-[264px] h-[80px] flex items-center gap-2 p-3 bg-[rgba(248,252,255,255)] rounded-lg"
            >
              <div class="icon w-[10px] h-[10px] mb-auto">
                <img
                  src="../assets/icons/input-comment.svg"
                  class="w-full h-full"
                  alt="input-name-icon"
                />
              </div>
              <textarea rows="5" cols="30"
                type="text"
                placeholder="Дополнительные комментарии"
                class="bg-[rgba(248,252,255,255)] outline-none text-[10px] text-[rgba(189,210,222,255)] w-[200px] mt-[15px]"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="send-button-container">
          <theSendButton class="send-button" />
        </div>
      </form>
    </div>
    <div class="bg-img min-h-screen w-full ">
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

@media screen and (min-width: 350px) {
  .bg-img {
    background-image: url(../assets/images/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 330px;

  }
}

/* @media screen and (min-width: 380px) {
  .bg-img {
    background-image: url(../assets/images/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 180px;

  }
}

@media screen and (min-width: 440px) {
  .bg-img {
    background-image: url(../assets/images/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 160px;

  }
}
@media screen and (min-width: 480px) {
  .bg-img {
    background-image: url(../assets/images/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 120px;

  }
}
@media screen and (min-width: 530px) {
  .bg-img {
    background-image: url(../assets/images/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 100px;

  }
}
@media screen and (min-width: 580px) {
  .bg-img {
    background-image: url(../assets/images/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 50px;

  }
}
@media screen and (min-width: 640px) {
  .bg-img {
    background-image: url(../assets/images/bg-mobile.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 10px;

  }
} */
</style>
