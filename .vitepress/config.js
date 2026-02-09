import { defineConfig } from 'vitepress'
import { withI18n } from 'vitepress-i18n';
import { generateSidebar } from 'vitepress-sidebar';

const vitePressI18nOptions = {
    /* Options... */
    locales: ['fr'],
    rootLocale: "fr",
    searchProvider: "local"
};

const vitepressOptions = {
    title: "H26-2J2 Création de jeu 2D",
    description: "Notes de cours",
    srcDir: "./",
    base: "/2J2-NotesDeCours/",
    lang: 'fr-CA',
    lastUpdated: true,
    srcExclude: ["brouillons/", "archives/", "synopsis/", "readme.md"],
    locales: {
        root: {
            label: 'Français',
            lang: 'fr'
        },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' }
        ],
        sidebar: generateSidebar({
            // VitePress Sidebar's options here...
            underscoreToSpace: true,
            sortMenusOrderNumericallyFromLink: true,
            excludeByGlobPattern: ["brouillons/", "archives/", "synopsis/", "readme.md"]
        }),

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        search: {
            provider: 'local'
        }
    }
}

// https://vitepress.dev/reference/site-config
export default defineConfig(withI18n(vitepressOptions, vitePressI18nOptions));

