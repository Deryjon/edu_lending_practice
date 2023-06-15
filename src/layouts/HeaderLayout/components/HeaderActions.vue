<template>
    <button class="btn w-[215px]  lg:w-[240px] 2xl:ml-[50px] lg:ml-[50px] rounded-3xl hidden  lg:flex">
      <div class="img w-[38px] h-[38px] rounded-3xl m-[5px] flex items-center">
        <img src="../../../assets/icons/chat.svg " class="p-3" alt="" />
      </div>
      <p class="flex py-3 ml-11 lg:ml-[16px] text-brand text-sm font-bold lg:text-[16px]">Оставить заявку</p>
    </button>
    <button class="burger-btn w-9 h-9 mt-3 ml-[65px] flex justify-center items-center lg:hidden order-3" >
      <img src="../../../assets/icons/burger.svg" alt="burger-btn">

    </button>
  </template>
  <script>
  export default{
    
  }
  </script>
  <style lang="scss" scoped>
  .btn {
    background: #ffff;
    .img {
      background: linear-gradient(322.12deg, #b1e2ff 1.25%, #68c7ff 89.56%);
    }
  }
  </style>