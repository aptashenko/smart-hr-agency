<template>
  <div class="the-benefits">
    <h2 class="the-benefits__title">
      {{$t('landing.benefits.title')}}
    </h2>
    <ul class="the-benefits__list">
      <li v-for="item of $tm('landing.benefits.list')" class="the-benefits__item">
        <svg-icon name="check-circle" />
        <p>{{item}}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.the-benefits {
  @include container;
  padding: 40px 20px;

  &__title {
    font-size: 36px;
    font-weight: 900;
    text-align: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    list-style: none;
    gap: 5px;
    margin-top: 60px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding: 50px 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    &:nth-last-child(2) {
      grid-column: span 2 / span 2;
    }

    & svg {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
    }

    & p {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }

  }
}
</style>
