<template>
  <div class="skeleton-component"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "skeletonComponent",
  components: {},
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
  },
});
</script>

<style lang="scss">
.skeleton-component {
  margin-top: 10px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
  border-radius: 8px;
  width: v-bind(width);
  height: v-bind(height);
  max-height: 40px;
  min-height: 15px;
}
</style>
