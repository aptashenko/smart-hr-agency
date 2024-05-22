import i18n from "@/i18n";
import {computed, ref} from "vue";
export const useSwitchLanguage = () => {

    const LANGUAGE_ENUMS = {
        en: "English",
        es: "Español",
        ru: 'Русский'
    }

    const defaultLocale = ref(import.meta.env.VITE_DEFAULT_LOCALE)

    const supportedLocales = ref(import.meta.env.VITE_SUPPORTED_LOCALES.split(','))

    const currentLocale = computed(() => i18n.global.locale.value)

    const usersBrowserLocale = computed(() => {
        const locale = window.navigator.language || window.navigator.userLanguage || defaultLocale.value;
        return {
            locale,
            localeNoRegion: locale.split('-')[0]
        }
    })

    const usersLocale = computed(() => {
        const query = new URLSearchParams(window.location.search);
        const langQuery = query.get('lang');
        const existLanguage = langQuery || localStorage.getItem('lang')
        if(existLanguage) {
            if (supportedLocales.value.includes(existLanguage)) {
                return existLanguage
            } else {
                return defaultLocale.value
            }
        } else {
            if (supportedLocales.value.includes(usersBrowserLocale.value.locale)) {
                return usersBrowserLocale.value.locale
            } else if (supportedLocales.value.includes(usersBrowserLocale.value.localeNoRegion)) {
                return usersBrowserLocale.value.localeNoRegion
            }
            return defaultLocale.value
        }
    })

    const loadLocaleMessages = async locale => {
        if(!i18n.global.availableLocales.includes(locale)) {
            const messages = await import(`@/i18n/locales/${locale}/index.js`);
            i18n.global.setLocaleMessage(locale, messages.default)
        }
    }

    const switchLanguage = async (newLocale = usersLocale.value) => {
        await loadLocaleMessages(newLocale);
        i18n.global.locale.value = newLocale;
        document.querySelector('html').setAttribute('lang', newLocale);
        localStorage.setItem('lang', newLocale);
        document.title = i18n.global.t('global.document_title');
    }

    return {usersLocale, currentLocale, LANGUAGE_ENUMS, supportedLocales, switchLanguage}
}
