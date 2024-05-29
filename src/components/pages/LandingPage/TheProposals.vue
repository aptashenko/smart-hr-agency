<template>
  <div class="the-proposals">
    <div class="the-proposals__wrapper">
      <h2 class="the-proposals__maintitle">
        {{$t('landing.proposals.title')}}
      </h2>
      <div class="the-proposals__list">
        <div class="the-proposals__item">
          <h2 class="the-proposals__title">
            {{$t('landing.proposals.specialists.title')}}
          </h2>
          <hr/>
          <p class="the-proposals__text">
            {{$t('landing.proposals.specialists.description')}}
          </p>
          <hr/>
          <base-button
              tag="a"
              :href="$t('footer.telegram_bot.link')"
              target="_blank"
              class="the-proposals__cta"
          >
            {{$t('landing.proposals.specialists.cta')}}
          </base-button>
        </div>
        <div class="the-proposals__item">
          <h2 class="the-proposals__title">
            {{$t('landing.proposals.companies.title')}}
          </h2>
          <hr/>
          <p class="the-proposals__text">
            {{$t('landing.proposals.companies.description')}}
          </p>
          <hr/>
          <base-button class="the-proposals__cta" @click="handleCta">
            {{$t('landing.proposals.companies.cta')}}
          </base-button>
        </div>
        <div class="the-proposals__item">
          <h2 class="the-proposals__title">
            {{$t('landing.proposals.partners.title')}}
          </h2>
          <hr/>
          <p class="the-proposals__text">
            {{$t('landing.proposals.partners.description')}}
          </p>
          <hr/>
          <base-button class="the-proposals__cta" @click="handleCta">
            {{$t('landing.proposals.partners.cta')}}
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useModals} from "@/composables/useModals.js";
import { POPUP_NAMES } from "@/components/modals/components/enums.js";

const { openModal } = useModals()
const handleCta = () => {
  openModal(POPUP_NAMES.makeOrder)
}
</script>

<style lang="scss">
.the-proposals {
  padding: 40px 0;

  &__wrapper {
    @include container;
  }

  &__maintitle {
    font-size: 36px;
    font-weight: 900;
    text-align: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
    margin-top: 60px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__title {
    font-size: 26px;
    font-weight: 900;
  }

  &__text {
    font-size: 16px;
    color: $gray-500;
    text-align: center;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    & hr {
      width: 100%;
      opacity: 0.2;
      margin: 20px 0;
    }
  }

  &__cta {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
}
</style>
