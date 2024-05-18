<template>
  <div class="the-work-areas">
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
</template>

<script setup></script>

<style lang="scss">
.the-work-areas {
  @include container;

  padding: 40px 20px;

  &__title {
    font-size: 36px;
    font-weight: 900;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 40px;
    margin: 32px auto;
  }

  &__card {
    padding: 20px;
    background: $gray-50;
    border-radius: 12px;
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
  }
}
</style>
