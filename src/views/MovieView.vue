<template>
  <div v-if="movie" class="movie-elem__wrapper">
    <div class="movie-elem__picture">
      <img :src="movie.posterUrl" alt="">
    </div>
    <div class="movie-elem__info">
      <div  class="movie-elem__name">{{movie.nameRu}}</div>
      <div class="movie-elem__name-orig">{{movie.nameOriginal}}</div>
      <div class="movie-elem__description">{{movie.description}}</div>
      <div class="movie-elem__country" v-for="item in movie.countries">
        {{item.country}}
      </div>
      <div class="movie-elem__genre">
        <span>Жанры:</span>&nbsp;
        <span class="" v-for="item in movie.genres">
          {{ item.genre }} &nbsp;
        </span>
      </div>
      <div class="movie-elem__rating">
        Pейтинг:
        <span> {{movie.ratingKinopoisk}}</span>
      </div>
      <div class="movie-elem__year">{{movie.year}}</div>
      <button v-if="favStore.favoriteArr.includes(movie)" @click="favStore.addToFavorite(movie)" class="btn btn--orange">В избранном</button>
      <button v-else @click="favStore.addToFavorite(movie)" class="btn btn--orange">Буду смотреть</button>
    </div>
  </div>
  <div v-else class="skeleton__wrapper">
    <div  class="skeleton__container">
      <Skeleton animation="wave" borderRadius="10px"    height="330px" class="skeleton-img">{{ n }}</Skeleton>
    </div>
  </div>
  <div class="movie__bg" :style="{ backgroundImage: 'url(' + movie.posterUrl + ')' }"></div>
</template>

<script>
import Skeleton from 'primevue/skeleton';
import {getMovie} from "@/api/films";
import {useFavStore} from "@/stores/FavoriteStore";

export default {
  name: "MovieItem",  setup() {
    const favStore = useFavStore();

    return {
      favStore,
    }
  },

  data() {
    return {
      movie: [],
      loading: true,
    }
  },
  methods: {
    async getData(e) {
      const movieId = this.$route.params.id;
      const payload = {
        id: movieId,
      };

      try {
        const res = await getMovie(payload);
        this.movie = res;
      } catch (e) {
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
@import "@/styles/base/mixins.scss";

.movie-elem__year {
  font-size: 14px;
  margin-bottom: 10px;
}
.movie-elem__name {
 font-size: 20px;
  margin-bottom: 5px;
  @include breakpoint(lg) {
    font-size: 26px;
  }
}
.movie-elem__name-orig {
  margin-bottom: 15px;
  font-size: 16px;
  font-style: italic;
  @include breakpoint(lg) {
    font-size: 20px;
  }
}
.movie-elem__genre {
  font-size: 12px;
  color: #f2f2f2;
  margin-bottom: 5px;
}
.movie-elem__country {
  margin-bottom: 5px;
  font-size: 16px;
 }

.movie-elem__rating {
  font-size: 16px;
  margin-bottom: 5px;
  span {
    color: #f50;
  }
}
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
.movie-elem__description {
  margin-bottom: 15px;
  font-size: 16px;
}
.movie-elem__wrapper {
  position: relative;
  z-index: 2;
  @include breakpoint(lg) {
    display: grid;
    grid-template-columns: 5fr 7fr;
    grid-column-gap: 20px;
  }
}
.movie-elem__picture {
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
  img {
    border-radius: 10px;
  }
  @include breakpoint(lg) {
    margin-bottom: 0;
  }
}
</style>