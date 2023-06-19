<template>
  <div class="location-info  flex xl:ml-[250px] lg:ml-[200px] flex-col lg:flex-row gap-5  mb-8">
    <div class="phone-number flex items-center lg:pt-[25px] gap-2 mt-[10px] lg:mt-0 lg:order-1" >
      <div class="icon w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]">
        <img src="../../../assets/icons/call-icon.svg" alt="" />
      </div>
      <div class="text text-[#313131] text-sm  lg:text-sm leading-4 lg:leading-5 font-normal  flex items-center">
        <p class="lg:ml-[15px]">+998 (99) 878-63-99</p>
        <p class="ml-[8px] lg:ml-[30px]">+998 (99) 878-63-99</p>
      </div>
    </div>
    <div class="time flex 2xl:ml-[80px] items-center  gap-2 lg:pt-[25px] order-[-1] lg:order-2 mt-[10px] lg:mt-0">
      <div class="icon w-[12px] lg:w-[16px] h-[12px] lg:h-[16px] ">
        <img src="../../../assets/icons/location-time.svg" alt="" class="w-full h-full"/>
      </div>
      <p class="text text-sm   font-medium text-[#313131] lg:ml-[15px]">
        Пн-Пт 9:00 - 18:00
      </p>
    </div>
    <div class="location flex 2xl:ml-[50px] items-center gap-3 lg:gap-4 lg:pt-[25px] order-[-1] lg:order-3 mt-[10px] lg:mt-0">
      <div class="icon w-[9px] lg:w-[12px] h-[11px] lg:h-[16px]">
        <img src="../../../assets/icons/location-info.svg" alt="" class="w-full h-full"/>
      </div>
      <p class="text text-sm  xl:text-base font-medium text-[#313131]">
        г. Город <span class="text-[#7A7A7A] ml-[8px]">ул. Улица, 24 (Офис 24)</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
