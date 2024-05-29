<template>
  <div class="how-we-work">
    <div class="how-we-work__wrapper">
      <h2 class="how-we-work__title">
        {{$t('landing.how_we_work.title')}}
      </h2>
      <div class="how-we-work__grid">
        <div data-order="1" class="how-we-work__card">
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
        <div data-order="3" class="how-we-work__card">
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
        <div data-order="5" class="how-we-work__card">
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
        <div data-order="2" class="how-we-work__card">
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
        <div data-order="4" class="how-we-work__card">
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
  padding: 40px 20px;

  &__wrapper {
    @include container;
  }

  &__title {
    font-size: 36px;
    font-weight: 900;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    margin-top: 60px;

    @media (max-width: 768px) {
      width: 85%;
      gap: 14px;
      margin: 0 auto;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-template-rows: repeat(1, minmax(0, 1fr));

      & div[data-order='1'] {
        order: 1;
      }
      & div[data-order='2'] {
        order: 2;
      }
      & div[data-order='3'] {
        order: 3;
      }
      & div[data-order='4'] {
        order: 4;
      }
      & div[data-order='5'] {
        order: 5;
      }
    }
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
