<template>
  <div class="mobile-menu">
    <the-logo />
    <ul class="mobile-menu__list">
      <li
        v-for="(link, i) of $tm('header.navigation')"
        class="mobile-menu__item"
        @click="toggleComponent"
      >
        <a
          :href="links[i]"
          class="mobile-menu__link">{{link}}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import TheLogo from "@/components/TheLogo.vue";
import {useModals} from "@/composables/useModals.js";
const { toggleComponent } = useModals()
const links = ['#', '#coop', '#steps']
</script>

<style lang="scss">
.mobile-menu {
  width: 80%;
  height: 100%;
  background: $white;
  padding: 20px;

  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 32px;
    gap: 8px;
  }

  &__link {
    font-weight: 600;
    font-size: 18px;
    color: $black !important;
    transition: all .25s ease;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
