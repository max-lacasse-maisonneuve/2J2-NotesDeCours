<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter, withBase } from 'vitepress'
import {ref } from 'vue'

const { Layout } = DefaultTheme
const { page } = useData()
const { route } = useRouter()

const pdfURL = `/pdf/${ page.value.relativePath.replace(".md", ".pdf")}`

</script>

<template>
  <Layout>
    <template #doc-before>
      <a :href="withBase(pdfURL)" download style="text-decoration: none !important; border: 2px coral solid; padding: 8px; border-radius: 8px; display: inline-block; text-wrap: nowrap; color: coral;margin: 0px auto 2rem auto;font-size:85%;">Télécharger PDF 📄</a>
    </template>
  </Layout>
</template>