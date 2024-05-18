<template>
  <the-header />
  <router-view />
  <the-footer />
  <teleport to="body">
    <base-notification v-if="globalNotification.component" />
  </teleport>
  <teleport to="body">
    <transition name="fade">
      <modal-component v-if="globalModalState.component" />
    </transition>
  </teleport>
</template>

<script setup>

import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import {useModals} from "@/composables/useModals.js";
import ModalComponent from "@/components/modals/ModalComponent.vue";
import {useNotification} from "@/composables/useNotification.js";
import BaseNotification from "@/components/notifications/BaseNotification.vue";
const { globalModalState } = useModals();
const { globalNotification } = useNotification();

</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
</style>
