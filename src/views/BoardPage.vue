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

    <boardFooter
      v-if="state.footer"
      @closeFooter="closeFooter"
      class="board-footer-info"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import boardComponent from "@/components/boardPage/boardComponent.vue";
import infoComponent from "@/components/boardPage/infoComponent.vue";
import boardFooter from "@/components/boardPage/boardFooter.vue";

export default defineComponent({
  name: "BoardPage",
  components: { boardComponent, infoComponent, boardFooter },
  setup() {
    const state = reactive({
      footer: true,
    });

    const closeFooter = (val: boolean) => {
      state.footer = val;
    };

    return {
      state,
      closeFooter,
    };
  },
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
      width: 20%;
    }

    &__items-board {
      width: 80%;
    }
  }

  &-footer-info {
    margin-top: 24px;
  }
}
</style>
