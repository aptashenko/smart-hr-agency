<template>
  <div class="the-work-areas">
    <div class="the-work-areas__wrapper">
      <h2 class="the-work-areas__title">
        {{$t('landing.work_areas.title')}}
      </h2>
      <div class="the-work-areas__grid">
        <div class="the-work-areas__card">
          <h3 class="the-work-areas__label">
            {{$t('landing.work_areas.managers.title')}}
          </h3>
          <ul class="the-work-areas__list">
            <li
                v-for="item of $tm('landing.work_areas.managers.list')"
                class="the-work-areas__item"
            >
              <svg-icon name="check-circle" />
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
        <div class="the-work-areas__card">
          <h3 class="the-work-areas__label">
            {{$t('landing.work_areas.developers.title')}}
          </h3>
          <ul class="the-work-areas__list">
            <li v-for="item of $tm('landing.work_areas.developers.list')" class="the-work-areas__item">
              <svg-icon name="check-circle" />
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
        <div class="the-work-areas__card">
          <h3 class="the-work-areas__label">
            {{$t('landing.work_areas.digit_marketing.title')}}
          </h3>
          <ul class="the-work-areas__list">
            <li v-for="item of $tm('landing.work_areas.digit_marketing.list')" class="the-work-areas__item">
              <svg-icon name="check-circle" />
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
        <div class="the-work-areas__card">
          <h3 class="the-work-areas__label">
            {{$t('landing.work_areas.aff_marketing.title')}}
          </h3>
          <ul class="the-work-areas__list">
            <li v-for="item of $tm('landing.work_areas.aff_marketing.list')" class="the-work-areas__item">
              <svg-icon name="check-circle" />
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
        <div class="the-work-areas__card">
          <h3 class="the-work-areas__label">
            {{$t('landing.work_areas.business_dev.title')}}
          </h3>
          <ul class="the-work-areas__list">
            <li v-for="item of $tm('landing.work_areas.business_dev.list')" class="the-work-areas__item">
              <svg-icon name="check-circle" />
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.the-work-areas {
  background: $gray-50;

  &__wrapper {
    @include container;

    padding: 40px 20px;
  }

  &__title {
    font-size: 36px;
    font-weight: 900;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
    margin: 60px auto 0;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__card {
    padding: 20px;
    background: $white;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transition: all .5s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__label {
    font-size: 26px;
    font-weight: 900;
    margin-bottom: 12px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;

    & svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
