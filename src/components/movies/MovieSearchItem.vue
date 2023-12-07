<template>
    <div class="movie__item">
        <router-link :to="`/${movie.filmId}`" class="movie__picture" href="">
            <img :src="movie.posterUrlPreview" alt="" />
        </router-link>
        <div class="movie__bottom">
            <a class="movie__name" href="">{{ movie.nameRu }}</a>
            <div class="movie__genre">
                <span>Жанры:</span>&nbsp;
                <span v-for="(item, index) in movie.genres" :key="index" class="">
                    {{ item.genre }} &nbsp;
                </span>
            </div>
            <div class="movie__rating">
                Pейтинг:
                <span> {{ movie.ratingKinopoisk }}</span>
            </div>

            <div class="movie__year">{{ movie.year }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieItem',
    props: ['movie']
};
</script>

<style lang="scss" scoped>
@import '@/styles/base/mixins.scss';

.movie__item {
    color: #f2f2f2;
}

.movie__country {
    font-size: 16px;
    margin-bottom: 3px;
}

.movie__genre {
    font-size: 12px;
    color: #f2f2f2;
}

.movie__name {
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 600;
}

.movie__rating {
    font-size: 14px;
    margin-bottom: 3px;

    span {
        color: #f50;
    }
}

.movie__year {
    font-size: 12px;
}

.movie__picture {
    display: block;
    border-radius: 10px;
    overflow: hidden;
    @include ratio(360, 540);
    margin-bottom: 10px;

    img {
        object-fit: cover;
    }
}
</style>
