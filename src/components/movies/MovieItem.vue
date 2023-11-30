<template>
  <div class="movie__item">


    <router-link :to="`/movies/${movie.kinopoiskId}`" href="" class="movie__picture">
      <img :src="movie.posterUrlPreview" alt="">
    </router-link>
    <div class="movie__bottom">
      <a href="" class="movie__name">{{movie.nameRu}}</a>
      <div class="movie__country" v-for="item in movie.countries">
        {{item.country}}
      </div>
      <hr>
      <div class="movie__genre">
        <span>Жанры:</span>
        <span class="" v-for="item in movie.genres">
          {{ item.genre }} &nbsp;
        </span>
      </div>
      <hr>
      <div class="movie__rating">{{movie.ratingKinopoisk}}</div>
      <div class="movie__year">{{movie.year}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: ['movie'],
  computed: {
  },
  components: {}

}
</script>

<style lang="scss"  scoped>
@import "@/styles/base/mixins.scss";
.movie__item {
  color: #f2f2f2
}
.movie__picture {
  display: block;
  border-radius: 10px;
  overflow: hidden;
  @include ratio(360,540);
  img {
    object-fit: cover;
  }

}
</style>
