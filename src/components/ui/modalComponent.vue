<template>
  <div class="modal">
    <div class="modal-overlay">
      <div class="modal-content">
        <closeButtonComponent
          :width="'25px'"
          class="modal-close"
          @click="closeModal"
        />
        <!-- Modal content goes here -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import closeButtonComponent from "./closeButtonComponent.vue";

export default {
  name: "modalComponent",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  components: { closeButtonComponent },
  setup(props, { emit }) {
    const closeModal = () => {
      emit("closeModal");
    };

    const isOpen = computed(() => props.open);
    return {
      closeModal,
      isOpen,
    };
  },
};
</script>

<style lang="scss">
.modal {
  .modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 999;

    .modal-content {
      position: relative;
      height: 100%;
      width: 35%;
      min-width: 250px;
      background-color: #212121b0;
      border: 1px solid #4d4d4d;
      padding: 40px;
      backdrop-filter: blur(6px);

      .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }
}
.parent-element {
  cursor: pointer;
}
</style>
