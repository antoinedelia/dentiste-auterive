<!-- pages/galerie.vue -->
<template>
    <div class="bg-white">
        <!-- En-tête de la page -->
        <div class="bg-slate-50 py-12">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl font-bold text-sky-800">Galerie Photos</h1>
                <p class="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">Découvrez notre cabinet en images.</p>
            </div>
        </div>

        <!-- Contenu principal de la page -->
        <div class="container mx-auto px-6 py-16">
            <!-- Grille de photos -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="photo in config.gallery"
                     :key="photo.src"
                     class="group block">
                    <!-- Conteneur d'image avec un ratio d'aspect forcé -->
                    <div class="overflow-hidden rounded-lg shadow-lg aspect-[4/3] bg-slate-100">
                        <NuxtImg :src="`/gallery/${photo.src}`"
                                 :alt="photo.alt"
                                 class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                 placeholder
                                 width="400"
                                 height="300"
                                 format="webp" />
                    </div>
                    <h3 class="mt-4 text-center font-semibold text-slate-700">{{ photo.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useAppConfig()

useHead({
    title: 'Galerie',
    meta: [
        { name: 'description', content: 'Visitez en images notre cabinet dentaire à Auterive : salles de soin, accueil, équipement et équipe.' }
    ]
})
</script>
