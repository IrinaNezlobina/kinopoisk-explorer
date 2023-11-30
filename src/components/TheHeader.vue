<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">

        <nav class="navigation">
          <RouterLink class="navigation__item" to="/">Популярные фильмы</RouterLink>
          <RouterLink class="navigation__item" to="/favorites">Буду смотреть</RouterLink>
        </nav>
        <Search/>

      </div>
    </div>
  </header>
</template>

<script>
import Search from "@/components/Search.vue";


export default {
  name: "TheHeader",

  setup() {

  },

  data() {
    return {}
  },

  methods: {},

  components: {Search},
}
</script>

<style lang="scss" scoped>
@import "@/styles/base/mixins.scss";

.header {
  padding: 10px 0;
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

  display: flex;
  justify-content: space-between;
  align-items: center;
  @include breakpoint(lg) {
    position: relative;
  }
}


header {
  line-height: 1.5;
  max-height: 100vh;
}



.navigation__item {
  font-size: 20px;
  text-align: center;
  margin-top: 16px;

  color: white;

}

nav a.router-link-exact-active {
  //color: var(--color-text);
  color: #f50;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  color: #252525;
  padding: 0 1rem;

}

nav a:first-of-type {
  border: 0;
}

.header__right {
  display: flex;
}

.favorite {
  margin-right: 10px;
  position: relative;
}
</style>