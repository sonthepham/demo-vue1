<template>
  <div class="LayoutDefault">
    <nav class="LayoutDefault__header" />
    <main class="LayoutDefault__main">
      <slot />
    </main>
    <footer class="LayoutDefault__footer">
      Copyright © 2020
    </footer>
  </div>
</template>

<script>
export default {
  name: `LayoutDefault`,
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style lang="scss">
.LayoutDefault {
  max-width: 42em;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;

  &__header {
  }

  &__main {
    padding-top: 1.5em;
    padding-bottom: 2em;
  }
  &__footer {
    padding-top: 1em;
    padding-bottom: 1em;
    border-top: 1px solid #c0c0c0;
  }
}
</style>
