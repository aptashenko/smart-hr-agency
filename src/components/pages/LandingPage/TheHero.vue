<template>
  <div class="the-hero">
    <div class="the-hero__left">
      <h1 class="the-hero__title">{{$t('landing.hero.title')}}</h1>
      <p class="the-hero__subtitle">{{$t('landing.hero.subtitle1')}}</p>
      <p class="the-hero__subtitle">{{$t('landing.hero.subtitle2')}}</p>
      <ul class="the-hero__list">
        <li v-for="item of $tm('landing.hero.benefits')" class="the-hero__item">
          <svg-icon name="check-circle" />
          <p>{{item}}</p>
        </li>
      </ul>
      <div class="the-hero__actions">
        <base-button>
          {{$t('landing.hero.cta2')}}
        </base-button>
        <base-button variant="inverse">
          {{ $t('landing.hero.cta1') }}
        </base-button>
      </div>
    </div>
    <base-image
        :src="{name: 'content1.png', dir: 'landing-page'}"
        class="the-hero__image"
    />
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseImage from "@/components/shared/BaseImage.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";
</script>

<style lang="scss">
.the-hero {
  @include container;

  display: flex;
  align-items: center;

  padding: 40px 20px;

  &__title {
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
  }

  &__subtitle {
    font-size: 16px;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__image {
    flex-shrink: 0;
    width: 40% !important;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    list-style: none;
    gap: 5px;
  }

  &__item {
    display: flex;
    align-items: start;
    gap: 8px;

    & svg {
      flex-shrink: 0;
    }

    & p {
      font-size: 14px;
    }
  }
}
</style>


