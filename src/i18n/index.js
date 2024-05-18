import { createI18n } from 'vue-i18n'
import ru from './locales/ru/index.js'
export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallback: import.meta.env.VITE_FALLBACK_LOCALE,
    globalInjection: true,
    legacy: false,
    messages: { ru },
})
