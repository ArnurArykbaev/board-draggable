<template>
  <div>
    <button
      class="buttonComponent"
      :class="buttonColors[color]"
      :width="width"
      :height="height"
      :disabled="disabled"
    >
      {{ buttonTitle }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type buttonColors = {
  [key: string]: string;
};

export default defineComponent({
  name: "ButtonComponent",
  data() {
    return {
      buttonColors: {
        red: "red",
        white: "white",
      } as buttonColors,
    };
  },
  props: {
    buttonTitle: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: 130,
    },
    height: {
      type: [String, Number],
      default: 36,
    },
    iconFA: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    borderRadius: {
      type: String,
      default: "8px",
    },
    textTranform: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "red",
    },
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.buttonComponent {
  font-family: "sfcPro-regular", Helvetica, Arial, sans-serif;
  padding: 8px 15px;
  margin-top: 14px;
  margin: auto 0;
  display: inline-block;
  text-align: center;
  background: #f3f6f8;
  border: none;
  border-radius: v-bind(borderRadius);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-decoration: none;
  color: #707585;
  text-transform: v-bind(textTranform);
  cursor: pointer;
  width: v-bind(width);
  min-width: 113px;

  &:disabled {
    color: #707585 !important;
    background-color: #e5e5e5 !important;
  }
}

.red {
  background-color: #fa7272;
  color: #fff;
  box-shadow: 1px 1px 4px #ad5858, -1px -1px 7px #ad5858;

  &:hover {
    box-shadow: 5px 5px 28px #f24c4c, -5px -5px 13px #f24c4c;
  }
}
.white {
  background-color: #ffffff;
  color: #383838;
  box-shadow: 1px 1px 2px #b4a6a6, -1px -1px 10px #a98989;

  &:hover {
    box-shadow: 5px 5px 28px #cdcccc, -5px -5px 13px #c3c0c0;
  }
}
</style>
