<template>
  <div>
    <button class="closeButtonComponent" :disabled="disabled">
      <svg
        :width="width"
        :height="width"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  data() {
    return {};
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "red",
    },
    width: {
      type: String,
      default: "12",
    },
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.closeButtonComponent {
  font-family: "sfcPro-regular", Helvetica, Arial, sans-serif;
  padding: 8px 15px;
  margin-top: 14px;
  margin: auto 0;
  display: inline-block;
  text-align: center;
  background: #f3f6f8;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-decoration: none;
  color: #707585;
  cursor: pointer;
  background-color: transparent;
  min-width: 40px;

  &:disabled {
    color: #707585 !important;
    background-color: #e5e5e5 !important;
  }
}
</style>
