<template>
  <div class="base-radio">
    <span class="base-radio__label">{{ $t(label) }}</span>
    <div class="base-radio__list">
      <label
        v-for="button of $tm(form.values)"
        class="base-radio__item"
        :class="{checked: modelValue === button}"
      >
        {{button}}
        <input
          type="radio"
          name="requests"
          :value="modelValue"
          @change="handleInput(button)"
        >
      </label>
    </div>
    <p
        v-if="form.error"
        class="base-radio__error"
    >
      {{errorMessage}}
    </p>
  </div>
</template>

<script setup>
import {computed} from "vue";
import {useI18n} from "vue-i18n";

const emit = defineEmits([])
const props = defineProps({
  label: {type: String},
  placeholder: {type: String},
  form: {type: Object},
  id: {type: String, required: true},
  modelValue: {type: String, default: ''},
  event: {type: String, default: 'input'},
  limit: {type: Number, default: 99999}
})

const { t } = useI18n()

const handleInput = value => {
  emit('update:modelValue', value)
}

const errorMessage = computed(() => t(`inputs.${props.form.key}.validation.${props.form.error}`))
</script>

<style lang="scss">
.base-radio {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 16px;
  background: #41455D;
  padding: 20px 10px 10px;
  border-radius: 4px;

  &__label {
    position: absolute;
    left: 7px;
    top: 50%;
    font-style: normal;
    font-weight: 500;
    transition: all .25s ease;
    pointer-events: none;
    transform: translateY(-35px);
    font-size: 12px !important;
    background: $white;
    border-radius: 4px;
    padding: 2px 8px;
    line-height: 1;
    color: #41455D;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__item {
    color: #B6BFF3;
    font-size: 14px;
    cursor: pointer;
    opacity: 0.5;
    transition: all .25s ease;
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover {
      background: $white;
      border-color: $white;
      color: #41455D;
      opacity: 1;
    }

    &.checked {
      background: $white;
      border-color: $white;
      color: #41455D;
      font-weight: 600;
      opacity: 1;
    }

    & input {
      display: none;
    }
  }

  &__error {
    font-size: 12px;
    position: absolute;
    top: -8px;
    left: 5px;
    background: $error;
    border-radius: 4px;
    padding: 2px 8px;
    color: white;
  }
}
</style>
