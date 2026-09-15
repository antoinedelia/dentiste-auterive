<!-- pages/nos-prestations/implants.vue -->
<template>
    <div class="bg-white">
        <!-- En-tête de la page -->
        <div class="bg-slate-50 py-12">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl font-bold text-sky-800">Les Implants Dentaires</h1>
                <p class="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">La solution la plus naturelle et durable pour
                    remplacer une ou plusieurs dents manquantes.</p>
            </div>
        </div>

        <!-- Contenu principal de la page -->
        <div class="container mx-auto px-6 py-16">
            <div class="prose prose-lg max-w-4xl mx-auto">

                <!-- Introduction -->
                <blockquote>
                    <p>Qu'il s'agisse des suites d'un accident, d'une maladie ou de caries, la perte de dents constitue
                        un vrai problème de confort et d'estime de soi. Les implants dentaires sont la solution la plus
                        proche du naturel, tant d'un point de vue fonctionnel qu'esthétique.</p>
                </blockquote>

                <!-- Qu'est-ce qu'un implant ? -->
                <h2>Qu'est-ce qu'un implant dentaire ?</h2>
                <p>Les implants dentaires sont aujourd'hui les traitements de l'édentement les plus fiables. Il s'agit
                    de racines artificielles en titane, un matériau parfaitement biocompatible, qui sont insérées dans
                    l'os de la mâchoire.</p>

                <div class="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-6 rounded-lg my-8">
                    <div class="md:w-2/3">
                        <h3>Le phénomène d'ostéointégration</h3>
                        <p>Découvert dans les années 1960, ce phénomène est la clé du succès implantaire. L'os, au
                            contact du titane, va cicatriser et se "souder" directement à l'implant. Cette phase prend 2
                            à 6 mois et rend l'implant extrêmement solide, prêt à servir de support pour une couronne,
                            un bridge ou à stabiliser une prothèse amovible.</p>
                    </div>
                    <div class="md:w-1/3">
                        <NuxtImg src="osteointegration.webp"
                                 class="rounded-lg shadow-md"
                                 alt="Schéma de l'ostéointégration d'un implant dentaire" />
                    </div>
                </div>

                <h3>Le traitement, étape par étape</h3>
                <ol>
                    <li><strong>Bilan pré-implantaire :</strong> Un scanner (Cone Beam) est réalisé au cabinet pour
                        analyser précisément le volume et la qualité de votre os.</li>
                    <li><strong>Pose de l'implant :</strong> L'intervention est réalisée sous anesthésie locale, dans
                        des conditions d'asepsie chirurgicale strictes.</li>
                    <li><strong>Cicatrisation :</strong> Une période de 2 à 3 mois est nécessaire pour que
                        l'ostéointégration soit complète.</li>
                    <li><strong>Phase prothétique :</strong> Une fois l'implant intégré, nous fixons dessus la couronne
                        en céramique ou le bridge définitif.</li>
                </ol>

                <hr class="my-12">

                <!-- Fiabilité et durabilité -->
                <h2>Un traitement fiable et durable</h2>
                <p>Comme pour une dent naturelle, il est difficile de garantir une durée de vie précise pour un implant,
                    car elle dépend de plusieurs facteurs. Cependant, les études scientifiques démontrent que les
                    implants sont plus fiables à long terme que les solutions traditionnelles.</p>

                <h4>Les clés de la réussite du traitement :</h4>
                <ul>
                    <li>La qualité et le volume de l'os initial.</li>
                    <li>Une hygiène bucco-dentaire rigoureuse.</li>
                    <li>Des visites de contrôle régulières au cabinet.</li>
                    <li>L'équilibre global de la prothèse posée sur l'implant.</li>
                </ul>
                <p>Une étude majeure (Lekholm, 2006) a démontré un <strong>taux de survie implantaire de 91% à 20
                        ans</strong>. Autrement dit, vous avez plus de 9 chances sur 10 d'avoir toujours vos implants
                    deux décennies après leur pose.</p>

                <hr class="my-12">

                <!-- Avantages -->
                <h2>Les avantages des implants dentaires</h2>
                <p>Par rapport aux autres traitements, les avantages des implants sont multiples :</p>
            </div>

            <!-- Grille des avantages -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                <div class="flex items-start">
                    <Icon name="heroicons:shield-check-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h4 class="font-bold text-lg">Confort et discrétion</h4>
                        <p class="text-slate-600">Aucun frottement sur la gencive, pas de colle, pas de prothèse qui
                            bouge. Vous retrouvez les sensations d'une dent naturelle.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:sparkles-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h4 class="font-bold text-lg">Préservation des dents saines</h4>
                        <p class="text-slate-600">Contrairement au bridge, il n'est pas nécessaire de tailler les dents
                            voisines saines pour remplacer une dent manquante.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:bars-arrow-up"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h4 class="font-bold text-lg">Maintien du volume osseux</h4>
                        <p class="text-slate-600">L'implant stimule l'os comme une racine naturelle, ce qui empêche sa
                            résorption (perte de volume) avec le temps.</p>
                    </div>
                </div>
                <div class="flex items-start">
                    <Icon name="heroicons:chat-bubble-left-right-solid"
                          class="h-8 w-8 text-sky-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h4 class="font-bold text-lg">Mastication et élocution facilitées</h4>
                        <p class="text-slate-600">La stabilité parfaite des implants vous permet de manger tout ce que
                            vous aimez et d'éviter les difficultés d'élocution.</p>
                    </div>
                </div>
            </div>

            <!-- Vidéo -->
            <div class="max-w-4xl mx-auto mt-16">
                <h2 class="text-3xl font-bold text-slate-800 text-center mb-8">Découvrez les implants en vidéo</h2>
                <div class="aspect-w-16 aspect-h-9">
                    <iframe src="https://www.youtube.com/embed/jpQH4HLm6Ko?rel=0"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            class="rounded-lg shadow-xl"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Le plugin @tailwindcss/typography est nécessaire pour les classes "prose"
// et @tailwindcss/aspect-ratio pour la vidéo responsive.

useHead({
    title: 'Implants Dentaires',
    meta: [
        { name: 'description', content: 'Tout savoir sur les implants dentaires proposés par le cabinet à Auterive : traitement, avantages, durabilité. La solution idéale pour remplacer vos dents.' }
    ]
})
</script>
