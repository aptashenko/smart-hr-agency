<template>
  <footer class="the-footer">
    <div class="the-footer__wrapper">
      <div class="the-footer__callback">
        <h2 class="the-footer__title">
          {{$t('footer.title')}}
        </h2>
        <form-default
            id="callback"
            :form-data="CALLBACK_FORM"
            :cta-label="$t('footer.cta')"
            class="the-footer__form"
        />
      </div>
      <div class="the-footer__contacts">
        <div class="the-footer__item">
          <p>
            {{$t('footer.telegram_bot.name')}}:
          </p>
          <a :href="$t('footer.telegram_bot.link')" target="_blank">
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
            <a :href="item.link" target="_blank">
              <svg-icon :name="item.id" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>

import FormDefault from "@/components/forms/FormDefault.vue";
import {CALLBACK_FORM} from "@/forms/index.js";
</script>

<style lang="scss">
.the-footer {
  background: $black;
  padding: 40px 0;
  color: $white;

  &__title {
    font-size: 36px;
    font-weight: 900;
    width: 100%;
    margin-bottom: 32px;
  }

  &__wrapper {
    @include container;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 8px;

    @media (max-width: 768px) {
      margin-top: 60px;
    }
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

  &__callback {
    grid-column: span 2 / span 2;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__form {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 10px;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    & form {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      gap: 10px;
      flex: 1;
      height: 100%;

      & .base-input-field {
        width: 100%;
        margin: 0 !important;
        height: 42px;
      }
    }

    & button {
      flex-shrink: 0;
      width: 170px;
    }
  }
}
</style>
