import {ref} from "vue";
export const DEFAULT_ORDER_FORM = {
    name: {
        key: 'name',
        label: 'inputs.name.label',
        value: '',
        error: '',
        valid: true
    },
    surname: {
        key: 'surname',
        label: 'inputs.surname.label',
        value: '',
        error: '',
        valid: true
    },
    position: {
        key: 'position',
        label: 'inputs.position.label',
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

export const DEFAULT_CALLBACK_FORM = {
    name: {
        key: 'name',
        label: 'inputs.name.label',
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
    }
}
export const ORDER_FORM = ref({
    name: {...DEFAULT_ORDER_FORM.name},
    surname: {...DEFAULT_ORDER_FORM.surname},
    position: {...DEFAULT_ORDER_FORM.position},
    contact: {...DEFAULT_ORDER_FORM.contact},
    message: {...DEFAULT_ORDER_FORM.message}
})

export const CALLBACK_FORM = ref({
    name: {...DEFAULT_CALLBACK_FORM.name},
    contact: {...DEFAULT_CALLBACK_FORM.contact}
})

export const resetOrderForm = () => {
    ORDER_FORM.value = DEFAULT_ORDER_FORM
}
export const resetCallbackForm = () => {
    CALLBACK_FORM.value = DEFAULT_CALLBACK_FORM
}
