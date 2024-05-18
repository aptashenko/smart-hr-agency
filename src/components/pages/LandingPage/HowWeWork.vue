<template>
  <div class="how-we-work">
    <div class="how-we-work__wrapper">
      <h2 class="how-we-work__title">
        {{$t('landing.how_we_work.title')}}
      </h2>
      <div class="how-we-work__grid">
        <div class="how-we-work__card">
          <div class="how-we-work__number">
            <h2>1</h2>
          </div>
          <div class="how-we-work__text">
            <p>
              {{$t('landing.how_we_work.step1')}}
            </p>
          </div>
        </div>
        <div />
        <div class="how-we-work__card">
          <div class="how-we-work__number">
            <h2>3</h2>
          </div>
          <div class="how-we-work__text">
            <p>
              {{$t('landing.how_we_work.step3')}}
            </p>
          </div>
        </div>
        <div />
        <div class="how-we-work__card">
          <div class="how-we-work__number">
            <h2>5</h2>
          </div>
          <div class="how-we-work__text">
            <p>
              {{$t('landing.how_we_work.step5')}}
            </p>
          </div>
        </div>
        <div />
        <div class="how-we-work__card">
          <div class="how-we-work__number">
            <h2>2</h2>
          </div>
          <div class="how-we-work__text">
            <p>
              {{$t('landing.how_we_work.step2')}}
            </p>
          </div>
        </div>
        <div />
        <div class="how-we-work__card">
          <div class="how-we-work__number">
            <h2>4</h2>
          </div>
          <div class="how-we-work__text">
            <p>
              {{$t('landing.how_we_work.step4')}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.how-we-work {
  background: $gray-50;
  padding: 40px 0;

  &__wrapper {
    @include container;
  }

  &__title {
    font-size: 36px;
    font-weight: 900;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin-top: 32px;
  }

  &__number {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid $purple;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    font-size: 28px;
    color: $primary-800;
  }

  &__text {
    text-align: center;
    margin-top: 20px;
  }

}
</style>
