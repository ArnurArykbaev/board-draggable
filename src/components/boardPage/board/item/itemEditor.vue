<template>
  <div class="editor">
    <div @click="openModalEditor" class="square">
      <div
        :class="`${item.element.color}_blur`"
        class="editor__square__blur"
      ></div>
      <div :class="item.element.color" class="editor__square"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "itemEditor",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const showItem = computed(
      () => props.item.element.square && props.item.element.value
    );
    const openModalEditor = () => {
      emit("openModalEditor", props.item);
    };
    return {
      showItem,
      openModalEditor,
    };
  },
});
</script>

<style lang="scss">
.editor {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &__square {
    width: 48px;
    aspect-ratio: 1/1;
  }
  &__square__blur {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-35%, -65%);
    width: 48px;
    aspect-ratio: 1/1;
  }

  .quantity {
    position: absolute;
    padding: 4px;
    bottom: 0;
    right: 0;
    border: 1px solid #4d4d4d;
    border-radius: 10px 0 0 0;
    border-bottom: none;
    border-right: none;
  }
}
</style>
