<template>
  <section class="students min-h-screen pb-[100px] lg:mb-[210px] mt-[100px] lg:mt-[200px]">
    <div class="container">
      <thePathLink>Студенты</thePathLink>
      <theTitle class="text-center mt-[30px]">Студенты</theTitle>
      
      <button @click="loadMore">Еще</button>
    <div class="card-list">
      <div class="card" v-for="item in items" :key="item.id">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
import theTitle from "../../../ui/theTitle.vue";
import thePathLink from "../../../ui/thePathLink.vue";
export default {
  components: { theTitle, thePathLink },
  data() {
    return {
      items: [],
      currentPage: 1,
      pageSize: 1,
    };
  },
  methods: {
    loadMore() {
      const newItems = Array.from({ length: this.pageSize }, () => ({
        id: Math.random().toString(36).substr(2, 9),
        name: 'Элемент ' + Math.random().toString(36).substr(2, 9),
      }));

      this.items = this.items.concat(newItems);
      this.currentPage++;
    },
  },

};
</script>
