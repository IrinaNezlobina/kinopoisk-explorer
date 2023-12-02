<template>
  <div v-if="favStore.favoriteArr.length " class="movies__list">
      <movie-item v-for="(item, index) in favStore.favoriteArr" :key="index" :movie="item"></movie-item>
  </div>
  <div v-else class="empty">
    <h1>
      Вы еще ничего не добавили
    </h1>
  </div>
</template>
<script>

import {useFavStore} from "@/stores/FavoriteStore";
import movieItem from "@/components/movies/MovieItem.vue";

export default {
  name: 'FavoriteView.vue',

  setup() {
    const favStore = useFavStore();

    return {
      favStore,
    }
  },
  methods: {},
  computed: {},
  components: {
   movieItem
  },
}
</script>

<style scoped>

</style>