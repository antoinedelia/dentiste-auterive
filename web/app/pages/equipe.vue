<!-- pages/equipe.vue -->
<template>
  <div class="bg-white">
    <!-- En-tête de la page -->
    <div class="bg-slate-50 py-12">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold text-sky-800">Prendre RDV avec notre équipe</h1>
        <p class="mt-2 text-lg text-slate-600">Des professionnels passionnés à votre service.</p>
      </div>
    </div>

    <div class="container mx-auto px-6 py-16">
      <!-- Section Chirurgiens-Dentistes -->
      <section>
        <h2 class="text-3xl font-bold text-slate-800 mb-12 text-center">Nos Chirurgiens-Dentistes</h2>
        <div class="space-y-16">
          <div 
            v-for="(doctor, index) in config.team.doctors" 
            :key="doctor.name"
            class="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <!-- Image -->
            <div class="md:w-1/3" :class="[index % 2 === 1 ? 'md:order-2' : '']">
              <NuxtImg 
                v-if="doctor.img"
                :src="`/team/${doctor.img}`" 
                :alt="`Portrait de ${doctor.name}`" 
                class="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/5]"
                placeholder
              />
              <div v-else class="rounded-lg shadow-xl w-full h-full bg-slate-200 flex items-center justify-center aspect-[4/5]">
                <Icon name="heroicons:user-circle" class="text-slate-400 h-32 w-32"/>
              </div>
            </div>
            <!-- Description -->
            <div class="md:w-2/3">
              <h3 class="text-2xl font-bold text-sky-800">{{ doctor.name }}</h3>
              <ul class="mt-4 space-y-2 text-slate-600 list-disc list-inside">
                <li v-for="desc in doctor.descriptions" :key="desc">{{ desc }}</li>
              </ul>
              <a v-if="doctor.doctolibUrl" :href="doctor.doctolibUrl" target="_blank" class="inline-block mt-6 bg-sky-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-sky-700 transition-colors">
                Prendre RDV avec {{ doctor.name }}
              </a>
              <NuxtLink v-else to="/plan-acces" class="inline-block mt-6 bg-orange-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-orange-700 transition-colors">
                Prise de RDV uniquement par téléphone ou mail
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-16 border-slate-200">

      <!-- Section Assistantes Dentaires -->
      <section>
        <h2 class="text-3xl font-bold text-slate-800 mb-12 text-center">Nos Assistantes Dentaires</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="assistant in config.team.assistants" :key="assistant.name" class="text-center">
            <NuxtImg 
              v-if="assistant.img"
              :src="`/team/${assistant.img}`" 
              :alt="`Portrait de ${assistant.name}`" 
              class="rounded-full shadow-lg w-40 h-40 mx-auto object-cover"
              placeholder
            />
             <div v-else class="rounded-full shadow-lg w-40 h-40 mx-auto bg-slate-200 flex items-center justify-center">
                <Icon name="heroicons:user-circle" class="text-slate-400 h-24 w-24"/>
            </div>
            <h3 class="mt-4 text-xl font-bold text-sky-800">{{ assistant.name }}</h3>
            <p class="text-slate-500">{{ assistant.role }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const config = useAppConfig()

useHead({
  title: 'L\'équipe',
  meta: [
    { name: 'description', content: 'Faites connaissance avec les docteurs et assistantes dentaires du cabinet Michelet à Auterive. Une équipe dédiée à votre santé bucco-dentaire.' }
  ]
})
</script>
