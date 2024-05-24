<template>
  <label
    class="base-input-field"
    :class="$attrs.class"
    v-if="label && !hidePromo"
    :disabled="disabled"
  >
    <div class="base-input-field__field-wrapper">
      <div
        class="base-input-field__field"
        :class="[{error: form.error}, {focused: isFocused}]"
      >
        <textarea
          v-if="form.long"
          v-model="model"
          :maxlength="limit"
          rows="5"
          :placeholder="placeholder"
          class="base-input-field__long"
          v-on:[focusEvent]="changeEvent"
        />
        <input
          v-else
          ref="input"
          :placeholder="placeholder"
          v-model="model"
          class="base-input-field__input"
          v-on:[focusEvent]="changeEvent"
        >
        <template v-if="modelValue && !form.error">
          <button
            class="base-input-field__icon"
            @click="clear">
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
          {{$t(label)}}
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

import {computed, watch} from "vue";
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
  hidePromo: {type: Boolean, default: true},
  disabled: {type: Boolean, default: false}
})
const { t } = useI18n();
const model = defineModel();
const onFocus = () => {
  props.form.error = '';
  props.form.serverError = '';
}
const { isFocused, changeEvent, focusEvent } = useFocusInput({focus: onFocus})
const clear = () => {
  model.value = ''
}

watch(() => props.disabled, (value) => {
  clear()
})

const errorMessage = computed(() => t(`inputs.${props.form.key}.validation.${props.form.error}`))

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

  transition: all .25s ease;

  &[disabled=true] {
    background: $gray-200;
    pointer-events: none;

    & input {
      cursor: default;
    }

    & textarea {
      cursor: default;
    }

    & label {
      color: $gray-500;
    }
  }

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
      transform: translateY(-25px);
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
        color: $white;
      }

    }
  }

  &__icon {
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

    width: 20px;
    height: 20px;
  }

  &__error {
    font-size: 10px;
    position: absolute;
    top: -8px;
    right: 30px;
    background: $error;
    border-radius: 4px;
    padding: 2px 4px;
    color: white;
  }
}
</style>
