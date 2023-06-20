<template>
  <div class="board-component">
    <div class="card board">
      <draggable class="dragArea" :list="items" item-key="item">
        <template #item="{ element: item }">
          <div class="cell">
            <div class="cell-inner">
              <itemComponent
                :item="item"
                @editItem="editItem"
                @createNewItem="createNewItem"
              />
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>

  <transition name="board-modal-slide">
    <modalComponent
      v-if="state.isOpen"
      @open="state.isOpen"
      @closeModal="closeModal"
    >
      <itemEditor
        :item="state.editedItem"
        @closeModal="closeModal"
        :controls="state.controls"
      />
    </modalComponent>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import draggable from "vuedraggable";
import itemComponent from "./item/itemComponent.vue";
import { Item, Element } from "@/models/itemModel";
import modalComponent from "@/components/ui/modalComponent.vue";
import itemEditor from "@/components/boardPage/board/item/itemEditor.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "boardComponent",
  display: "Simple",
  order: 0,
  components: {
    draggable,
    itemComponent,
    modalComponent,
    itemEditor,
  },
  data() {
    return {
      enabled: true,
      dragging: false,
    };
  },
  setup(props, { emit }) {
    const store = useStore();
    const state = reactive({
      isOpen: false,
      editedItem: {
        element: { color: "", square: false, value: 0 },
        id: 0,
      } as Item,
      emptyItem: {
        element: { color: "", square: false, value: 0 },
        id: 0,
      } as Item,
      controls: "new",
    });

    const openModalEditor = (item: Item) => {
      state.isOpen = true;
      state.editedItem = item;
    };
    const closeModal = () => {
      state.isOpen = false;
    };
    const items = computed({
      get() {
        return store.getters.items;
      },
      set(value: Item[]) {
        store.commit("updateItems", value);
      },
    });

    const editItem = (item: Item) => {
      state.controls = "edit";
      openModalEditor(item);
    };

    const createNewItem = () => {
      state.controls = "new";
      openModalEditor(state.emptyItem);
    };

    return {
      state,
      openModalEditor,
      closeModal,
      editItem,
      createNewItem,
      items,
    };
  },
});
</script>

<style lang="scss" scoped>
.board-component {
  width: 100%;
  .card {
    padding: 0;
    overflow: hidden;
  }
  .board {
    width: 100%;
    height: 100%;

    .dragArea {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      height: 100%;
    }

    .cell {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 20%;
      aspect-ratio: 1/1;

      &:hover {
        cursor: pointer;
      }

      &-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border: 1px solid #4d4d4d;
        background-color: #212121;
      }
    }
  }
}
</style>
