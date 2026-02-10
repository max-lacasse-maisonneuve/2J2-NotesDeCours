import DefaultTheme from 'vitepress/theme'
import LayoutNotes from './LayoutNotes.vue'

import './custom-fonts.css';

export default {
    extends: DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: LayoutNotes
}