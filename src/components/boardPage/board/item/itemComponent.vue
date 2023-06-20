<template>
  <div v-if="showItem" class="item">
    <div :class="`${item.element.color}_blur`" class="item__square__blur"></div>
    <div :class="item.element.color" class="item__square"></div>
    <div v-if="item.element.value > 0" class="quantity">
      {{ item.element.value }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "itemComponent",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const showItem = computed(
      () => props.item.element.square && props.item.element.value
    );
    return {
      showItem,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &__square {
    width: 48px;
    aspect-ratio: 1/1;
  }
  &__square__blur {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-35%, -65%);
    width: 48px;
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
}

.green {
  background-color: #7faa65;
}
.green_blur {
  background: rgba(184, 217, 152, 0.35);
  backdrop-filter: blur(6px);
}

.blue {
  background-color: #4e72d5;
}
.blue_blur {
  background: rgba(59, 79, 181, 0.35);
  backdrop-filter: blur(6px);
}

.red {
  background-color: #d54f4f;
}
.red_blur {
  background: rgba(239, 42, 42, 0.35);
  backdrop-filter: blur(6px);
}

.yellow {
  background-color: #d7d742;
}
.yellow_blur {
  background: rgba(230, 241, 66, 0.35);
  backdrop-filter: blur(6px);
}

.violet {
  background-color: #656caa;
}
.violet_blur {
  background: rgba(116, 129, 237, 0.35);
  backdrop-filter: blur(6px);
}

.orange {
  background-color: #eab35a;
}
.orange_blur {
  background: rgba(237, 221, 116, 0.35);
  backdrop-filter: blur(6px);
}
</style>
