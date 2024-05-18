<template>
  <div>
    <form
      :id="id"
      @submit.prevent="onSubmit"
    >
      <base-input
        v-for="input of formData"
        v-model="input.value"
        :id="input.key"
        :form="input"
        :label="$t(input.label)"
      />
    </form>
    <base-button :form="id" type="submit" :disabled="!enableButton || disabledCta">
      {{ctaLabel}}
    </base-button>
  </div>
</template>

<script setup>
import {useFormValidate} from "@/composables/useFormValidate.js";
import {computed} from "vue";
import {validationRules} from "@/utils/validation/rules/index.js";
import BaseInput from "@/components/ui/BaseInput.vue";

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
  },
})

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
  const isValid = await validate();
  if(isValid) emit('on-submit')
}

const enableButton = computed(() => {
  const values = Object.values(props.formData);
  const isEveryHasValue = values.every(item => item.value)
  const isNoErrors = values.every(item => !item.error)
  return isEveryHasValue && isNoErrors
})
</script>
