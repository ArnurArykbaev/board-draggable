<template>
  <div v-if="showItem" class="item">
    <div @click="openModalEditor" class="square">
      <div
        :class="`${item.element.color}_blur`"
        class="item__square__blur"
      ></div>
      <div :class="item.element.color" class="item__square"></div>
    </div>
    <div v-if="item.element.value > 0" class="quantity">
      {{ item.element.value }}
    </div>
  </div>
  <div v-else @click="createNewItem" class="empty-item"></div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "itemComponent",
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
      emit("editItem", props.item);
    };

    const createNewItem = () => {
      console.log("CKE");
      emit("createNewItem");
    };
    return {
      showItem,
      openModalEditor,
      createNewItem,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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

.empty-item {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
