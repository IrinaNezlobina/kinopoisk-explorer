<template>

  <img :src="movie.posterUrl" alt="">
  <pre>
<!--   {{ movie}}-->
  </pre>
  <div class="movie__bg" :style="{ backgroundImage: 'url(' + movie.posterUrl + ')' }"></div>
</template>

<script>
import Skeleton from 'primevue/skeleton';

import {getMovie} from "@/api/films";

export default {
  name: "MovieItem",
  data() {
    return {
      movie: {},
      loading: true,
    }
  },
  methods: {
    async getData(e) {
      console.log( this.$route.params.id,333);

      const movieId = this.$route.params.id;
      const payload = {
        id: movieId,
      };

      try {
        const res = await getMovie(payload);
        console.log(res,23223)
        this.movie = res;
      } catch (e) {
        console.log(343423423);
      }
    }
  },

  computed() {},

  mounted() {
    this.getData();
  },

  components: {
    Skeleton
  },
}
</script>

<style scoped lang="scss">
.movie__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  opacity: .3;
  z-index: 0;
  transition: background-image 1s ease-in-out;
}

</style>