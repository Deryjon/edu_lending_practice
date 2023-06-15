<template>
    <div class="header-menu  hidden lg:block">
        <ul class="menu flex text-dark">
            <li class="2xl:mr-[30px] lg:mr-[15px] text-xs  xl:text-[16px] font-normal  lg:hover:text-brand lg:duration-300"
                v-for="(item, idx) in menuItems" :key="item">
                <router-link :to="{ name: item.link }">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import menuList from '../menuList.js'

export default {
    data() {
        return {
            menuItems: menuList,
        }
    }
}
</script>