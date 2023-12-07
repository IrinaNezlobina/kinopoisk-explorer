<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <nav class="navigation">
                    <RouterLink class="navigation__item" to="/">Популярные фильмы</RouterLink>
                    <RouterLink class="navigation__item" to="/favorite">Буду смотреть</RouterLink>
                </nav>
                <Search />
            </div>
        </div>
    </header>
</template>

<script>
import Search from '@/components/Search.vue';

export default {
    name: 'TheHeader',
    data() {
        return {};
    },
    components: { Search }
};
</script>

<style lang="scss" scoped>
@import '@/styles/base/mixins.scss';

.header {
    padding: 20px 0;
    margin-bottom: 10px;
    z-index: 4;
    position: absolute;
    right: 0;
    left: 0;
    background: transparent;
}

.header__logo {
    max-width: 80px;
}

.header__inner {
    @include breakpoint(lg) {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
}

header {
    line-height: 1.5;
    max-height: 100vh;
}

.navigation__item {
    font-size: 16px;
    text-align: center;
    color: white;

    & + .navigation__item {
        margin-left: 15px;
    }

    @include breakpoint(lg) {
        font-size: 20px;
    }
}

nav a.router-link-exact-active {
    color: #f50;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    color: #252525;
}

nav a:first-of-type {
    border: 0;
}
</style>
