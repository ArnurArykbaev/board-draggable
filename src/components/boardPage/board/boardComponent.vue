<template>
  <draggable class="dragArea" :list="myList" item-key="item">
    <template #item="{ element: listItem }">
      <div class="">
        <p class="text-xs mr-2">{{ listItem.name }}</p>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import draggable from "vuedraggable";
let id = 1;

export default defineComponent({
  name: "boardComponent",
  display: "Simple",
  order: 0,
  components: {
    draggable,
  },
  data() {
    return {
      enabled: true,
      myList: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 },
      ],
      dragging: false,
    };
  },
  methods: {},
});
</script>

<style scoped>
.buttons {
  margin-top: 35px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
