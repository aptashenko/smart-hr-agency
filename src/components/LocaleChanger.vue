<template>
  <div class="local-changer">
    <p>{{$t('global.language')}}</p>
    <button class="local-changer__label" @click="toggleList">
      {{LANGUAGE_ENUMS[currentLocale]}}
      <transition name="scale">
        <div
          v-if="listOpened"
          class="local-changer__list"
        >
          <button
              v-for="{locale, label} of formattedFlagsList"
              :key="locale"
              @click.stop="handleChange(locale)"
              class="local-changer__item"
          >
            {{label}}
          </button>
        </div>
      </transition>
    </button>
  </div>
</template>
<script setup>
import SvgIcon from "@/components/shared/SvgIcon.vue";
import {useSwitchLanguage} from "@/composables/useSwitchLanguage.js";
import {computed} from "vue";
import {useToggle} from "@/composables/useToggle.js";
const { currentLocale, supportedLocales, switchLanguage, LANGUAGE_ENUMS } = useSwitchLanguage();
const { isToggled:listOpened, toggle:toggleList } = useToggle();
const formattedFlagsList = computed(() => supportedLocales.value.filter(locale => locale !== currentLocale.value).map(locale => ({locale, label: LANGUAGE_ENUMS[locale] })));
const handleChange = locale => {
  switchLanguage(locale);
  toggleList()
}
</script>


<style lang="scss">
@-webkit-keyframes blink-2 {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.7;
  }
}
@keyframes blink-2 {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.7;
  }
}

.local-changer {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px;
  border-radius: 8px;
  transition: all .25s ease;

  &::after {
    content: '';
    width: 7px;
    height: 7px;
    display: block;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: $purple;
    border-radius: 50%;
    opacity: 0.7;
    -webkit-animation: blink-2 5s infinite both;
    animation: blink-2 5s infinite both;
  }

  & p {
    font-size: 14px;
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    background: transparent;
    font-size: 14px;
    font-weight: 600;
    color: $purple;
    text-decoration: underline;
  }

  &__list {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: $white;
    list-style: none;

    width: fit-content;
  }

  &__item {
    transition: all .25s ease;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: transparent;
    font-size: 12px;
    transition: all .25s ease;

    &:hover {
      background: $purple;
      border-radius: 8px;
      color: $white;
    }
  }
}
</style>
