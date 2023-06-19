<template>
  <div class="home">
    <WelcomeComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WelcomeComponent from "@/components/WelcomeComponent.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    WelcomeComponent,
  },
});
</script>

<style lang="scss">
.home {
  height: 100vh;
}
</style>
