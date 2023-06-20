<template>
  <div class="create-controls">
    <colorPicker :colors="state.colors" @pickColor="pickColor" />
    <inputComponent v-model="state.itemValue" />
    <div class="create-controls__buttons">
      <buttonComponent
        @click="closeModal"
        :buttonTitle="'Отмена'"
        :color="'white'"
      />
      <buttonComponent
        @click="createNew"
        :width="'170px'"
        :buttonTitle="'Подтвердить'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import inputComponent from "@/components/ui/inputComponent.vue";
import buttonComponent from "@/components/ui/buttonComponent.vue";
import colorPicker from "@/components/ui/colorPicker.vue";
import { Item } from "@/models/itemModel";
import { useStore } from "vuex";

export default defineComponent({
  name: "itemCreatorControls",
  components: { inputComponent, buttonComponent, colorPicker },
  setup(props, { emit }) {
    const store = useStore();
    const state = reactive({
      itemValue: 0,
      colors: ["red", "yellow", "violet", "orange", "blue", "green"],
      color: "",
    });

    const closeModal = () => {
      emit("closeModal");
    };

    const pickColor = (newColor: string) => {
      state.color = newColor;
      emit("pickColor", newColor);
    };

    const items = store.getters.items;

    const createNew = () => {
      if (state.itemValue < 1 || state.color === "") {
        alert("Введите количество и выберите цвет");
        return;
      }

      const itemsId = items.length + 1;
      const item = {
        element: {
          square: true,
          color: state.color,
          value: state.itemValue,
        },
        id: itemsId,
      };
      emit("createNew", item as Item);
    };

    return {
      state,
      pickColor,
      createNew,
      closeModal,
    };
  },
});
</script>

<style lang="scss">
.create-controls {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 100%;

  &__buttons {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    column-gap: 10px;
    width: 100%;
  }
}
</style>
