import { createContentLoader } from 'vitepress'

export default createContentLoader('[0-9]*.md', /* options */)