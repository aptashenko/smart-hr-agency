<template>
  <div class="the-notification">
    <button
        class="the-notification__close"
        @click="closeNotify"
    >
      <span>
        <svg-icon name="close" />
      </span>
    </button>
    <div class="the-notification__body">
      <h2 class="">
        {{title}}
      </h2>
      <p class="">
        {{text}}
      </p>
    </div>
    <div
        class="the-notification__progress"
        :style="{width: width + '%'}"
    />
  </div>
</template>
<script setup>
import SvgIcon from "@/components/shared/SvgIcon.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useNotification} from "@/composables/useNotification.js";
const { toggleShow } = useNotification()
defineProps({
  title: {type: String, default: ''},
  text: {type: String, default: ''}
})
let intervalId;
const width = ref(100);
const delay = 8000;
const decrementRate = width.value / delay;
const closeNotify = () => {
  toggleShow()
}

const startInterval = () => {
  intervalId = setInterval(() => {
    width.value -= decrementRate * 10;
    width.value = Math.max(width.value, 0);
    if (width.value <= 0) {
      clearInterval(intervalId);
      closeNotify()
    }
  }, 1);
}

onMounted(startInterval)

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

</script>

<style lang="scss">
.the-notification {
  position: fixed;
  top: 85vh;
  left: 50%;

  transform: translateX(-50%);

  width: 100%;

  border-radius: 8px;
  background: $black;
  box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.14), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.20);
  padding: 12px 16px;
  overflow: hidden;
  max-width: 335px;
  margin: 0 auto;


  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  z-index: 1000;

  &__progress {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 14px;
    background: $white;
    border-radius: 10px;
    transition: all .25s linear;
  }

  &__close {
    position: relative;
    flex-shrink: 0;
    background: black;
    border: none;
    margin: 0;
    display: flex;
    border-radius: 50%;

    padding: 3px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 240px;
      height: 240px;
      background: radial-gradient(50% 50% at 50% 50%, rgba(240, 66, 72, 0.13) 0%, rgba(240, 66, 72, 0.00) 100%);
      pointer-events: none;
    }

    & span {
      background: $error;
      display: flex;
      border-radius: 50%;
      padding: 2px;

      & svg {
        width: 16px;
        height: 16px;
        & path {
          stroke: black;
        }
      }
    }
  }

  &__body {
    flex-grow: 1;

    & h2 {
      color: $error;
      font-size: 18px;
      font-weight: 700 !important;
      line-height: 22px !important;
    }

    & p {
      color: $white;
      font-size: 14px !important;
      line-height: 1.5 !important;
    }
  }
}
</style>
