<!-- pages/divers/charte-qualite.vue -->
<template>
    <div class="bg-white">
        <!-- En-tête de la page -->
        <div class="bg-slate-50 py-12">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl font-bold text-sky-800">Notre Charte Qualité</h1>
                <p class="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">Nos engagements pour des soins d'excellence.
                </p>
            </div>
        </div>

        <!-- Contenu principal de la page -->
        <div class="container mx-auto px-6 py-16">
            <div class="max-w-4xl mx-auto">
                <p class="text-center text-lg text-slate-600 mb-12">
                    Notre démarche qualité nous impose de respecter un ensemble de principes fondamentaux pour vous
                    garantir les meilleurs soins possibles, en toute transparence et sécurité.
                </p>

                <!-- Liste des engagements -->
                <div class="space-y-10">
                    <!-- Engagement 1: Sélection des produits -->
                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0">
                            <div
                                 class="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-700">
                                <Icon name="heroicons:beaker-solid"
                                      class="h-7 w-7" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-800">Sélection des meilleurs produits</h3>
                            <p class="mt-2 text-slate-600">
                                Nous sélectionnons les meilleurs produits présents sur le marché, qui bénéficient du
                                recul clinique nécessaire. Nos partenaires sont choisis uniquement sur des critères
                                qualitatifs et non sur une démarche commerciale.
                            </p>
                        </div>
                    </div>

                    <!-- Engagement 2: Laboratoires français -->
                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0">
                            <div
                                 class="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-700">
                                <Icon name="heroicons:flag-solid"
                                      class="h-7 w-7" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-800">Prothèses 100% françaises</h3>
                            <p class="mt-2 text-slate-600">
                                Nous travaillons avec des laboratoires de prothèse situés à Miremont et dans la région
                                toulousaine. Ils garantissent un travail de grande qualité, une traçabilité sans faille,
                                et une production entièrement française.
                            </p>
                        </div>
                    </div>

                    <!-- Engagement 3: Consentement éclairé -->
                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0">
                            <div
                                 class="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-700">
                                <Icon name="heroicons:chat-bubble-left-right-solid"
                                      class="h-7 w-7" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-800">Information et consentement éclairé</h3>
                            <p class="mt-2 text-slate-600">
                                Nous nous engageons à vous délivrer une information complète et précise afin que vous
                                puissiez prendre une décision éclairée. Un devis systématique accompagne chacun de nos
                                plans de traitement.
                            </p>
                        </div>
                    </div>

                    <!-- Engagement 4: Approche pluridisciplinaire -->
                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0">
                            <div
                                 class="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-700">
                                <Icon name="heroicons:user-group-solid"
                                      class="h-7 w-7" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-800">Approche pluridisciplinaire</h3>
                            <p class="mt-2 text-slate-600">
                                Nous travaillons en étroite collaboration avec un réseau de thérapeutes (orthodontistes,
                                ORL, pédodontistes, stomatologues) pour solutionner les cas les plus complexes, car le
                                partage des connaissances est la clé de la réussite.
                            </p>
                        </div>
                    </div>

                    <!-- Engagement 5: Absence de mercure -->
                    <div class="flex items-start gap-6">
                        <div class="flex-shrink-0">
                            <div
                                 class="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-700">
                                <Icon name="heroicons:shield-exclamation-solid"
                                      class="h-7 w-7" />
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-800">Absence de mercure</h3>
                            <p class="mt-2 text-slate-600">
                                Nous n'utilisons plus de matériaux contenant du mercure. La pose d'amalgames
                                ("plombages") est remplacée par des résines composites ou des verres ionomères, alliant
                                esthétique et meilleurs résultats biologiques.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Charte Qualité',
    meta: [
        { name: 'description', content: 'Découvrez les engagements qualité de notre cabinet dentaire à Auterive : produits certifiés, prothèses françaises, information transparente et soins sans mercure.' }
    ]
})
</script>
