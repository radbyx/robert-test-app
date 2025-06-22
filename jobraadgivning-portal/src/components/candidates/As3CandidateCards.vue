<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-if="candidates.length === 0" class="col-span-1 md:col-span-2 lg:col-span-3 text-center">
      <p class="text-gray-500">Ingen kandidater tilføjet endnu.</p>
    </div>
    <As3CandidateCard
        v-else
        v-for="candidate in candidates"
        :key="candidate.id"
        :candidate="candidate"
        @clicked="$emit('openCandidate', candidate.id)"
        @removeCandidate="$emit('removeCandidate', candidate.id)"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Candidate } from '../../types';
import As3CandidateCard from "../../components/candidates/As3CandidateCard.vue";

defineOptions({
  name: 'As3CandidateCards',
});

defineProps<{
  candidates: Candidate[]
}>();
</script>