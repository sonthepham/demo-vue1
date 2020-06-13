<template>
  <div class="LayoutMain">
    <nav class="LayoutMain__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <div class="LayoutMain__user">
        Hi {{ account ? account.user.name : `Loading...` }}
        <router-link to="/login">Logout</router-link>
      </div>
    </nav>
    <main class="LayoutMain__main">
      <slot />
    </main>
    <footer class="LayoutMain__footer">
      Copyright © 2020
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: `LayoutMain`,
  computed: {
    ...mapState({
      account: (state) => state.account,
    }),
  },
  created() {
    this.loadUserLogin();
  },
  methods: {
    ...mapActions('account', ['loadUserLogin']),
  },
};
</script>

<style lang="scss">
@import '../assets/styles/layoutMain.scss';
</style>
