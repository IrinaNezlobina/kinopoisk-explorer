
<template>
  <main class="main">
    <div v-if="searchStore.movies.films.length">
      <div class="movies__list">
        <movie-search-item v-for="(item, index) in searchStore.movies.films" :key="index" :movie="item"></movie-search-item>
      </div>
    </div>
  <div v-else class="empty">
    <h1>По вашему запросу ничего не найдено</h1>
  </div>
  </main>
</template>

<script>
import movieSearchItem from "@/components/movies/MovieSearchItem.vue";
import {useSearchStore} from "@/stores/SearchStore";

export default {
  name: 'Search',
  setup() {
    const searchStore = useSearchStore();

    return {
      searchStore,
    }
  },
  data() {
    return {
      data: [],
      limit: 20,
      page: 1,
      pageCount: 0,
    }
  },
  methods: {},
  computed() {},
  mounted() {
  },

  components: {
    movieSearchItem,
  },
}
</script>

<style scoped lang="scss">
@import "@/styles/base/mixins.scss";
.skeleton-img {
  margin-bottom: 10px;
  background-color:#424242;
}
.skeleton__wrapper,.movies__list {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @include breakpoint(md) {
    grid-template-columns: repeat(3,1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @include breakpoint(lg) {
    grid-template-columns: repeat(5,1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
}
.skeleton-text {
  background-color:#424242;
  & + .skeleton-text {
    margin-top: 8px;
  }
}
.pagination {
  display: flex;
  margin-top: 30px;
}

</style>