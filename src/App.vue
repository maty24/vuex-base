<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    Counter: defineAsyncComponent(() => import("./components/Counter.vue")),
  },
};
</script>

<template>
  <Counter />
</template>

<style scoped></style>
