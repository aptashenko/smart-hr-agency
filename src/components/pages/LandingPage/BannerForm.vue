<template>
  <div class="banner-form">
    <div class="banner-form__wrapper">
      <div class="banner-form__left">
        <h2 class="banner-form__title">
          Оставьте заявку
        </h2>
        <p class="banner-form__text">
           Мы свяжемся с вами в течение 24 часов и обсудим выгодные условия сотрудничества!
        </p>
      </div>
      <form-default
          id="order"
          :form-data="ORDER_FORM"
          :cta-label="$t('header.cta')"
          @on-submit="onSubmit"
          class="banner-form__right"
      />
    </div>
  </div>
</template>

<script setup>
import FormDefault from "@/components/forms/FormDefault.vue";
import { ORDER_FORM } from "@/forms/index.js";
</script>

<style lang="scss">
.banner-form {
  background: $gray-50;
  padding: 40px 0;

  &__wrapper {
    @include container;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__title {
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  &__left {
    @media (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
}
</style>
