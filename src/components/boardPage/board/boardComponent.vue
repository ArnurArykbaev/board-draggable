<template>
  <div class="board-component">
    <div class="card board">
      <draggable class="dragArea" :list="myList" item-key="item">
        <template #item="{ element: item }">
          <div class="cell">
            <div class="cell-inner">
              <itemComponent :item="item" />
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";
import itemComponent from "./item/itemComponent.vue";
let id = 1;

export default defineComponent({
  name: "boardComponent",
  display: "Simple",
  order: 0,
  components: {
    draggable,
    itemComponent,
  },
  data() {
    return {
      enabled: true,
      myList: [
        { element: { color: "green", square: true, value: 8 }, id: 0 },
        { element: { color: "blue", square: true, value: 2 }, id: 1 },
        { element: { color: "yellow", square: true, value: 6 }, id: 2 },
        { element: { color: "violet", square: true, value: 9 }, id: 3 },
        { element: { color: "red", square: true, value: 5 }, id: 4 },
        { element: { color: "orange", square: true, value: 1 }, id: 5 },
        { element: { color: "", square: false, value: 0 }, id: 6 },
        { element: { color: "", square: false, value: 0 }, id: 7 },
        { element: { color: "", square: false, value: 0 }, id: 8 },
        { element: { color: "", square: false, value: 0 }, id: 9 },
        { element: { color: "", square: false, value: 0 }, id: 10 },
        { element: { color: "", square: false, value: 0 }, id: 11 },
        { element: { color: "", square: false, value: 0 }, id: 12 },
        { element: { color: "", square: false, value: 0 }, id: 13 },
        { element: { color: "", square: false, value: 0 }, id: 14 },
        { element: { color: "", square: false, value: 0 }, id: 15 },
        { element: { color: "", square: false, value: 0 }, id: 16 },
        { element: { color: "", square: false, value: 0 }, id: 17 },
        { element: { color: "", square: false, value: 0 }, id: 18 },
        { element: { color: "", square: false, value: 0 }, id: 19 },
        { element: { color: "", square: false, value: 0 }, id: 20 },
        { element: { color: "", square: false, value: 0 }, id: 21 },
        { element: { color: "", square: false, value: 0 }, id: 22 },
        { element: { color: "", square: false, value: 0 }, id: 23 },
        { element: { color: "", square: false, value: 0 }, id: 24 },
      ],
      dragging: false,
    };
  },
  methods: {},
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
