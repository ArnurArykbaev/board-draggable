<template>
  <div class="editor">
    <div v-if="controls === 'edit'" class="editor__subject">
      <div @click="openModalEditor" class="square">
        <div
          :class="`${item.element.color}_blur`"
          class="editor__square__blur"
        ></div>
        <div :class="item.element.color" class="editor__square"></div>
      </div>
    </div>
    <div v-else class="editor__subject">
      <div @click="openModalEditor" class="square">
        <div :class="`${state.color}_blur`" class="editor__square__blur"></div>
        <div :class="state.color" class="editor__square"></div>
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
        v-if="controls === 'edit'"
        @click="deleteItem(item)"
        :buttonTitle="'Удалить предмет'"
      />
      <itemCreatorControls
        v-else
        @closeModal="closeModal"
        @pickColor="pickColor"
        @createNew="createNew"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import skeletonComponent from "@/components/ui/skeletonComponent.vue";
import buttonComponent from "@/components/ui/buttonComponent.vue";
import itemCreatorControls from "@/components/boardPage/board/item/itemCreatorControls.vue";
import { useStore } from "vuex";
import { Item } from "@/models/itemModel";

export default defineComponent({
  name: "itemEditor",
  components: { skeletonComponent, buttonComponent, itemCreatorControls },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    controls: {
      type: String,
      default: "new",
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const state = reactive({
      color: "",
    });

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

    const closeModal = () => {
      emit("closeModal");
    };

    const pickColor = (color: string) => {
      state.color = color;
    };

    const createNew = (item: Item) => {
      store.dispatch("createNewItem", item);
      closeModal();
    };

    return {
      state,
      showItem,
      openModalEditor,
      deleteItem,
      closeModal,
      pickColor,
      createNew,
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

  &__footer {
    width: 100%;
  }
}
</style>
