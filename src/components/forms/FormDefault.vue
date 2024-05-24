<template>
  <div class="default-form">
    <form
      :id="id"
      @submit.prevent="onSubmit"
    >
      <inputs
        :data="formData"
      />
    </form>
    <base-button
      :form="id"
      type="submit"
      :disabled="!enableButton"
    >
      {{buttonLabel}}
    </base-button>
  </div>
</template>

<script setup>
import {useFormValidate} from "@/composables/useFormValidate.js";
import {computed} from "vue";
import {validationRules} from "@/utils/validation/rules/index.js";
import Inputs from "@/components/ui/inputs/index.vue";
import {useI18n} from "vue-i18n";
import {useRadioFormValue} from "@/composables/useRadioFormValue.js";

const emit = defineEmits(['on-submit']);
const props = defineProps({
  formData: {
    type: Object,
    required: true
  },
  id: {
    type: [Number, String],
    required: true
  },
  ctaLabel: {
    type: String,
    default: ''
  },
  disabledCta: {
    type: Boolean,
    default: false
  }
})
const { t } = useI18n()
const { isEmployee } = useRadioFormValue();

const buttonLabel = computed(() => isEmployee.value ? t('footer.telegram_bot.name') : props.ctaLabel)

const validationFormRules = computed(() => {
  const result = {};
  const keys = Object.keys(props.formData);
  keys.forEach(key => {
    result[key] = validationRules[key]
  })

  return result
})

const { validate } = useFormValidate(validationFormRules, props.formData)
const onSubmit = async () => {
  if (isEmployee.value) {
    const a = document.createElement('a');
    a.href = t('footer.telegram_bot.link');
    a.target="_blank"
    a.click()
  } else {
    const isValid = await validate();
    if(isValid) emit('on-submit')
  }
}

const enableButton = computed(() => {
  const entries = Object.entries(validationFormRules.value);
  const requiredField = entries.filter(([_, {value}]) => value.required);
  const requiredKeys = requiredField.map(item => item[0]);
  const isEveryHasValue = requiredKeys.every(key => props.formData[key].value)
  const values = Object.values(props.formData);
  const isNoErrors = values.every(item => !item.error)
  return isEveryHasValue && isNoErrors || isEmployee.value
})

</script>

<style lang="scss">
.default-form {
  & button {
    width: 100%;
  }
}
</style>
