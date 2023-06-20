<template>
  <section class="why mt-16 mb-[100px]">

    <div class="container">
        <TheSubtitle class="w-[300px] lg:w-[437px] lg:mr-auto   lg:ml-auto">Добро пожаловать в нашу группу иностранного образования</TheSubtitle>

        <theTitle class="text-center mb-16">Почему мы?</theTitle>
        <div class="wrapper lg:flex lg:justify-between">
            <WhyCards
            v-for="item in whyCardData"
            :key="item.text"
            :data="item"
            
            />
        </div>
        <theTitle class="text-center mt-[150px]">Университеты</theTitle>
        <TheSubtitle class="w-[300px] lg:w-[437px] text-center mr-auto   ml-auto">В нашем каталоге вы найдете более 100 университетов из более чем 14 стран</TheSubtitle>
        <Slider class="mt-6 lg:mt-10 mb-10"/>
    </div>
    <img
      src="../../../assets/icons/tree-icon.svg"
      alt=""
      class="relative bottom-[900px] hidden lg:block"
    />
    
  </section>
</template>

<script>
import Slider from '../components/Slider.vue';
import theTitle from '../../../ui/theTitle.vue'
import WhyCards from '../components/WhyCards.vue'
import TheSubtitle from '../../../ui/theSubtitle.vue';
export default {
    components: { theTitle, WhyCards, TheSubtitle, Slider },
    data(){
        return{
            whyCardData: [
                {
                    image: 'src/assets/images/bags.png',
                    text: 'Сертифицированные услуги нашей профессиональной команды'
                },
                {
                    image: 'src/assets/images/passport.png',
                    text: 'Высокие визовые ставки (98% наших студентов получили визу)'
                },
                {
                    image: 'src/assets/images/books.png',
                    text: 'Учеба в престижных университетах, которые входят в Топ-1000'
                },
            ]
        }
    }
};
</script>
<style>
.why{
    background-image: url("../../../assets/images/univers-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>