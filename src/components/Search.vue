<template>
  <div class="header__search">
    <input
        v-model="searchStore.valueSearch"
        placeholder="Search"
        type="search"
        @keyup.enter="goToSearch"
        @input="searchStore.getData()">
  </div>
</template>

<script>
import {useSearchStore} from "@/stores/SearchStore";
import router from "@/router";
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
  setup() {
    const searchStore = useSearchStore();

    return {
      searchStore,
    }
  },
  methods: {
    goToSearch()  {
      router.push("search")
    }
  },

  computed: {

  },
  components: {


  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/base/mixins.scss";



.header__search {
  flex-grow: 2;
  margin-top: 10px;
  input {
    border: unset;
    display: block;
    width: 100%;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.1);
    padding: 8px 15px;
    border-radius: 7px;background-color: #424242;
    color: #fff;
  }
  @include breakpoint(lg)  {
    margin-left: 80px;
    margin-top: 0;
  }
}
</style>
