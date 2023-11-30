
<template>
  <main class="main">
    <div v-if="data.length" class="movies__list">
      <movie-item v-for="(item, index) in data" :key="index" :movie="item"></movie-item>
      <paginate
        :page-count="pageCount"
        :click-handler="getFilms"
        :prev-text="'Prev'"
        :next-text="'git Next'"
        :container-class="'className'">
      </paginate>
    </div>
    <div v-else class="skeleton__wrapper">
      <div v-for="n in 20" class="skeleton__container">
        <Skeleton   height="423px" class="skeleton-img">{{ n }}</Skeleton>
        <Skeleton    height="10px" class="mb-2">{{ n }}</Skeleton>
      </div>

    </div>
  </main>
</template>

<script>
import {getTopFilms} from "@/api/films";
import movieItem from "@/components/movies/MovieItem.vue";
import Skeleton from 'primevue/skeleton';

export default {
  name: 'App',

  data() {
    return {
      data: [],
      limit: 20,
      page: 1,
      pageCount: 0,
    }
  },

  methods: {
    async getFilms(e) {
      console.log(e);
      this.page = e ? e : 1;

      const payload = {
        type: 'TOP_250_MOVIES',
        limit: this.limit,
        page: this.page,
      };

      try {
        const res = await getTopFilms(payload);
        this.data = res.items;
        this.pageCount = res.totalPages;
      } catch (e) {
        console.log(e);
      }
    }
  },

  computed() {},

  mounted() {
    this.getFilms();
  },

  components: {
    movieItem,
    Skeleton,
  },
}
</script>

<style scoped>
.skeleton-img {
  margin-bottom: 10px;
}
.skeleton__wrapper,.movies__list {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

</style>