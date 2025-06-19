import { defineStore } from 'pinia';
import { Candidate } from '../types';
import { candidates } from '../data/candidatesdata';

export const useCandidateStore = defineStore('candidate', {
  state: () => ({
    candidates: candidates as Candidate[],
  }),
  actions: {
    async fetchCandidates() {
      // Fetch candidates from an API or other source
      const response = await fetch('/api/candidates');
      const data = await response.json();
      this.candidates = data;
    },
    addCandidate(candidate: Candidate) {
      this.candidates.push(candidate);
    },
    updateCandidate(updatedCandidate: Candidate) {
      const index = this.candidates.findIndex(candidate => candidate.id === updatedCandidate.id);
      if (index !== -1) {
        this.candidates[index] = updatedCandidate;
      }
    },
    removeCandidate(candidateId: string) {
      this.candidates = this.candidates.filter(candidate => candidate.id !== candidateId);
    },
  },
});