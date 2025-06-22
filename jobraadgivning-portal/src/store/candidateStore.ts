import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { candidates as initialCandidates } from '../data/candidatesdata';
import type { Candidate } from '../types';

export const useCandidateStore = defineStore('candidate', () => {
  const candidates = ref<Candidate[]>([...initialCandidates]);
  const searchTerm = ref('');

  const allCandidates = computed(() => candidates.value);
  const filteredCandidates = computed(() => {
    if (!searchTerm.value.trim()) return candidates.value;

    const term = searchTerm.value.toLowerCase();
    return candidates.value.filter(candidate =>
        candidate.firstname.toLowerCase().includes(term) ||
        candidate.lastname.toLowerCase().includes(term) ||
        candidate.email.toLowerCase().includes(term)
    );
  });

  const addCandidate = (candidate: Candidate): void => {
    candidates.value.push(candidate);
  };

  const removeCandidate = (id: string): void => {
    candidates.value = candidates.value.filter(candidate => candidate.id !== id);
  };

  const setSearchTerm = (term: string): void => {
    searchTerm.value = term;
  };

  const updateCandidate = (updatedCandidate: Candidate): void => {
    const index = candidates.value.findIndex(c => c.id === updatedCandidate.id);
    if (index !== -1) {
      candidates.value[index] = { ...updatedCandidate };
    }
  };

  return {
    candidates,
    allCandidates,
    filteredCandidates,
    searchTerm,
    setSearchTerm,
    addCandidate,
    removeCandidate,
    updateCandidate,
  };
});
