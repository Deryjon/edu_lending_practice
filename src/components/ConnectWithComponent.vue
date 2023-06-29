<template>
  <section class="connect mt-20">
    <div class="container">
      <form
        class="w-[300px] h-[278px] rounded-[20px] bg-[rgba(255, 255, 255, 1)] p-2 m-auto"
      >
        <div class="bord w-[282px] h-[260px] rounded-[20px]">
          <div class="text mt-2">
            <h3 class="title text-lg font-bold text-center">
              Связаться с нами
            </h3>
            <p class="subtitle text-[10px] text-gray text-center">
              Оставьте свои данные и наш специалист обязательно свяжемся с Вами
              в течение дня
            </p>
          </div>
          <div class="inputs flex flex-col items-center mt-2">
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
                  src="../assets/icons/input-name.svg"
                  class="w-full h-full"
                  alt="input-name-icon"
                />
              </div>
              <input
                type="text"
                placeholder="Ваше имя"
                class="bg-[rgba(248,252,255,255)] mt-[2px] outline-none text-[10px] text-[rgba(189,210,222,255)]"
                id="phone"
                v-model="formattedPhone"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      formattedPhone: "",
    };
  },
  watch: {
    formattedPhone(newValue) {
      // Удаляем все символы, кроме цифр
      const digits = newValue.replace(/\D/g, '');
      
      // Добавляем пробелы после каждых трех цифр
      let formattedNumber = '';
      for (let i = 0; i < digits.length; i++) {
        if (i > 0 && i % 3 === 0) {
          formattedNumber += ' ';
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
</style>
