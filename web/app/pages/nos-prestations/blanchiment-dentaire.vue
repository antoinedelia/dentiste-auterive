<!-- pages/nos-prestations/blanchiment-dentaire.vue -->
<template>
    <div class="bg-white">
        <!-- En-tête de la page -->
        <div class="bg-slate-50 py-12">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl font-bold text-sky-800">Le Blanchiment Dentaire</h1>
                <p class="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">Retrouvez un sourire éclatant et lumineux en
                    toute sécurité.</p>
            </div>
        </div>

        <!-- Contenu principal de la page -->
        <div class="container mx-auto px-6 py-16">
            <div class="prose prose-lg max-w-4xl mx-auto">

                <!-- Introduction -->
                <p>Véritable promesse de séduction et de santé, un joli sourire passe inévitablement par une dentition
                    blanche et bien alignée. Or, différents facteurs (hérédité, vieillissement, consommation de café,
                    thé, tabac...) rendent parfois les dents jaunes ou colorées.</p>

                <div class="flex flex-col md:flex-row items-center gap-8 my-12 not-prose">
                    <div class="md:w-1/2">
                        <NuxtImg src="blanchiment.jpg"
                                 class="rounded-lg shadow-md w-full"
                                 alt="Sourire après un blanchiment dentaire" />
                    </div>
                    <div class="md:w-1/2">
                        <h2>Qu'est-ce que le blanchiment dentaire ?</h2>
                        <p class="text-slate-600">C'est un procédé de dentisterie esthétique qui éclaircit les
                            colorations de l'émail et de la dentine grâce à un gel à base de peroxyde d'hydrogène, sous
                            contrôle d'un chirurgien-dentiste.</p>
                    </div>
                </div>

                <!-- Bilan pré-traitement -->
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 not-prose">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <Icon name="heroicons:exclamation-triangle-solid"
                                  class="h-5 w-5 text-yellow-500"
                                  aria-hidden="true" />
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-yellow-700">
                                <strong>Un bilan bucco-dentaire est indispensable</strong> avant tout traitement. Votre
                                dentiste doit vérifier l'absence de caries, de faiblesses de l'émail ou d'irritations
                                gingivales et réaliser un détartrage complet.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Les techniques -->
                <h2>Nos techniques de blanchiment</h2>
                <h3>Le blanchiment "ambulatoire" (à domicile)</h3>
                <p>C'est la méthode la plus courante et la plus douce. Elle se déroule en deux temps :</p>
                <ol>
                    <li><strong>Au cabinet :</strong> Nous prenons vos empreintes pour confectionner des gouttières
                        sur-mesure, parfaitement adaptées à vos dents.</li>
                    <li><strong>À domicile :</strong> Vous appliquez un gel de blanchiment dans les gouttières et les
                        portez, de préférence la nuit, pendant une dizaine de jours selon la prescription.</li>
                </ol>
                <p>Dans certains cas, une séance de blanchiment directement au fauteuil peut être proposée en complément
                    pour des résultats plus rapides.</p>

                <hr class="my-12">

                <!-- Résultats et durabilité -->
                <h2>Résultats, durabilité et précautions</h2>
                <div class="flex flex-col md:flex-row items-center gap-8 my-12 not-prose">
                    <div class="md:w-1/2">
                        <NuxtImg src="blanchiment-avant-apres.jpg"
                                 class="rounded-lg shadow-md w-full"
                                 alt="Résultat avant après d'un blanchiment dentaire" />
                    </div>
                    <div class="md:w-1/2 space-y-4">
                        <p class="text-slate-600">Les résultats apparaissent généralement après <strong>15
                                jours</strong> et sont stables en moyenne <strong>4 ans</strong>. Cette durée peut
                            varier en fonction de votre hygiène de vie (consommation de café, tabac, etc.).</p>
                        <p class="text-slate-600">En cas de sensibilité dentaire durant le traitement, il est impératif
                            de nous consulter pour éviter tout dommage.</p>
                    </div>
                </div>

                <hr class="my-12">

                <!-- Astuces -->
                <h2>Nos astuces pour des dents plus blanches</h2>
                <p>Pour préserver la blancheur de votre sourire au quotidien, en complément d'une bonne hygiène :</p>
            </div>

            <!-- Grille des astuces -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto mt-8">
                <div class="flex items-start">
                    <Icon name="heroicons:shield-check-solid"
                          class="h-7 w-7 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Détartrage régulier</h4>
                        <p class="text-slate-600">Un détartrage tous les six mois élimine le tartre et les taches de
                            surface.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:no-symbol-solid"
                          class="h-7 w-7 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Limiter les colorants</h4>
                        <p class="text-slate-600">Réduisez votre consommation de café, thé, vin rouge et arrêtez le
                            tabac.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:sparkles-solid"
                          class="h-7 w-7 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Rinçage à l'eau</h4>
                        <p class="text-slate-600">Après avoir bu une boisson colorante, rincez-vous la bouche avec un
                            grand verre d'eau.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:calendar-days-solid"
                          class="h-7 w-7 text-sky-600 mr-4 flex-shrink-0" />
                    <div>
                        <h4 class="font-bold text-lg">Visite annuelle</h4>
                        <p class="text-slate-600">Un contrôle annuel permet de vérifier la bonne santé de vos dents et
                            gencives, condition essentielle à tout traitement esthétique.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Blanchiment Dentaire',
    meta: [
        { name: 'description', content: 'Éclaircissez votre sourire avec nos techniques de blanchiment dentaire professionnelles et sécurisées. Retrouvez des dents plus blanches et un sourire éclatant.' }
    ]
})
</script>
