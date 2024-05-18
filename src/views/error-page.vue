<template>
  <div class="error-page">
    <base-image :src="{name: 'error.png', dir: 'error-page'}" class="error-page__image" />
    <base-button :to="{name: 'home'}">
      {{ $t('global.to_main') }}
    </base-button>
  </div>
</template>

<script setup>
import BaseImage from "@/components/shared/BaseImage.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<style lang="scss">
.error-page {
  min-height: calc(100vh - 283px);
  @include container;
  display: grid;
  place-items: center;

  &__image {
    width: 300px !important;
    margin: 0 auto
  }
}
</style>
