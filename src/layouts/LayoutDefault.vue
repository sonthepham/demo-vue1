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
