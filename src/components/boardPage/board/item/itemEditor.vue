<template>
  <div class="editor">
    <div class="editor__subject">
      <div @click="openModalEditor" class="square">
        <div
          :class="`${item.element.color}_blur`"
          class="editor__square__blur"
        ></div>
        <div :class="item.element.color" class="editor__square"></div>
      </div>
    </div>

    <div class="line"></div>

    <div class="editor__info">
      <skeletonComponent class="editor__info__header" :height="'40px'" />
      <skeletonComponent
        class="editor__info__subinfo"
        :height="'15px'"
        :width="'100%'"
      />
      <skeletonComponent
        class="editor__info__description"
        :height="'15px'"
        :width="'100%'"
      />
      <skeletonComponent
        class="editor__info__description"
        :height="'15px'"
        :width="'100%'"
      />
      <skeletonComponent
        class="editor__info__description"
        :height="'15px'"
        :width="'65%'"
      />
      <skeletonComponent
        class="editor__info__footer"
        :height="'15px'"
        :width="'40%'"
      />
    </div>

    <div class="line"></div>

    <div class="editor__footer">
      <buttonComponent
        @click="deleteItem(item)"
        :buttonTitle="'Удалить предмет'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import skeletonComponent from "@/components/ui/skeletonComponent.vue";
import buttonComponent from "@/components/ui/buttonComponent.vue";
import { useStore } from "vuex";
import { Item } from "@/models/itemModel";

export default defineComponent({
  name: "itemEditor",
  components: { skeletonComponent, buttonComponent },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const store = useStore();

    const showItem = computed(
      () => props.item.element.square && props.item.element.value
    );
    const openModalEditor = () => {
      emit("openModalEditor", props.item);
    };
    const deleteItem = (item: Item) => {
      store.dispatch("deleteItem", item);
      emit("closeModal");
    };

    return {
      showItem,
      openModalEditor,
      deleteItem,
    };
  },
});
</script>

<style lang="scss">
.editor {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 800px;
  height: 100%;
  padding-top: 40px;

  &__subject {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    margin-top: 2rem;
  }

  &__square {
    width: 130px;
    aspect-ratio: 1/1;
  }
  &__square__blur {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-35%, -65%);
    width: 130px;
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

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    width: 100%;

    &__header {
      margin-bottom: 24px;
    }
  }
}
</style>
