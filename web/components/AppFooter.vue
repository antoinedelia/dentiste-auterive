<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-slate-800 text-slate-300">
    <div class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Colonne 1: À propos -->
        <div>
          <h3 class="font-bold text-white text-lg mb-2">Cabinet Dentaire Michelet</h3>
          <p class="text-sm">
            Soins dentaires, implants, orthodontie et esthétique du sourire à Auterive.
          </p>
        </div>
        <!-- Colonne 2: Liens rapides -->
        <div>
          <h3 class="font-bold text-white text-lg mb-2">Liens rapides</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/equipe" class="hover:text-white transition-colors">L'équipe</NuxtLink></li>
            <li><NuxtLink to="/plan-acces" class="hover:text-white transition-colors">Nous contacter</NuxtLink></li>
          </ul>
        </div>
        <!-- Colonne 3: Coordonnées -->
        <div>
          <h3 class="font-bold text-white text-lg mb-2">Contact</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center">
              <Icon name="heroicons:map-pin-20-solid" class="h-5 w-5 mr-2 flex-shrink-0" />
              <span>{{ config.cabinet.address.street }}, {{ config.cabinet.address.zip }} {{ config.cabinet.address.city }}</span>
            </li>
            <li class="flex items-center">
              <Icon name="heroicons:phone-20-solid" class="h-5 w-5 mr-2" />
              <a :href="`tel:${config.cabinet.phone.replace(/\s/g, '')}`" class="hover:text-white transition-colors">{{ config.cabinet.phone }}</a>
            </li>
            <li class="flex items-center">
              <Icon name="heroicons:envelope-20-solid" class="h-5 w-5 mr-2" />
              <a :href="`mailto:${config.cabinet.email}`" class="hover:text-white transition-colors">{{ config.cabinet.email }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
        <p>&copy; {{ new Date().getFullYear() }} Cabinet Dentaire Michelet. Tous droits réservés.</p>
        <p class="mt-2">
          <NuxtLink to="/mentions-legales" class="underline hover:text-white transition-colors">Mentions légales</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useAppConfig()
</script>
