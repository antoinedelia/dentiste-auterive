<!-- pages/divers/cone-beam.vue -->
<template>
    <div class="bg-white">
        <!-- En-tête de la page -->
        <div class="bg-slate-50 py-12">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl font-bold text-sky-800">Le Cone Beam (CBCT)</h1>
                <p class="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">Une vision 3D pour des diagnostics d'une
                    précision inégalée.</p>
            </div>
        </div>

        <!-- Contenu principal de la page -->
        <div class="container mx-auto px-6 py-16">
            <!-- Le conteneur principal gère désormais l'espacement vertical -->
            <div class="max-w-4xl mx-auto space-y-16">

                <!-- Section: A quoi ça sert ? (la classe mb-16 a été retirée) -->
                <section>
                    <div class="flex flex-col md:flex-row items-center gap-12">
                        <div class="md:w-1/2">
                            <NuxtImg src="https://placehold.co/600x400/e0f2fe/0c4a6e?text=Image+3D+Cone+Beam"
                                     class="rounded-lg shadow-md w-full"
                                     alt="Image 3D issue d'un Cone Beam" />
                        </div>
                        <div class="md:w-1/2">
                            <h2 class="text-3xl font-bold text-slate-800 mb-4">À quoi sert un Cone Beam ?</h2>
                            <p class="text-slate-600">
                                Le "Cone Beam" (ou CBCT) est un outil de radiographie 3D de pointe. En un seul cliché,
                                il nous permet de reconstruire virtuellement votre mâchoire et de naviguer millimètre
                                par millimètre dans cet espace.
                            </p>
                            <p class="mt-4 text-slate-600">
                                C'est l'examen de choix en implantologie, car il permet de visualiser les volumes osseux
                                disponibles et de repérer avec une extrême précision les structures anatomiques à
                                protéger, comme les nerfs ou les artères.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Section: Avantages -->
                <section>
                    <h2 class="text-3xl font-bold text-slate-800 text-center mb-12">Les avantages pour le patient</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Avantage 1 -->
                        <div class="flex items-start">
                            <Icon name="heroicons:magnifying-glass-plus-solid"
                                  class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                            <div>
                                <h4 class="font-bold text-lg">Précision extrême</h4>
                                <p class="text-slate-600">L'analyse se fait au dixième de millimètre près, pour un
                                    diagnostic d'une fiabilité maximale.</p>
                            </div>
                        </div>
                        <!-- Avantage 2 -->
                        <div class="flex items-start">
                            <Icon name="heroicons:bolt-solid"
                                  class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                            <div>
                                <h4 class="font-bold text-lg">Résultats instantanés</h4>
                                <p class="text-slate-600">L'image est immédiatement disponible sur l'écran, permettant
                                    une discussion rapide sur le plan de traitement.</p>
                            </div>
                        </div>
                        <!-- Avantage 3 -->
                        <div class="flex items-start">
                            <Icon name="heroicons:clock-solid"
                                  class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                            <div>
                                <h4 class="font-bold text-lg">Gain de temps</h4>
                                <p class="text-slate-600">L'examen est réalisé directement au cabinet, vous évitant de
                                    devoir prendre rendez-vous dans un centre de radiologie externe.</p>
                            </div>
                        </div>
                        <!-- Avantage 4 -->
                        <div class="flex items-start">
                            <Icon name="heroicons:shield-check-solid"
                                  class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                            <div>
                                <h4 class="font-bold text-lg">Faible irradiation</h4>
                                <p class="text-slate-600">La dose de rayons X est jusqu'à douze fois inférieure à celle
                                    d'un scanner médical classique.</p>
                            </div>
                        </div>
                        <!-- Avantage 5 -->
                        <div class="flex items-start">
                            <Icon name="heroicons:face-smile-solid"
                                  class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                            <div>
                                <h4 class="font-bold text-lg">Confort et sérénité</h4>
                                <p class="text-slate-600">Rassurant pour les patients claustrophobes, l'examen se fait
                                    debout ou assis, comme une radio panoramique classique.</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-center text-slate-700 font-semibold mt-12 bg-slate-100 p-4 rounded-lg">
                        Notre cabinet est équipé d'un modèle Carestream CS8100 3D de dernière génération.
                    </p>
                </section>

                <!-- Vidéo -->
                <section>
                    <h2 class="text-3xl font-bold text-slate-800 text-center mb-8">Découvrez le Cone Beam en vidéo</h2>
                    <div class="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                        <iframe src="https://www.youtube.com/embed/gN9FkvsXfOo?rel=0"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                class="rounded-lg shadow-xl"></iframe>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Cone Beam (CBCT)',
    meta: [
        { name: 'description', content: 'Découvrez le Cone Beam, notre système de radiographie 3D pour un diagnostic de précision, essentiel pour la pose d\'implants et l\'analyse de votre mâchoire.' }
    ]
})
</script>
