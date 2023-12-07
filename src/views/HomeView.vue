<template>
    <main class="main">
        <div v-if="data.length">
            <div class="movies__list">
                <movie-item v-for="(item, index) in data" :key="index" :movie="item"></movie-item>
            </div>

            <paginate
                :page-count="pageCount"
                :click-handler="getFilms"
                :prev-text="'<<'"
                :next-text="'>>'"
                :container-class="'pagination'"
            >
            </paginate>
        </div>

        <div v-else class="skeleton__wrapper">
            <div :key="index" v-for="(n, index) in 20" class="skeleton__container">
                <Skeleton
                    animation="wave"
                    borderRadius="10px"
                    height="330px"
                    class="skeleton-img"
                    >{{ n }}</Skeleton
                >
                <Skeleton height="25px" class="skeleton-text">{{ n }}</Skeleton>
                <Skeleton height="25px" class="skeleton-text">{{ n }}</Skeleton>
                <Skeleton height="25px" class="skeleton-text">{{ n }}</Skeleton>
                <Skeleton height="25px" class="skeleton-text">{{ n }}</Skeleton>
            </div>
        </div>
    </main>
</template>

<script>
import { getTopFilms } from '@/api/films';
import movieItem from '@/components/movies/MovieItem.vue';
import Skeleton from 'primevue/skeleton';

export default {
    name: 'App',

    data() {
        return {
            data: [],
            limit: 20,
            page: 1,
            pageCount: 0
        };
    },

    methods: {
        async getFilms(e) {
            console.log(e);
            this.page = e ? e : 1;

            const payload = {
                type: 'TOP_250_MOVIES',
                limit: this.limit,
                page: this.page
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

    mounted() {
        this.getFilms();
    },

    components: {
        movieItem,
        Skeleton
    }
};
</script>

<style scoped lang="scss">
@import '@/styles/base/mixins.scss';

.skeleton-img {
    margin-bottom: 10px;
    background-color: #424242;
}

.skeleton__wrapper,
.movies__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    @include breakpoint(md) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
    @include breakpoint(lg) {
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }
}

.skeleton-text {
    background-color: #424242;

    & + .skeleton-text {
        margin-top: 8px;
    }
}

.pagination {
    display: flex;
    margin-top: 30px;
}
</style>
