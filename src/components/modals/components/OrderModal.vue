<template>
  <div class="order-modal">
    <form-default
      id="order"
      :form-data="ORDER_FORM"
      :cta-label="$t('header.cta')"
      @reset-form="resetOrderForm"
      @on-submit="onSubmit"
    />
  </div>
</template>
<script setup>
import FormDefault from "@/components/forms/FormDefault.vue";
import {ORDER_FORM, resetOrderForm} from "@/forms/index.js";
import {useSendOrder} from "@/composables/useSendOrder.js";

const { onSubmit } = useSendOrder()
</script>

<style lang="scss">
.order-modal {
  background: $gray-50;
  padding: 20px;
  border-radius: 10px;
  min-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
