<template>
  <footer class="the-footer">
    <div class="the-footer__wrapper">
      <base-button class="the-footer__cta">{{$t('footer.cta')}}</base-button>
      <div class="the-footer__contacts">
        <div class="the-footer__item">
          <p>
            {{$t('footer.telegram_bot.name')}}:
          </p>
          <a :href="$t('footer.telegram_bot.link')">
            {{$t('footer.telegram_bot.label')}}
          </a>
        </div>
        <div class="the-footer__item">
          <p>
            {{$t('footer.email.name')}}:
          </p>
          <a :href="'mailto:' + $t('footer.email.link')">
            {{$t('footer.email.link')}}
          </a>
        </div>
        <ul class="the-footer__social">
          <li v-for="item of $tm('footer.socials')">
            <a :href="item.link">
              <svg-icon :name="item.id" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss">
.the-footer {
  background: $black;
  padding: 40px 0;
  color: $white;

  &__wrapper {
    @include container;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    grid-column: span 2 / span 2;
    gap: 8px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 5px;

    & a {
      color: #1E90FF;
      text-decoration: underline;
    }
  }

  &__social {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 14px;

    & li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;

      & a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        & svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  &__cta {
    width: 50%;
    height: fit-content;
    margin: auto;
  }
}
</style>
