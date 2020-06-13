<template>
  <div class="container">
    <div v-if="alert.message" :class="`alert ${alert.type}`">
      {{ alert.message }}
    </div>
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      layout: `div`,
    };
  },
  computed: {
    ...mapState({
      alert: state => state.alert,
    }),
  },

  methods: {
    ...mapActions({
      clearAlert: 'alert/clear',
    }),
  },
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.clearAlert();
    },
  },
};
</script>
<style lang="scss">
@import '../assets/styles/app.scss';
</style>
