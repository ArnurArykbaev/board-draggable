<template>
  <div class="color-picker">
    <div class="card">
      <div class="color__inputs">
        <div
          v-for="(color, id) in colors"
          :key="id"
          @click="pickColor(color)"
          class="color__input"
          :class="color"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "modalComponent",
  props: {
    colors: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const pickColor = (color: string) => {
      emit("pickColor", color);
    };
    return {
      pickColor,
    };
  },
});
</script>

<style lang="scss">
.color-picker {
  width: 100%;

  .card {
    width: 100%;
  }

  .color__inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    column-gap: 10px;

    .color__input {
      border-radius: 50%;
      width: 30px;
      aspect-ratio: 1/1;
      cursor: pointer;
    }
  }
}
</style>
