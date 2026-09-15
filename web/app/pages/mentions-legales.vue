<!-- pages/mentions-legales.vue -->
<template>
    <div class="bg-white">
        <!-- En-tête de la page -->
        <div class="bg-slate-50 py-12">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl font-bold text-sky-800">Mentions Légales</h1>
            </div>
        </div>

        <!-- Contenu principal de la page -->
        <div class="container mx-auto px-6 py-16">
            <div class="prose prose-lg max-w-4xl mx-auto">

                <h2>Titulaire et directeur de publication du site</h2>
                <p>
                    <strong>Cabinet du docteur Christophe Delia</strong>, Chirurgien-dentiste<br>
                    {{ config.cabinet.address.street }}<br>
                    {{ config.cabinet.address.zip }} {{ config.cabinet.address.city }}<br>
                    Tél: {{ config.cabinet.phone }}<br>
                    Numéro d'inscription au tableau de l'ordre : {{ config.cabinet.ordreNumber }}
                </p>

                <hr>

                <h2>Objet du site</h2>
                <p>
                    Ce site a été réalisé dans le respect de la charte ordinale de qualité relative aux sites internet,
                    ratifiée par le chirurgien-dentiste titulaire. Il a pour mission de présenter le cabinet dentaire et
                    d'informer le public sur les soins réalisés, les moyens de prévention et les conseils en cas
                    d'urgence dentaire. Il est purement informatif et est destiné à tout type de public.
                </p>
                <p>
                    Pour plus d'informations, consultez l'annuaire de l'Ordre National des Chirurgiens-Dentistes :
                    <a href="http://www.annuaire.chirurgiens-dentistes.fr"
                       target="_blank"
                       rel="noopener noreferrer">www.annuaire.chirurgiens-dentistes.fr</a>
                </p>

                <hr>

                <h2>Éditeur et hébergeur du site</h2>
                <p>
                    Ce site a été conçu et est hébergé par Antoine Delia.
                </p>

                <hr>

                <h2>Propriété intellectuelle</h2>
                <p>
                    Le contenu de ce site (textes et médias) est la propriété exclusive du chirurgien-dentiste titulaire
                    de ce site. Toute reproduction, distribution, modification, retransmission ou publication de ces
                    différents éléments est strictement interdite sans accord écrit préalable.
                </p>

                <hr>

                <h2>Confidentialité</h2>
                <p>
                    Les informations personnelles concernant les visiteurs de ce site, y compris leur identité, sont
                    confidentielles. Le responsable du site s'engage sur l'honneur à respecter les conditions légales de
                    confidentialité applicables en France et à ne pas divulguer ces informations à des tiers.
                </p>

            </div>
        </div>
    </div>
</template>

<script setup>
const config = useAppConfig()

useHead({
    title: 'Mentions Légales',
    meta: [
        { name: 'description', content: 'Consultez les mentions légales du site du cabinet dentaire Michelet à Auterive.' }
    ]
})
</script>
