<template>
  <div class="flex items-center gap-3 mb-4 w-full">
    <h2 class="text-xl font-semibold">{{ title }}</h2>

    <div class="relative transition-all duration-300 w-40 focus-within:w-72">
      <span class="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z"/>
        </svg>
      </span>
      <input
          type="text"
          placeholder="Søg..."
          class="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm w-full transition-all duration-300"
          @input="onInput"
      />
    </div>

    <div class="actionBar ml-auto">
      <As3Button @clicked="emit('addCandidate')">
        Tilføj kandidat
      </As3Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import As3Button from "../../components/common/As3Button.vue";
import { defineEmits } from 'vue';

defineOptions({
  name: 'As3Toolbar',
});

defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  (e: 'search', value: string): void
  (e: 'addCandidate'): void
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit('search', target.value);
  }
}
</script>