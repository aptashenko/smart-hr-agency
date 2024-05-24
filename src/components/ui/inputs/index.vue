<template>
  <component
    v-for="input of data"
    :key="input.key"
    :is="inputComponent[input.type || 'default']"
    v-model="input.value"
    :id="input.key"
    :form="input"
    :label="input.label"
    :hide-promo="hidePromoInput(input.key)"
    :disabled="isEmployee"
  />
</template>

<script setup>
import BaseInput from "@/components/ui/inputs/components/BaseInput.vue";
import BaseRadio from "@/components/ui/inputs/components/BaseRadio.vue";
import {useRadioFormValue} from "@/composables/useRadioFormValue.js";
defineProps({
  data: {
    type: Object
  }
})
const { isEmployer, isEmployee } = useRadioFormValue()
const hidePromoInput = key => {
  return key === 'promo' && !isEmployer.value
}
const inputComponent = {
  default: BaseInput,
  radio: BaseRadio
}
</script>
