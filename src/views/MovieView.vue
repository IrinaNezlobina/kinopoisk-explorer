<template>
    <div v-if="movie" class="movie-elem__wrapper">
        <div class="movie-elem__picture">
            <img :src="movie.posterUrl" alt="" />
        </div>
        <div class="movie-elem__info">
            <div class="movie-elem__name">{{ movie.nameRu }}</div>
            <div class="movie-elem__name-orig">{{ movie.nameOriginal }}</div>
            <div class="movie-elem__description">{{ movie.description }}</div>
            <div v-for="(item, index) in movie.countries" :key="index" class="movie-elem__country">
                {{ item.country }}
            </div>
            <div class="movie-elem__genre">
                <span>Жанры:</span>&nbsp;
                <span v-for="(item, index) in movie.genres" :key="index" class="">
                    {{ item.genre }} &nbsp;
                </span>
            </div>
            <div class="movie-elem__rating">
                Pейтинг:
                <span> {{ movie.ratingKinopoisk }}</span>
            </div>
            <div class="movie-elem__year">{{ movie.year }}</div>
            <button
                v-if="favStore.favoriteArr.includes(movie)"
                class="btn btn--orange"
                @click="favStore.addToFavorite(movie)"
            >
                В избранном
            </button>
            <button v-else class="btn btn--orange" @click="favStore.addToFavorite(movie)">
                Буду смотреть
            </button>
        </div>
    </div>
    <div v-else class="skeleton__wrapper">
        <div class="skeleton__container">
            <Skeleton animation="wave" borderRadius="10px" class="skeleton-img" height="330px"
                >{{ n }}
            </Skeleton>
        </div>
    </div>
    <div :style="{ backgroundImage: 'url(' + movie.posterUrl + ')' }" class="movie__bg"></div>
</template>

<script>
import Skeleton from 'primevue/skeleton';
import { getMovie } from '@/api/films';
import { useFavStore } from '@/stores/FavoriteStore';

export default {
    name: 'MovieItem',
    setup() {
        const favStore = useFavStore();

        return {
            favStore
        };
    },

    data() {
        return {
            movie: [],
            loading: true
        };
    },
    methods: {
        async getData() {
            const movieId = this.$route.params.id;
            const payload = {
                id: movieId
            };

            try {
                const res = await getMovie(payload);
                this.movie = res;
            } catch (e) {
                console.error(e);
            }
        }
    },
    mounted() {
        this.getData();
    },
    components: {
        Skeleton
    }
};
</script>

<style lang="scss" scoped>
@import '@/styles/base/mixins.scss';

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
    opacity: 0.3;
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
