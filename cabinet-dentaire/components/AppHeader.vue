<!-- components/AppHeader.vue -->
<template>
  <header class="bg-white/75 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo ou Nom du cabinet -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-xl font-bold text-sky-800">
            Cabinet Michelet
          </NuxtLink>
        </div>

        <!-- Navigation pour grands écrans (CORRIGÉ: xl:) -->
        <div class="hidden xl:flex xl:items-center xl:space-x-1">
          <template v-for="item in navigation" :key="item.name">
            <!-- Lien simple -->
            <NuxtLink v-if="!item.children" :to="item.href" class="text-slate-600 hover:text-sky-600 font-medium transition-colors px-3 py-2 rounded-md">
              {{ item.name }}
            </NuxtLink>
            <!-- Menu déroulant -->
            <div v-else class="relative" @mouseenter="openDropdown(item.name)" @mouseleave="closeDropdown(item.name)">
              <button class="flex items-center text-slate-600 hover:text-sky-600 font-medium transition-colors focus:outline-none px-3 py-2 rounded-md">
                <span>{{ item.name }}</span>
                <Icon name="heroicons:chevron-down-20-solid" class="h-5 w-5 ml-1 transition-transform" :class="{'transform rotate-180': activeDropdown === item.name}" />
              </button>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div v-show="activeDropdown === item.name" class="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56">
                  <div class="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="py-1">
                      <NuxtLink v-for="child in item.children" :key="child.name" :to="child.href" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-sky-700">
                        {{ child.name }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </template>
        </div>
        
        <!-- Bouton RDV pour grands écrans (CORRIGÉ: xl:) -->
        <div class="hidden xl:block">
          <a :href="config.cabinet.rdvUrl" target="_blank" class="bg-sky-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-sky-700 transition-colors">
            Prendre RDV
          </a>
        </div>

        <!-- Bouton menu mobile (CORRIGÉ: xl:) -->
        <div class="xl:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none">
            <span class="sr-only">Ouvrir le menu principal</span>
            <Icon v-if="!isMobileMenuOpen" name="heroicons:bars-3-20-solid" class="h-6 w-6" />
            <Icon v-else name="heroicons:x-mark-20-solid" class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Menu mobile (CORRIGÉ: xl:) -->
      <div v-show="isMobileMenuOpen" class="xl:hidden pb-4">
        <div class="pt-2 pb-3 space-y-1">
          <template v-for="item in navigation" :key="item.name">
            <NuxtLink v-if="!item.children" :to="item.href" @click="isMobileMenuOpen = false" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800">
              {{ item.name }}
            </NuxtLink>
             <div v-else>
              <h3 class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-800">{{ item.name }}</h3>
              <NuxtLink v-for="child in item.children" :key="child.name" :to="child.href" @click="isMobileMenuOpen = false" class="block pl-8 pr-4 py-2 text-base font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800">
                {{ child.name }}
              </NuxtLink>
            </div>
          </template>
        </div>
         <div class="pt-4 pb-3 border-t border-slate-200">
            <a :href="config.cabinet.rdvUrl" target="_blank" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700">
              Prendre RDV
            </a>
         </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const config = useAppConfig()
const navigation = config.navigation

const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)

function openDropdown(name) {
  activeDropdown.value = name
}

function closeDropdown(name) {
  if (activeDropdown.value === name) {
    activeDropdown.value = null
  }
}
</script>
