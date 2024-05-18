<template>
  <div class="the-products">
    <h2 class="the-products__title">
      {{$t('landing.prices.title')}}
    </h2>
    <div class="the-products__list">
      <div
          v-for="card of $tm('landing.prices.list')"
          class="the-products__card"
      >
        <h2 class="the-products__label">{{$rt(card.title, {count_1: '$1000', count_2: '$3000'})}}</h2>
        <p class="the-products__cost">{{$rt(card.cost, {cost_1: '100%', cost_2: '200%', cost_3: '250%'})}}</p>
        <base-button class="the-products__cta">
          {{$t('landing.prices.cta')}}
        </base-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<style lang="scss">
.the-products {
  @include container;
  padding: 40px 0;

  &__title {
    font-size: 36px;
    font-weight: 900;
  }

  &__list {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;

    border: 1px solid $gray-200;
    border-radius: 8px;
  }

  &__cta {
    width: 100%;
  }
}
</style>
