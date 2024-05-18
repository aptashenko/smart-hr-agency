<template>
  <div class="the-proposals">
    <div class="the-proposals__wrapper">
      <div class="the-proposals__item">
        <h2 class="the-proposals__title">
          {{$t('landing.proposals.specialists.title')}}
        </h2>
        <hr/>
        <p class="the-proposals__text">
          {{$t('landing.proposals.specialists.description')}}
        </p>
        <hr/>
        <base-button class="the-proposals__cta">
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
        <base-button class="the-proposals__cta">
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
        <base-button class="the-proposals__cta">
          {{$t('landing.proposals.partners.cta')}}
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.the-proposals {
  background: $gray-50;
  padding: 40px 0;

  &__wrapper {
    @include container;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
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

    & hr {
      width: 100%;
      opacity: 0.2;
      margin: 20px 0;
    }
  }

  &__cta {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
