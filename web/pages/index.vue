<!-- pages/index.vue -->
<template>
  <div class="bg-slate-50">
    <!-- ======================================= -->
    <!-- Section Héros: Accueil et Bienvenue     -->
    <!-- ======================================= -->
    <section class="relative bg-sky-700 text-white py-20 md:py-32 overflow-hidden">
      <div class="container mx-auto px-6 text-center z-10 relative">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Cabinet Dentaire Michelet
        </h1>
        <p class="text-lg md:text-2xl text-sky-100 max-w-3xl mx-auto">
          Votre sourire, notre expertise. Les docteurs DELIA, MERIEUX, REGIS et leur équipe vous accueillent à Auterive
          pour des soins dentaires de haute qualité.
        </p>
      </div>
      <!-- Effet de fond subtil -->
      <div
           class="absolute top-0 left-0 w-full h-full bg-grid-sky-900 opacity-30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
    </section>

    <!-- ======================================= -->
    <!-- Section Questionnaire Médical          -->
    <!-- ======================================= -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Colonne Texte -->
          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Préparez votre visite</h2>
            <p class="text-lg text-slate-600 mb-6">
              Cher patient, afin d'optimiser votre temps au cabinet, nous vous invitons à <strong>télécharger, imprimer
                puis remplir le questionnaire médical</strong> ci-dessous. Il sera à remettre à votre praticien lors de
              votre rendez-vous.
            </p>
            <a href="/files/Questionnaire-dentaire.pdf"
               download
               class="inline-flex items-center gap-2 bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-700 transition-transform hover:scale-105">
              <Icon name="heroicons:arrow-down-tray-20-solid"
                    class="h-5 w-5" />
              Télécharger le questionnaire
            </a>
          </div>
          <!-- Colonne Image -->
          <div class="md:w-1/2">
            <!-- J'utilise NuxtImg pour des performances optimales et un placeholder. -->
            <!-- Remplacez le placeholder par le chemin de votre image une fois ajoutée. -->
            <NuxtImg src="https://placehold.co/600x400/e2e8f0/334155?text=Questionnaire+Médical"
                     alt="Illustration d'un formulaire médical"
                     class="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================= -->
    <!-- Section de Navigation Rapide (Services) -->
    <!-- ======================================= -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <!-- Carte 1: Soins -->
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Icon name="healthicons:tooth"
                  class="h-16 w-16 mx-auto text-sky-600 mb-4" />
            <h3 class="text-2xl font-bold text-slate-800 mb-2">Nos Prestations</h3>
            <p class="text-slate-600 mb-6">Découvrez l'ensemble des soins dentaires et esthétiques proposés par notre
              cabinet.</p>
            <NuxtLink to="/a-propos"
                      class="font-bold text-sky-700 hover:underline">Voir les prestations &raquo;</NuxtLink>
          </div>
          <!-- Carte 2: Équipe -->
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Icon name="heroicons:user-group-20-solid"
                  class="h-16 w-16 mx-auto text-sky-600 mb-4" />
            <h3 class="text-2xl font-bold text-slate-800 mb-2">L'équipe</h3>
            <p class="text-slate-600 mb-6">Faites connaissance avec les chirurgiens-dentistes et assistantes qui
              prennent soin de vous.</p>
            <NuxtLink to="/equipe"
                      class="font-bold text-sky-700 hover:underline">Découvrir l'équipe &raquo;</NuxtLink>
          </div>
          <!-- Carte 3: Accès -->
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Icon name="heroicons:map-pin-20-solid"
                  class="h-16 w-16 mx-auto text-sky-600 mb-4" />
            <h3 class="text-2xl font-bold text-slate-800 mb-2">Accès & Horaires</h3>
            <p class="text-slate-600 mb-6">Retrouvez nos coordonnées, horaires d'ouverture et le plan d'accès au
              cabinet.</p>
            <NuxtLink to="/plan-acces"
                      class="font-bold text-sky-700 hover:underline">Venir au cabinet &raquo;</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================= -->
    <!-- Section Histoire du Cabinet             -->
    <!-- ======================================= -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Colonne Image -->
          <div class="md:w-1/2">
            <NuxtImg src="plaque.jpg"
                     alt="Plaque du cabinet dentaire Michelet"
                     class="rounded-lg shadow-xl w-full h-auto" />
          </div>
          <!-- Colonne Texte -->
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Histoire du cabinet</h2>
            <div class="prose prose-lg max-w-none text-slate-600">
              <p>Anciennement centre médical, le cabinet dentaire d'Auterive a vu le jour en Septembre 2000. Il est
                passé progressivement d'un chirurgien dentiste et une salle de soins, à <strong>trois
                  chirurgiens-dentistes</strong> pour trois salles de soins et <strong>quatre assistantes
                  dentaires</strong>.</p>
              <p>Aujourd'hui, après plusieurs phases de modernisation, nous bénéficions de <strong>salles de soins
                  supplémentaires</strong>, d'un <strong>bloc de chirurgie dédié</strong>, et de locaux modernes avec un
                matériel toujours à la pointe de la technologie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================= -->
    <!-- Autres Sections (Salle d'attente, Parking) -->
    <!-- ======================================= -->
    <section class="py-16">
      <div class="container mx-auto px-6 space-y-16">
        <!-- Feature: Salle d'attente -->
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Colonne Texte -->
          <div class="md:w-1/2 md:order-1">
            <h3 class="text-3xl font-bold text-slate-800 mb-4">Un accueil soigné</h3>
            <p class="text-lg text-slate-600">Le cabinet dispose d'une salle d'attente agréable et lumineuse. Notre
              équipe fait le maximum pour respecter vos horaires de rendez-vous afin de garantir votre confort.</p>
          </div>
          <!-- Colonne Image -->
          <div class="md:w-1/2 md:order-2">
            <NuxtImg src="salle_attente.jpg"
                     alt="Salle d'attente du cabinet dentaire"
                     class="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </div>
        <!-- Feature: Parking -->
        <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <!-- Colonne Texte -->
          <div class="md:w-1/2 md:order-2">
            <h3 class="text-3xl font-bold text-slate-800 mb-4">Parking et Accès Facilité</h3>
            <p class="text-lg text-slate-600">Un parking goudronné est à votre disposition pour vous garer facilement.
              L'absence de marche et la présence de rampes permettent un accès facilité pour les brancards et les
              personnes à mobilité réduite.</p>
          </div>
          <!-- Colonne Image -->
          <div class="md:w-1/2 md:order-1">
            <NuxtImg src="parking.jpg"
                     alt="Parking et entrée du cabinet dentaire"
                     class="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({
  title: 'Accueil',
  meta: [
    { name: 'description', content: 'Bienvenue au cabinet dentaire Michelet à Auterive. Prenez rendez-vous avec les docteurs DELIA, MERIEUX et REGIS pour des soins dentaires de qualité, implants, et orthodontie.' }
  ]
})
</script>
