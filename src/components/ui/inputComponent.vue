<template>
  <div class="inputComponent">
    <input
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
    />
  </div>
</template>

<script>
export default {
  name: "modalComponent",
  props: {
    modelValue: [String, Number],
  },
  setup(props, { emit }) {
    return {};
  },
};
</script>

<style lang="scss">
.inputComponent {
  width: 100%;

  input {
    width: 100%;
    color: #fff;
    background: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    padding: 15px 20px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>
