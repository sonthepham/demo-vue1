<template>
  <layout name="LayoutMain">
    <div>
      <span>Home page !!!</span>
    </div>
  </layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Layout from '../layouts/Layout';

export default {
  name: `Home`,
  components: {
    Layout,
  },
  computed: {
    ...mapState({
      account: state => state.account,
      // users: state => state.users.all
    }),
  },
  // created() {
  //   this.loadUserLogin();
  // },
  // methods: {
  //   ...mapActions("account", ["loadUserLogin"])
  // },
};
</script>
