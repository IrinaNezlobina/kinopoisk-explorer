<template>
<!--  <div :style="{ bg:  ? :active }">-->
    <the-header></the-header>
    <main class="main">
      <div class="container">
        <div class="content">
          <RouterView/>
        </div>

      </div>
    </main>
<!--  </div>-->
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

  mounted() {},

  components: {
    TheHeader,
    RouterView,
  },
}
</script>

<style>
@import "@/styles/base/mixins.scss";

.content {
  padding-top: 100px;
}
</style>