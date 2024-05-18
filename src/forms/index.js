import {ref} from "vue";

export const ORDER_FORM = ref({
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
})
