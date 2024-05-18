<template>
  <button :class="[mainClass]">
    <slot />
  </button>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})

const mainClass = computed(() => ({
  default: 'base-button',
  inverse: 'base-button-inversed'
})[props.variant])
</script>

<style lang="scss">
.base-button {
  background: $purple;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 700;
  color: $white;
  transition: all .25s ease;
  border: 2px solid transparent;

  &:hover {
    background: $primary-800;
  }

  &:focus {
    background: $primary-600;
    border-color: $primary-300;
  }
}
.base-button-inversed {
  background: $white;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 700;
  color: $black;
  transition: all .25s ease;
  border: 2px solid $gray-200;
}
</style>
