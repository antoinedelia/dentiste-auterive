<!-- app.vue -->
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useAppConfig } from '#app'

// On récupère notre configuration globale
const config = useAppConfig()

// On utilise useHead pour définir les balises globales
useHead({
  // titleTemplate permet de définir un modèle pour les titres de toutes les pages.
  // %s sera automatiquement remplacé par le titre de la page en cours.
  titleTemplate: (pageTitle) => {
    if (pageTitle) {
      // Si une page a un titre, on l'affiche suivi du nom du cabinet
      return `${pageTitle} | Cabinet Dentaire Michelet`
    }
    // Sinon (pour la page d'accueil par exemple), on affiche le titre complet
    return config.cabinet.title
  },
  htmlAttrs: {
    lang: 'fr' // Important pour le SEO et l'accessibilité
  },
  meta: [
    // Description par défaut, chaque page pourra la surcharger
    { name: 'description', content: 'Cabinet dentaire des docteurs DELIA, MERIEUX et REGIS à Auterive. Soins, implants, orthodontie et esthétique du sourire.' },
    // Auteur du site
    { name: 'author', content: 'Cabinet Dentaire Michelet' }
  ],
  link: [
    // Ici on pourrait ajouter des liens globaux, comme pour une icône de site (favicon)
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<style>
/* Vos styles globaux (s'il y en a) restent ici */
</style>
