import {computed} from "vue";
import {useI18n} from "vue-i18n";
import {ORDER_FORM} from "@/forms/index.js";

export function useRadioFormValue() {
    const { tm } = useI18n();
    const index = computed(() => tm('inputs.request.values').findIndex(item => item === ORDER_FORM.value.request.value))

    const isEmployee = computed(() => index.value === 0)

    const isEmployer = computed(() => index.value === 1)

    return {isEmployee, isEmployer}
}
