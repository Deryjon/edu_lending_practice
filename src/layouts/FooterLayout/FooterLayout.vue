<template>
    <footer class="footer w-full transition-all h-[120px]" >
     <div class="container  justify-between ">
      <div class="top  flex items-center justify-between">
        <FooterLogo/>
        <FooterLogoWide class="lg:hidden"/>
        <FooterMenu/>
        <FooterLinks/>
      </div>
      <div class="lg:border-b mt-[14px] mb-[9px]" ></div>
      <div class="bottom  flex items-center ">
        <FooterLogoWide class="hidden lg:block" />
        <FooterLocation/>
      </div>
     </div>
    </footer>
  </template>
  
  <script>
import FooterLogo from './components/FooterLogo.vue';
import FooterMenu from './components/FooterMenu.vue';
import FooterLinks from './components/FooterLinks.vue';
import FooterLogoWide from './components/FooterLogoWide.vue';
import FooterLocation from './components/FooterLocation.vue';


  export default {
    components: { FooterLogo, FooterMenu, FooterLinks, FooterLogoWide, FooterLocation,  }
}
  </script>