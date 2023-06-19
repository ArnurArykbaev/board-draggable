<template>
  <div class="board">
    <div class="board-main">
      <div class="board-main__info">
        <infoComponent />
      </div>
      <div class="board-main__items-board">
        <boardComponent />
      </div>
    </div>
    <div class="board-footer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import boardComponent from "@/components/boardPage/boardComponent.vue";
import infoComponent from "@/components/boardPage/infoComponent.vue";

export default defineComponent({
  name: "BoardPage",
  components: { boardComponent, infoComponent },
});
</script>

<style lang="scss">
.board {
  display: flex;
  flex-direction: column;

  &-main {
    display: flex;
    flex-direction: row;
    width: 100%;

    &__info {
      width: 30%;
    }

    &__items-board {
      width: 70%;
    }
  }
}
</style>
