<!-- pages/nos-prestations/orthodontie-invisible.vue -->
<template>
    <div class="bg-white">
        <!-- En-tête de la page -->
        <div class="bg-slate-50 py-12">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl font-bold text-sky-800">L'Orthodontie Invisible par Gouttières</h1>
                <p class="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">La solution discrète et confortable pour
                    aligner votre sourire.</p>
            </div>
        </div>

        <!-- Contenu principal de la page -->
        <div class="container mx-auto px-6 py-16">
            <div class="prose prose-lg max-w-4xl mx-auto">

                <!-- Introduction -->
                <blockquote>
                    <p>Les gouttières transparentes, comme le système français SMILERS® que nous utilisons, sont des
                        dispositifs orthodontiques amovibles conçus pour corriger les malpositions dentaires en toute
                        discrétion. Le Dr. Delia est certifié à cette technique depuis 2018.</p>
                </blockquote>

                <!-- Comment ça marche ? -->
                <h2>Comment ça fonctionne ?</h2>
                <p>Le traitement est basé sur une série de gouttières sur-mesure, fabriquées à partir de vos empreintes
                    dentaires numériques.</p>
                <ol>
                    <li><strong>Empreinte numérique :</strong> Nous réalisons une empreinte 3D de vos dents à l'aide
                        d'un scanner intra-oral, sans aucune pâte désagréable.</li>
                    <li><strong>Plan de traitement :</strong> Un plan de traitement virtuel est élaboré, nous permettant
                        de visualiser les étapes et le résultat final avant même de commencer.</li>
                    <li><strong>Série de gouttières :</strong> Vous recevez une série de gouttières. Chaque gouttière,
                        portée environ 2 semaines, déplace vos dents progressivement et en douceur jusqu'à la position
                        désirée.</li>
                </ol>

                <div class="flex flex-col md:flex-row items-center gap-8 my-12 not-prose">
                    <div class="md:w-1/2">
                        <NuxtImg src="https://placehold.co/600x400/e0f2fe/0c4a6e?text=Gouttières+Smilers"
                                 class="rounded-lg shadow-md w-full"
                                 alt="Gouttières d'orthodontie invisible" />
                    </div>
                    <div class="md:w-1/2 space-y-6">
                        <div>
                            <h3 class="text-xl font-bold text-slate-800 flex items-center">
                                <Icon name="heroicons:clock-solid"
                                      class="h-6 w-6 mr-2 text-sky-600" />Durée du traitement
                            </h3>
                            <p class="text-slate-600 mt-2">Pour une efficacité optimale, les gouttières doivent être
                                portées <strong>22 heures par jour</strong>. La durée totale du traitement varie
                                généralement de <strong>6 à 24 mois</strong> selon les cas.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-800 flex items-center">
                                <Icon name="heroicons:shield-exclamation-solid"
                                      class="h-6 w-6 mr-2 text-sky-600" />Précautions à adopter
                            </h3>
                            <p class="text-slate-600 mt-2">Les gouttières doivent être retirées uniquement pour manger
                                et se brosser les dents. Vous pouvez les conserver pour boire de l'eau ou fumer.</p>
                        </div>
                    </div>
                </div>

                <hr class="my-12">

                <!-- Indications -->
                <h2>Pour qui ? Les indications du traitement</h2>
                <p>Ce traitement est particulièrement indiqué pour corriger de nombreux problèmes, chez l'adulte comme
                    chez l'adolescent :</p>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 not-prose mt-6">
                    <li class="flex items-start">
                        <Icon name="heroicons:check-badge-solid"
                              class="h-6 w-6 text-sky-500 mr-3 flex-shrink-0" /><span>Dents mal alignées, chevauchement
                            dentaire.</span>
                    </li>
                    <li class="flex items-start">
                        <Icon name="heroicons:check-badge-solid"
                              class="h-6 w-6 text-sky-500 mr-3 flex-shrink-0" /><span>Diastème (écart important entre
                            les dents).</span>
                    </li>
                    <li class="flex items-start">
                        <Icon name="heroicons:check-badge-solid"
                              class="h-6 w-6 text-sky-500 mr-3 flex-shrink-0" /><span>Problèmes d'occlusion (la manière
                            dont les dents s'emboîtent).</span>
                    </li>
                    <li class="flex items-start">
                        <Icon name="heroicons:check-badge-solid"
                              class="h-6 w-6 text-sky-500 mr-3 flex-shrink-0" /><span>Dysfonctionnements de
                            l'articulation de la mâchoire.</span>
                    </li>
                </ul>

                <hr class="my-12">

                <!-- Avantages -->
                <h2>Les avantages des aligneurs transparents</h2>
                <p>Cette technique moderne présente de multiples avantages par rapport aux systèmes traditionnels :</p>
            </div>

            <!-- Grille des avantages -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
                <div class="flex items-start">
                    <Icon name="heroicons:eye-slash-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Discrétion</h4>
                        <p class="text-slate-600">Les gouttières sont quasiment invisibles, personne ne remarquera que
                            vous suivez un traitement.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:wrench-screwdriver-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Amovible</h4>
                        <p class="text-slate-600">Vous pouvez les retirer pour manger, boire et vous brosser les dents,
                            préservant ainsi votre hygiène.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:face-smile-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Confort</h4>
                        <p class="text-slate-600">Pas de fils métalliques ni de brackets qui peuvent irriter les joues
                            et les gencives.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:magnifying-glass-plus-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Prédictibilité</h4>
                        <p class="text-slate-600">Grâce à la simulation 3D, vous pouvez visualiser le résultat final de
                            votre sourire avant de commencer.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:calendar-days-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Moins de rendez-vous</h4>
                        <p class="text-slate-600">Le traitement nécessite généralement moins de visites de contrôle au
                            cabinet.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:user-group-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Pour tous les âges</h4>
                        <p class="text-slate-600">Une solution idéale pour les adultes et adolescents souhaitant un
                            traitement discret.</p>
                    </div>
                </div>
            </div>

            <!-- Vidéos -->
            <div class="mt-16">
                <h2 class="text-3xl font-bold text-slate-800 text-center mb-8">Découvrez le traitement en vidéo</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div class="aspect-w-16 aspect-h-9">
                        <iframe src="https://www.youtube.com/embed/mQisNJrn7nA?rel=0"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                class="rounded-lg shadow-xl"></iframe>
                    </div>
                    <div class="aspect-w-16 aspect-h-9">
                        <iframe src="https://www.youtube.com/embed/g_bTZjf_7Zs?rel=0"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                class="rounded-lg shadow-xl"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Orthodontie Invisible Smilers®',
    meta: [
        { name: 'description', content: 'Alignez votre sourire en toute discrétion avec les gouttières transparentes Smilers®. Une solution d\'orthodontie moderne, confortable et efficace pour corriger les diastèmes ou les dents mal alignées.' }
    ]
})
</script>
