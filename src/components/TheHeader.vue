<template>
  <header class="the-header">
    <the-logo />
    <ul class="the-header__nav">
      <li v-for="link of $tm('header.navigation')" class="the-header__item">
        <a href="#" class="the-header__link">{{link}}</a>
      </li>
    </ul>
    <base-button class="the-header__cta">
      {{$t('header.cta')}}
    </base-button>
  </header>
</template>

<script>
import {defineComponent} from "vue";
import TheLogo from "@/components/TheLogo.vue";

export default defineComponent({
  components: {TheLogo}
})
</script>

<style lang="scss">
.the-header {
  @include container;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 20px;

  &__nav {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 20px;
    flex-grow: 1;
    margin-left: 40px;
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
