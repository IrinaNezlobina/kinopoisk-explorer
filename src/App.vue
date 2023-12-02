<template>
    <the-header></the-header>
    <main class="main">
      <div class="container">
        <div class="content">
          <RouterView/>
        </div>
      </div>
    </main>
</template>

<script>
import {RouterView} from 'vue-router';
import TheHeader from "@/components/TheHeader.vue";


export default {
  name: 'App',

  data() {
    return {
      str: '123',
    }
  },

  methods: {
  },

  computed() {},

  mounted() {

  },

  components: {
    TheHeader,
    RouterView,
  },
}
</script>

<style lang="scss">
@import "@/styles/base/mixins.scss";

.content {
  padding-top: 120px;
    @include breakpoint(lg) {
      padding-top: 100px;
      padding-bottom: 50px;
    }
}
</style>