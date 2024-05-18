import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n';
import BaseButton from "@/components/ui/BaseButton.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.component('BaseButton', BaseButton)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
