import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { candidates as initialCandidates } from '../data/candidatesdata';
import type { Candidate } from '../types/candidate';

export const useCandidateStore = defineStore('candidate', () => {
  const candidates = ref<Candidate[]>([...initialCandidates]);

  // Eksempel på en computed getter
  const allCandidates = computed(() => candidates.value);

  // Eksempel på en mutation/action
  const addCandidate(candidate: Candidate) => {
    candidates.value.push(candidate);
  }

  return {
    candidates,
    allCandidates,
    addCandidate,
  };
});