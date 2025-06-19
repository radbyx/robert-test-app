<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Velkommen til Jobrådgivnings Portalen</h1>
    <p class="mb-6">Her kan du finde information om kandidater og hjælpe dem i job.</p>
    
    <h2 class="text-xl font-semibold mb-2">Dine kandidater</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CandidateCard v-for="candidate in candidates" :key="candidate.id" :candidate="candidate" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCandidateStore } from '../store/candidate';
import CandidateCard from '../components/CandidateCard.vue';

const candidateStore = useCandidateStore();
const { candidates } = storeToRefs(candidateStore);
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>