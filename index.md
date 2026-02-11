---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "H26-2J2"
  text: "Création de jeu 2D"

  actions:
    - theme: alt
      text: 📄 Notes
      link: "#notes"
    - theme: alt
      text: 📌 Ressources
      link: "#ressources"
# features:
#   - title: Étape 1
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit

#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { ref } from 'vue'
import { useData, useRouter, withBase } from 'vitepress'
import { data as notes } from './notes.data.js'
import { data as ressources } from './ressources.data.js'
</script>

# 📄 Notes{#notes}

<ul>
<li v-for="note of notes">
    <a :href="withBase(note.url)">{{ note.url.replace("/", "").replace(".html", "").replaceAll("_", " ") }}</a>
</li>
</ul>

# 📌 Ressources {#ressources}

<ul>
<li v-for="ressource of ressources">
    <a :href="withBase(ressource.url)">{{ ressource.url.replace("/", "").replace(".html", "").replaceAll("_", " ") }}</a>
</li>
</ul>