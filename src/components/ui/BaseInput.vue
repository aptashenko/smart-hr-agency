<template>
  <label
      class="base-input-field"
      :class="$attrs.class"
      v-if="label"
  >
    <div class="base-input-field__field-wrapper">
      <div
          class="base-input-field__field"
          :class="[{error: form.error}, {focused: isFocused}]"
      >
        <textarea
            v-if="form.long"
            :value="modelValue"
            :maxlength="limit"
            rows="5"
            :placeholder="placeholder"
            class="base-input-field__long"
            @input="handleInput"
            v-on:[focusEvent]="changeEvent"
        />
        <input
            v-else
            ref="input"
            :placeholder="placeholder"
            :value="modelValue"
            class="base-input-field__input"
            v-on:[event]="handleInput"
            v-on:[focusEvent]="changeEvent"
        >
        <template v-if="modelValue && !form.error">
          <button class="base-input-field__icon" @click="clear">
            <svg-icon name="close" />
          </button>
        </template>
        <template v-if="form.error">
          <svg-icon
              class="base-input-field__icon"
              name="warning"
          />
        </template>
        <label
            v-if="label"
            class="base-input-field__label"
            :class="[{focused: isFocused || modelValue}, {long: form.long}, {error: form.error}]"
        >
          {{label}}
        </label>
      </div>
    </div>
    <p
        v-if="form.error"
        class="base-input-field__error"
    >
      {{errorMessage}}
    </p>
  </label>
</template>

<script setup>

import {computed, onMounted, ref} from "vue";
import {useFocusInput} from "@/composables/useFocusInput.js";
import {useI18n} from "vue-i18n";
import SvgIcon from "@/components/shared/SvgIcon.vue";

const props = defineProps({
  label: {type: String},
  placeholder: {type: String},
  form: {type: Object},
  id: {type: String, required: true},
  modelValue: {type: String, default: ''},
  event: {type: String, default: 'input'},
  limit: {type: Number, default: 99999},
})
const { t } = useI18n();
const onFocus = () => {
  props.form.error = '';
  props.form.serverError = '';
}
const { isFocused, changeEvent, focusEvent } = useFocusInput({focus: onFocus})
const clear = () => {
  emit('update:modelValue', '')
}


const errorMessage = computed(() => t(`inputs.${props.form.key}.validation.${props.form.error}`))

const emit = defineEmits([])

const handleInput = event => {
  const {value} = event.target;
  emit('update:modelValue', value)
}

</script>

<style lang="scss" scoped>
.base-input-field {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 16px;
  background: #41455D;
  padding: 7px;
  border-radius: 4px;
  padding-right: 30px;

  &__field-wrapper {
    flex: 1;
  }

  &__field {
    height: 100%;
  }

  &__input {
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    color: #B6BFF3;
    width: 100%;
    height: 100%;
  }

  &__long {
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    color: #B6BFF3;
    width: 100%;
    resize: none;
  }

  &__label {
    position: absolute;
    left: 7px;
    color: #B6BFF3;
    font-size: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    transition: all .25s ease;
    pointer-events: none;

    &.long {
      top: unset;
      transform: unset;
    }

    &.focused {
      transform: translateY(-30px);
      font-size: 12px !important;
      background: $white;
      border-radius: 4px;
      padding: 2px 8px;
      line-height: 1;
      color: #41455D;

      &.long {
        transform: translateY(-15px);
      }

      &.error {
        background: $error !important;
        color: black !important;
      }

    }
  }

  &__icon {
    width: fit-content;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: #41455D;
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__error {
    color: $error;
    font-size: 10px;
  }
}
</style>
