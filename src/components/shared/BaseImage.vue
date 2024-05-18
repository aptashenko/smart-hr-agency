<template>
  <div
    v-if="imageUrl"
    class="image-wrapper"
  >
    <the-loader v-show="isLoading" />
    <div class="image-block">
      <img
        v-show="!isLoading"
        :src="imageUrl"
        :alt="alt"
        @load="handleLoad"
        class="image"
      >
      <slot />
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useLoading} from "@/composables/useLoading.js";
import TheLoader from "@/components/ui/TheLoader.vue";
const {isLoading, setLoaderState} = useLoading();

const props = defineProps({
  src: {
    type: Object,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})


setLoaderState(true)
const imageUrl = computed(() => {
  if (props.src?.url) {
    return props.src.url
  }
  if (props.src?.subdir) {
    return new URL(`../../assets/images/${props.src?.dir}/${props.src?.subdir}/${props.src?.name}`, import.meta.url).href
  }
  if (props.src?.dir && !props.src?.subdir) {
    return new URL(`../../assets/images/${props.src?.dir}/${props.src?.name}`, import.meta.url).href
  }
  return new URL(`../../assets/images/${props.src?.name}`, import.meta.url).href
})

const handleLoad = () => {
  setLoaderState(false)
}

</script>

<style scoped>
.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.image-block {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
