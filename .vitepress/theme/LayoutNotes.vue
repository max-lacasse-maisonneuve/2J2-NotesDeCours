<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, withBase } from 'vitepress'

const { Layout } = DefaultTheme
const { page } = useData()

</script>

<!-- style="text-decoration: none !important; border: 2px coral solid; padding: 8px; border-radius: 8px; display: inline-block; text-wrap: nowrap; color: coral;margin: 0px auto 2rem auto;font-size:85%;" -->

<template>
  <Layout>
    <template #doc-before>
      <a :href='"./pdf/"+ page.relativePath.replace(".md", ".pdf").replace(".html", ".pdf")' download style="text-decoration: none !important; border: 2px coral solid; padding: 8px; border-radius: 8px; display: inline-block; text-wrap: nowrap; color: coral;margin: 0px auto 2rem auto;font-size:85%;" >Télécharger PDF 📄</a>
    </template>
  </Layout>
</template>