<template>
  <div class="header__search">
    <input
        v-model="valueSearch"
        placeholder="Search"
        type="search"
        @input="getData()">
  </div>
</template>

<script>
import {getSearchFilms} from "@/api/films";
import debounce from 'debounce';

export default {
  name: "Search",

  data() {
    return {
      valueSearch: '',
      limit: 20,
      page: 1,
      data: [],
    }
  },

  methods: {
    getData: debounce(async function () {
      // this.loading = true;
      const payload = {
        search: this.valueSearch,
        limit: this.limit,
        page: this.page,
      };

      try {
        const res = await getSearchFilms(payload);

        /*
            Мы должны кидать юзера на страницу search
            Наши данные должны закидываться в переменную Pinia
            На странице Search из Pinia мы должны вызвать getters
        */
        this.data = res;
      } catch (e) {
        console.log(e)
      } finally {
        // this.loading = false;
      }
    }, 500),
  },

  computed: {

  },
  components: {


  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/base/mixins.scss";

.block {
  position: fixed;
  top: 85px;
  @include breakpoint(md) {
    grid-template-columns: repeat(3, 1fr);
  }
  @include breakpoint(lg) {
    grid-template-columns: repeat(5, 1fr);
  }

  padding: 30px;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-height: calc(100vh - 85px);
  z-index: 1000;
  visibility: hidden;
  opacity: 0;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &-item {
    width: 30%;
    background: black;
  }
}

.header__search {
  margin-right: 20px;


  input {
    border: unset;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.1);
    padding: 8px 15px;
    border-radius: 6px;

  }
}
</style>
