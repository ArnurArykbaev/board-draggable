<template>
  <div class="board-footer">
    <div class="card">
      <div class="board-footer__card">
        <skeletonComponent :height="'40px'" :width="'90%'" />
        <closeButtonComponent @click="closeFooter" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import closeButtonComponent from "../ui/closeButtonComponent.vue";
import skeletonComponent from "../ui/skeletonComponent.vue";

export default defineComponent({
  name: "infoComponent",
  components: { skeletonComponent, closeButtonComponent },
  setup(props, { emit }) {
    const closeFooter = () => {
      emit("closeFooter", false);
    };
    return { closeFooter };
  },
});
</script>

<style lang="scss">
.board-footer {
  &__card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
