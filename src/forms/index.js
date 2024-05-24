import {ref} from "vue";
export const DEFAULT_ORDER_FORM = {
    name: {
        key: 'name',
        label: 'inputs.name.label',
        value: '',
        error: '',
        valid: true
    },
    request: {
        key: 'request',
        label: 'inputs.request.label',
        values: 'inputs.request.values',
        type: 'radio',
        value: '',
        error: '',
        valid: true
    },
    promo: {
        key: 'promo',
        label: 'inputs.promo.label',
        value: '',
        error: '',
        valid: true
    },
    contact: {
        key: 'contact',
        label: 'inputs.contact.label',
        value: '',
        error: '',
        valid: true
    },
    message: {
        key: 'message',
        label: 'inputs.message.label',
        value: '',
        error: '',
        valid: true,
        long: true
    }
}
export const ORDER_FORM = ref({
    name: {...DEFAULT_ORDER_FORM.name},
    contact: {...DEFAULT_ORDER_FORM.contact},
    request: {...DEFAULT_ORDER_FORM.request},
    message: {...DEFAULT_ORDER_FORM.message},
    promo: {...DEFAULT_ORDER_FORM.promo}
})

export const resetOrderForm = () => {
    ORDER_FORM.value = DEFAULT_ORDER_FORM
}
