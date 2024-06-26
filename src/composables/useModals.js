import {defineAsyncComponent, reactive} from "vue";
const defaultProps = {
    transition: {name: 'fade'},
    selfClick: true
}

const globalModalState = reactive({ component: null, props: defaultProps, showContent: false });
export function useModals() {
    const openModal = (name, props = {}) => {
        const component = defineAsyncComponent(() => import(`../components/modals/components/${name}.vue`));
        globalModalState.component = component;
        globalModalState.props = {...defaultProps, ...props};
    }

    const toggleComponent = state => {
        const value = typeof state === 'boolean' ? state : !globalModalState.showContent;
        globalModalState.showContent = value;
    }
    const closeModal = () => {
        globalModalState['component'] = null;
        globalModalState['props'] = defaultProps;
    }

    return {globalModalState, closeModal, openModal, toggleComponent}
}
