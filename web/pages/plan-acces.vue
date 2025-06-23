<!-- pages/plan-acces.vue -->
<template>
  <div class="bg-white">
    <!-- En-tête de la page -->
    <div class="bg-slate-50 py-12">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-sky-800">Plan d'accès & Contact</h1>
        <p class="mt-2 text-lg text-slate-600">Toutes les informations pour nous trouver et nous contacter.</p>
      </div>
    </div>

    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Colonne de gauche: Infos -->
        <div class="space-y-10">
          <!-- Section Contact -->
          <div>
            <h2 class="text-2xl font-bold text-slate-800 mb-4">Nos coordonnées</h2>
            <div class="space-y-4 text-lg">
              <div class="flex items-start">
                <Icon name="heroicons:map-pin-solid" class="h-6 w-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <div class="font-semibold">{{ config.cabinet.address.street }}</div>
                  <div>{{ config.cabinet.address.zip }} {{ config.cabinet.address.city }}</div>
                </div>
              </div>
              <div class="flex items-center">
                <Icon name="heroicons:phone-solid" class="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                <a :href="`tel:${config.cabinet.phone.replace(/\s/g, '')}`" class="hover:text-sky-700">{{ config.cabinet.phone }}</a>
              </div>
              <div class="flex items-center">
                <Icon name="heroicons:envelope-solid" class="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                <a :href="`mailto:${config.cabinet.email}`" class="hover:text-sky-700">{{ config.cabinet.email }}</a>
              </div>
            </div>
          </div>

          <!-- Section Horaires -->
          <div>
            <h2 class="text-2xl font-bold text-slate-800 mb-4">Horaires d'ouverture</h2>
            <ul class="divide-y divide-slate-200 rounded-lg border border-slate-200">
              <li v-for="horaire in config.cabinet.openingHours" :key="horaire.day" class="flex justify-between p-4">
                <span class="font-semibold text-slate-700">{{ horaire.day }}</span>
                <div class="text-right text-slate-600">
                  <span v-if="horaire.morning !== 'Fermé'">{{ horaire.morning }}</span>
                  <span v-if="horaire.afternoon"> &nbsp;&bull;&nbsp; {{ horaire.afternoon }}</span>
                   <span v-if="horaire.morning === 'Fermé'" class="text-red-600">Fermé</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Colonne de droite: Carte -->
        <div class="h-full min-h-[400px]">
           <iframe
              :src="config.cabinet.googleMapsEmbedUrl"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-lg shadow-lg"
            ></iframe>
            <div class="mt-4 text-center">
              <a :href="config.cabinet.googleMapsUrl" target="_blank" class="inline-flex items-center gap-2 text-sky-700 font-semibold hover:underline">
                <span>Ouvrir dans Google Maps</span>
                <Icon name="heroicons:arrow-top-right-on-square-20-solid" />
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useAppConfig()

useHead({
  title: 'Plan d\'accès et Contact',
  meta: [
    { name: 'description', content: `Contactez le cabinet dentaire Michelet à Auterive. Retrouvez notre adresse, nos horaires d'ouverture et le plan pour vous y rendre.` }
  ]
})
</script>
