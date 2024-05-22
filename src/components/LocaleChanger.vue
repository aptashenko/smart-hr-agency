<template>
  <div class="local-changer">
    <p>{{$t('global.language')}}</p>
    <button @click="toggleList">
      <transition
        name="fade"
        mode="out-in">
        <svg-icon
          :name="{icon: `${currentLocale}-flag`, dir: 'flags'}"
          :key="currentLocale" />
      </transition>
      <transition name="scale">
        <ul
          v-if="listOpened"
          class="local-changer__list"
        >
          <li
            v-for="{locale, label} of formattedFlagsList"
            :key="locale"
            class="local-changer__item"
          >
            <button @click.stop="handleChange(locale)">
              <svg-icon :name="{icon: `${locale}-flag`, dir: 'flags'}" />
              <p>{{label}}</p>
            </button>
          </li>
        </ul>
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
.local-changer {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px;
  background: $gray-50;
  border: 1px solid $gray-500;
  border-radius: 8px;
  transition: all .25s ease;

  & p {
    font-size: 14px;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  &__list {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: $white;
    list-style: none;

    width: 100%;
  }

  &__item {


    transition: all .25s ease;

    & button {
      display: flex;
      align-items: center;
      gap: 4px;
      padding-right: 10px;
      background: transparent;
      border: transparent;

      & svg {
        flex-shrink: 0;
        width: 28px;
      }

      & p {
        font-size: 12px;
        transition: all .25s ease;
      }
    }

    &:hover {
      background: $purple;
      border-radius: 8px;

      & button {
        & p {
          color: $white;
        }
      }
    }
  }
}
</style>
