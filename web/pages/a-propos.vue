<!-- pages/a-propos.vue -->
<template>
  <div class="bg-white">
    <!-- ======================================= -->
    <!-- En-tête de la page                      -->
    <!-- ======================================= -->
    <div class="bg-slate-50 py-12">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-sky-800">À propos du cabinet</h1>
        <p class="mt-2 text-lg text-slate-600">Découvrez notre philosophie, nos équipements et nos engagements.</p>
      </div>
    </div>

    <!-- ======================================= -->
    <!-- Section de présentation                 -->
    <!-- ======================================= -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-7/12">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Un cabinet à votre service</h2>
            <div class="prose prose-lg max-w-none text-slate-600">
              <p>
                Les docteurs Delia, Merieux et Regis ainsi que toute leur équipe sont heureux de vous accueillir sur le site de leur cabinet dentaire. Vous y trouverez toutes les informations pratiques, de notre <strong>numéro de téléphone</strong> à notre <strong>localisation</strong>, ainsi qu'un aperçu des techniques de dentisterie moderne que nous mettons à votre service.
              </p>
            </div>
          </div>
          <div class="md:w-5/12">
            <NuxtImg 
              src="cabinet.jpg" 
              alt="Présentation du cabinet dentaire" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-6"><hr class="border-slate-200"></div>

    <!-- ======================================= -->
    <!-- Section Équipements                     -->
    <!-- ======================================= -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-800">Des équipements de pointe</h2>
          <p class="mt-2 text-lg text-slate-500">Pour des diagnostics précis et des soins de haute qualité.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Carte Équipement -->
          <div v-for="equipement in equipements" :key="equipement.name" class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-sky-100 text-sky-700">
                <Icon :name="equipement.icon" class="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-800">{{ equipement.name }}</h3>
              <p class="mt-1 text-slate-600">{{ equipement.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-6"><hr class="border-slate-200"></div>

    <!-- ======================================= -->
    <!-- Section Traitements                     -->
    <!-- ======================================= -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
           <div class="md:w-5/12">
            <NuxtImg 
              src="https://placehold.co/600x400/f0f9ff/082f49?text=Sourire+éclatant" 
              alt="Illustration de soins dentaires" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div class="md:w-7/12">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Nos traitements</h2>
            <ul class="space-y-3 text-slate-600">
              <li v-for="traitement in traitements" :key="traitement" class="flex items-start">
                <Icon name="heroicons:check-circle-20-solid" class="h-6 w-6 text-sky-500 mr-3 mt-1 flex-shrink-0" />
                <span>{{ traitement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-6"><hr class="border-slate-200"></div>

    <!-- ======================================= -->
    <!-- Section Infos complémentaires           -->
    <!-- ======================================= -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-7/12 md:order-2">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Informations complémentaires</h2>
            <div class="prose prose-lg max-w-none text-slate-600">
              <p>Le cabinet est équipé d'un lecteur de carte bleue et l'accès pour les personnes à mobilité réduite est facilité.</p>
              <p>Nous appliquons le dispositif <strong>100% Santé</strong> (reste à charge zéro) pour les soins et prothèses éligibles. Nous ne pratiquons cependant pas le tiers payant.</p>
            </div>
          </div>
          <div class="md:w-5/12 md:order-1">
            <NuxtImg 
              src="https://placehold.co/600x400/e2e8f0/334155?text=Carte+Vitale" 
              alt="Carte vitale" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
// SEO de la page (simplifié)
useHead({
  // On ne définit plus que la partie spécifique à la page
  title: 'Le Cabinet',
  // On surcharge la description par défaut pour qu'elle soit plus pertinente
  meta: [
    { name: 'description', content: 'Découvrez notre cabinet dentaire à Auterive, nos équipements modernes et les traitements que nous proposons pour la santé de votre sourire.' }
  ]
})

// Données pour la section Équipements
const equipements = [
  { name: 'Radiopanoramique 2D & Scanner 3D', icon: 'heroicons:viewfinder-circle', description: 'Pour un diagnostic précis et un plan de traitement plus efficace.' },
  { name: 'Scanner intra-oral (CFAO)', icon: 'heroicons:camera', description: 'Empreintes optiques rapides et précises, sans inconfort.' },
  { name: 'Anesthésie électronique QuickSleeper™', icon: 'heroicons:beaker', description: 'Une anesthésie plus efficace, rapide et sans douleur.' },
  { name: 'Lampe de blanchiment Zoom™', icon: 'heroicons:sparkles', description: 'La référence pour éclaircir votre sourire de manière spectaculaire.' },
  { name: 'Aéropolisseur', icon: 'heroicons:paint-brush', description: 'Élimine efficacement les colorations de café, thé ou nicotine.' },
  { name: 'Équipement d\'endodontie moderne', icon: 'heroicons:cog-6-tooth', description: 'Pour des traitements canalaires (dévitalisations) fiables et sécurisés.' },
]

// Données pour la section Traitements
const traitements = [
  'Soins courants : caries, détartrage, chirurgie.',
  'Éclaircissement du sourire par blanchiment externe (Zoom™).',
  'Pose d\'implants dentaires pour remplacer les dents manquantes.',
  'Orthodontie par gouttières d\'alignement invisibles (Smilers®).',
  'Traitement des maladies des gencives (parodontopathies).',
  'Prothèses fixes et amovibles de fabrication 100% française.',
]
</script>
