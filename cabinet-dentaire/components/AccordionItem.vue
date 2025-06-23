<template>
    <div class="border-b border-slate-200">
        <h2>
            <button type="button"
                    class="flex items-center justify-between w-full p-5 font-medium text-left text-slate-700 hover:bg-slate-50"
                    @click="isOpen = !isOpen"
                    :aria-expanded="isOpen">
                <span>{{ title }}</span>
                <Icon name="heroicons:chevron-down-20-solid"
                      class="w-5 h-5 transition-transform duration-200"
                      :class="{ 'transform rotate-180': isOpen }" />
            </button>
        </h2>
        <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 -translate-y-4"
                    enter-to-class="transform opacity-100 translate-y-0"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 translate-y-0"
                    leave-to-class="transform opacity-0 -translate-y-4">
            <div v-show="isOpen"
                 class="p-5 border-t border-slate-200">
                <div class="prose max-w-none text-slate-600">
                    <!-- Le contenu de la fiche sera inséré ici -->
                    <slot />
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    }
})

const isOpen = ref(false)
</script>
