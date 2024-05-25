import {ORDER_FORM, resetOrderForm} from "@/forms/index.js";
import telegramBotSend from "@/services/telegram-send.js";
import {NOTIFICATIONS_NAMES} from "@/components/notifications/components/enums.js";
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {useNotification} from "@/composables/useNotification.js";
import {useModals} from "@/composables/useModals.js";

export function useSendOrder(onSuccess) {
    const payload = ref({});
    const keys = Object.keys(ORDER_FORM.value);
    const { t } = useI18n();
    const { open } = useNotification()
    const router = useRouter();
    const { toggleComponent } = useModals();
    keys.forEach(key => {
        payload.value[key] = ORDER_FORM.value[key].value
    })
    const onSubmit = async () => {
        const keys = Object.keys(ORDER_FORM.value);
        keys.forEach(key => {
            payload.value[key] = ORDER_FORM.value[key].value
        })
        const { name, contact, request, message, promo } = payload.value;
        const orderMessage = `Новая заявка!%0AИмя: ${name}%0AЦель: ${request}%0AКонтакт: ${contact}%0AПромокод: ${promo || '-'}%0AСообщение: ${message}`;
        const status = await telegramBotSend(orderMessage)
        if (status === 200 || status === 201) {
            toggleComponent()
            open(NOTIFICATIONS_NAMES.success, {title: t('global.notification_bars.success.order_sent.title'), text: t('global.notification_bars.success.order_sent.message')})
        }
        else router.push({name: 'error'})
        resetOrderForm()
    }

    return {
        onSubmit
    }
}
