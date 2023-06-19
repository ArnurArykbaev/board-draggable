<template>
  <div class="info-component">
    <div class="card">
      <div class="card-inner">
        <img src="../../assets/cover.jpg" alt="" />
        <skeletonComponent class="info-component__header" :height="'40px'" />
        <skeletonComponent class="info-component__subinfo" :width="'75%'" />
        <skeletonComponent class="info-component__description" :width="'93%'" />
        <skeletonComponent class="info-component__description" :width="'89%'" />
        <skeletonComponent class="info-component__description" :width="'85%'" />
        <skeletonComponent class="info-component__description" :width="'81%'" />
        <skeletonComponent class="info-component__footer" :width="'50%'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import skeletonComponent from "../ui/skeletonComponent.vue";

export default defineComponent({
  name: "infoComponent",
  components: { skeletonComponent },
});
</script>

<style lang="scss">
.info-component {
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 10px;
  }

  &__subinfo {
    margin-top: 14px;
  }

  &__description {
    margin-top: 16px;
  }

  &__footer {
    margin-top: 24px;
  }
}
</style>
