<template>
    <section class="hero min-h-screen bg bg-right lg:bg-center flex items-end py-5 md:items-center">
        <div class="container">
            <div class="block relative lg:max-w-[721px]">

                <div class="bg-layer  lg:w-[899px] h-[606px] absolute left-0 top-0 bg-[#fff] opacity-50 blur-[150px]"></div>

                <h1 class="title relative text-3xl leading-[60px] text-black font-bold md:text-[46px]">Грант и контрактное обучение в <span class="text-3xl leading-[60px] text-brand font-bold md:text-[44px]"> зарубежных</span> вузах</h1>
                <p class="subtitle relative text-dark md:text-xl leading-5 my-4 lg:mt- lg:mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                </p>
               
                <TheCallButton class="relative"></TheCallButton>
            </div>
        </div>
    </section>
</template>

<script>
import TheCallButton from '../../../ui/theCallButton.vue';

export default {
    components: { TheCallButton }
}
</script>

<style lang="scss">
.hero {
    background-image: url('../../../assets/images/main-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>