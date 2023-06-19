<template>
  <div class="hello">
    <h1>{{ welcomeMessage }}</h1>
    <buttonComponent
      @click="goToBoard"
      :buttonTitle="'Go to board'"
      :width="'100%'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import buttonComponent from "./ui/buttonComponent.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "WelcomeComponent",
  components: { buttonComponent },
  data() {
    return {
      welcomeMessage: "Welcome to my draggable board application!",
    };
  },
  setup() {
    const router = useRouter();

    const goToBoard = () => {
      console.log("OK");
      router.push({
        path: "/board",
      });
    };

    return {
      goToBoard,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    margin: -50px 0 50px 0;
  }
}
</style>
