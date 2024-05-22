<template>
  <header class="the-header">
    <the-logo />
    <div class="the-header__desktop">
      <ul class="the-header__nav">
        <li v-for="(link, i) of $tm('header.navigation')" class="the-header__item">
          <a :href="links[i]" class="the-header__link">{{link}}</a>
        </li>
      </ul>
      <base-button class="the-header__cta" @click="handleCta">
        {{$t('header.cta')}}
      </base-button>
      <locale-changer />
    </div>
    <div class="the-header__mobile">
      <button class="the-header__burger">
        <svg-icon name="burger" @click="openMobileMenu" />
      </button>
    </div>
  </header>
</template>

<script setup>
import TheLogo from "@/components/TheLogo.vue";
import {useModals} from "@/composables/useModals.js";
import { POPUP_NAMES } from "@/components/modals/components/enums.js";
import LocaleChanger from "@/components/LocaleChanger.vue";

const { openModal } = useModals()
const handleCta = () => {
  openModal(POPUP_NAMES.makeOrder)
}

const openMobileMenu = () => {
  openModal(POPUP_NAMES.mobileMenu, {transition: {name: 'slide'}})
}

const links = ['#', '#coop', '#steps']
</script>

<style lang="scss">
.the-header {
  @include container;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 20px;
    flex-grow: 1;
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

  &__mobile {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__burger {
    background: $gray-50;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
