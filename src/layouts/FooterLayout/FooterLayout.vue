<template>
    <footer class="footer w-full transition-all h-[120px]" >
     <div class="container  justify-between ">
      <div class="top w-full flex items-center justify-between">
        <FooterLogo/>
        <FooterMenu/>
        <FooterLinks/>
      </div>
      <div class="bottom w-full flex items-center">
        <FooterLogoWide/>
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
    components: { FooterLogo, FooterMenu, FooterLinks, FooterLogoWide, FooterLocation }
}
  </script>