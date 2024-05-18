<template>
  <div class="order-modal">
    <form-default
      id="order"
      :form-data="ORDER_FORM"
      :cta-label="$t('header.cta')"
      @on-submit="onSubmit"
    />
  </div>
</template>
<script setup>
import FormDefault from "@/components/forms/FormDefault.vue";
import {ORDER_FORM} from "@/forms/index.js";
import {ref} from "vue";
import telegramBotSend from "@/services/telegram-send.js";
import {useModals} from "@/composables/useModals.js";
import {useRouter} from "vue-router";
import {useNotification} from "@/composables/useNotification.js";
import {NOTIFICATIONS_NAMES} from "@/components/notifications/components/enums.js";
import {useI18n} from "vue-i18n";
const { toggleComponent } = useModals();
const { open } = useNotification()
const router = useRouter()
const payload = ref({});
const keys = Object.keys(ORDER_FORM.value);
const { t } = useI18n()
keys.forEach(key => {
  payload.value[key] = ORDER_FORM.value[key].value
})
const onSubmit = async () => {
  const keys = Object.keys(ORDER_FORM.value);
  keys.forEach(key => {
    payload.value[key] = ORDER_FORM.value[key].value
  })
  const { name, surname, contact, position, message } = payload.value;
  const orderMessage = `Новая заявка!%0AИмя: ${name}%0AФамилия: ${surname}%0AКонтакт: ${contact}%0AДолжность: ${position}%0AСообщение: ${message}`;
  const status = await telegramBotSend(orderMessage)
  if (status === 200) {
    toggleComponent();
    open(NOTIFICATIONS_NAMES.success, {title: t('global.notification_bars.success.order_sent.title'), text: t('global.notification_bars.success.order_sent.message')})
  }
  else router.push({name: 'error'})
}
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
