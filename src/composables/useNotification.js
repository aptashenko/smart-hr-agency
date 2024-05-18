import {defineAsyncComponent, reactive} from "vue";
const defaultProps = {
    transition: {name: 'slide-notification'},
}

const globalNotification = reactive({ component: null, props: defaultProps, showContent: false });
export function useNotification() {
    const open = (name, props = {}) => {
        const component = defineAsyncComponent(() => import(`../components/notifications/components/${name}.vue`));
        globalNotification.component = component;
        globalNotification.props = {...defaultProps, ...props};
    }

    const toggleShow = state => {
        const value = typeof state === 'boolean' ? state : !globalNotification.showContent;
        globalNotification.showContent = value;
    }
    const close = () => {
        globalNotification['component'] = null;
        globalNotification['props'] = defaultProps;
    }

    return {globalNotification, close, open, toggleShow}
}
